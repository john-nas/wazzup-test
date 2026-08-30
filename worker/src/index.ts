interface Env {
  SQUARE_ACCESS_TOKEN: string
  SQUARE_LOCATION_ID: string
  SQUARE_WEBHOOK_SIGNATURE_KEY: string
  APP_ORIGIN: string
}

type AuthoritativeMenuItem = {
  name: string
  priceInCents: number
}

type ValidatedCheckout = {
  checkoutAttemptId: string
  items: {
    itemId: string
    quantity: number
    item: AuthoritativeMenuItem
  }[]
  pickup: {
    type: 'ASAP' | 'SCHEDULED'
    pickupAt?: string
  }
  customer: {
    name: string
    phone: string
    email?: string
  }
  returnUrl: string
}

type SquarePaymentLinkResponse = {
  payment_link?: {
    order_id?: string
    url?: string
  }
  errors?: unknown
}

const squareApiBaseUrl = 'https://connect.squareupsandbox.com'
const squareApiVersion = '2026-08-19'
const maximumRequestBytes = 32_000
const maximumWebhookBytes = 256_000
const maximumItemQuantity = 10
const maximumLineItems = 30
const maximumScheduledDays = 7
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

// TODO: Replace this ad hoc server-owned price map with Square Catalog IDs.
// Browser prices are display-only and are never used to create a Square order.
const authoritativeMenu: Record<string, AuthoritativeMenuItem> = {
  'falafel-box': { name: 'Falafel Box', priceInCents: 2200 },
  'knockout-box': { name: 'Knockout Falafel Box', priceInCents: 2500 },
  'junior-falafel-box': { name: 'Junior Falafel Box', priceInCents: 1200 },
  fsp: { name: 'Falafel Snack Pack (FSP)', priceInCents: 2200 },
  'junior-fsp': { name: 'Junior Falafel Snack Pack', priceInCents: 1200 },
  'falafel-wrap': { name: 'Falafel Wrap', priceInCents: 1200 },
  'special-wrap': { name: 'Special Falafel Wrap', priceInCents: 1500 },
  'pita-pocket': { name: 'Falafel Pita Pocket', priceInCents: 1200 },
  'special-pita-pocket': { name: 'Special Falafel Pita Pocket', priceInCents: 1400 },
  'stuffed-falafel': { name: 'Stuffed Falafel', priceInCents: 500 },
  fatteh: { name: 'Fatteh', priceInCents: 1700 },
  musabbaha: { name: 'Musabbaha', priceInCents: 1400 },
  'falafel-salad': { name: 'Falafel Salad', priceInCents: 1700 },
}

class HttpError extends Error {
  readonly status: number

  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function requireEnvironmentValue(value: string | undefined, name: string) {
  if (!value?.trim()) throw new HttpError(500, `Worker environment value ${name} is not configured.`)
  return value.trim()
}

function configuredAppOrigin(env: Env) {
  const configured = requireEnvironmentValue(env.APP_ORIGIN, 'APP_ORIGIN')

  try {
    const url = new URL(configured)
    if (url.pathname !== '/' || url.search || url.hash) {
      throw new Error('APP_ORIGIN must contain only an origin.')
    }
    return url.origin
  } catch {
    throw new HttpError(500, 'Worker APP_ORIGIN is invalid.')
  }
}

function jsonResponse(
  body: unknown,
  status = 200,
  additionalHeaders: HeadersInit = {},
) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      ...additionalHeaders,
    },
  })
}

function corsHeaders(request: Request, env: Env) {
  const allowedOrigin = configuredAppOrigin(env)
  const requestOrigin = request.headers.get('Origin')
  if (requestOrigin !== allowedOrigin) throw new HttpError(403, 'Origin is not allowed.')

  return {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  }
}

async function parseJsonBody(request: Request, byteLimit: number): Promise<unknown> {
  const contentLength = Number(request.headers.get('Content-Length') ?? 0)
  if (Number.isFinite(contentLength) && contentLength > byteLimit) {
    throw new HttpError(413, 'Request body is too large.')
  }

  const rawBody = await request.text()
  if (new TextEncoder().encode(rawBody).byteLength > byteLimit) {
    throw new HttpError(413, 'Request body is too large.')
  }

  try {
    return JSON.parse(rawBody) as unknown
  } catch {
    throw new HttpError(400, 'Request body must be valid JSON.')
  }
}

function validateCheckout(payload: unknown, env: Env): ValidatedCheckout {
  if (!isRecord(payload)) throw new HttpError(400, 'Checkout payload is invalid.')

  const checkoutAttemptId = typeof payload.checkoutAttemptId === 'string'
    ? payload.checkoutAttemptId.trim()
    : ''
  if (!uuidPattern.test(checkoutAttemptId)) {
    throw new HttpError(400, 'Checkout attempt ID is invalid.')
  }

  if (!Array.isArray(payload.items) || payload.items.length === 0) {
    throw new HttpError(400, 'At least one menu item is required.')
  }
  if (payload.items.length > maximumLineItems) {
    throw new HttpError(400, 'Too many order lines were supplied.')
  }

  const quantities = new Map<string, number>()
  for (const rawLine of payload.items) {
    if (!isRecord(rawLine)) throw new HttpError(400, 'Order line is invalid.')

    const itemId = typeof rawLine.itemId === 'string' ? rawLine.itemId : ''
    const quantity = rawLine.quantity
    const modifiers = rawLine.modifiers

    if (!authoritativeMenu[itemId]) throw new HttpError(400, `Unknown menu item: ${itemId || 'missing'}.`)
    if (!Number.isInteger(quantity) || Number(quantity) < 1 || Number(quantity) > maximumItemQuantity) {
      throw new HttpError(400, 'Item quantity is outside the allowed range.')
    }
    if (modifiers !== undefined && (!Array.isArray(modifiers) || modifiers.length > 0)) {
      throw new HttpError(400, 'This prototype does not support item modifiers.')
    }

    const combinedQuantity = (quantities.get(itemId) ?? 0) + Number(quantity)
    if (combinedQuantity > maximumItemQuantity) {
      throw new HttpError(400, 'Combined item quantity is outside the allowed range.')
    }
    quantities.set(itemId, combinedQuantity)
  }

  if (!isRecord(payload.customer)) throw new HttpError(400, 'Customer details are invalid.')
  const name = typeof payload.customer.name === 'string' ? payload.customer.name.trim() : ''
  const phone = typeof payload.customer.phone === 'string' ? payload.customer.phone.trim() : ''
  const email = typeof payload.customer.email === 'string' ? payload.customer.email.trim() : ''

  if (!name || name.length > 100) throw new HttpError(400, 'Customer name is invalid.')
  if (phone.length < 3 || phone.length > 17) throw new HttpError(400, 'Customer phone is invalid.')
  if (email && (email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    throw new HttpError(400, 'Customer email is invalid.')
  }

  if (!isRecord(payload.pickup)) throw new HttpError(400, 'Pickup selection is invalid.')
  const pickupType = payload.pickup.type
  let pickup: ValidatedCheckout['pickup']

  if (pickupType === 'ASAP') {
    pickup = { type: 'ASAP' }
  } else if (pickupType === 'SCHEDULED' && typeof payload.pickup.pickupAt === 'string') {
    const pickupDate = new Date(payload.pickup.pickupAt)
    const maximumPickupTime = Date.now() + maximumScheduledDays * 24 * 60 * 60 * 1000
    if (
      Number.isNaN(pickupDate.getTime())
      || pickupDate.getTime() <= Date.now()
      || pickupDate.getTime() > maximumPickupTime
      || pickupDate.getUTCMinutes() % 15 !== 0
      || pickupDate.getUTCSeconds() !== 0
    ) {
      throw new HttpError(400, 'Scheduled pickup time is invalid.')
    }
    pickup = { type: 'SCHEDULED', pickupAt: pickupDate.toISOString() }
  } else {
    throw new HttpError(400, 'Pickup selection is invalid.')
  }

  if (typeof payload.returnUrl !== 'string') throw new HttpError(400, 'Return URL is invalid.')
  let returnUrl: URL
  try {
    returnUrl = new URL(payload.returnUrl)
  } catch {
    throw new HttpError(400, 'Return URL is invalid.')
  }

  if (
    returnUrl.origin !== configuredAppOrigin(env)
    || !/\/order\/success\/?$/.test(returnUrl.pathname)
    || returnUrl.search
    || returnUrl.hash
  ) {
    throw new HttpError(400, 'Return URL is not allowed.')
  }

  return {
    checkoutAttemptId,
    items: Array.from(quantities, ([itemId, quantity]) => ({
      itemId,
      quantity,
      item: authoritativeMenu[itemId],
    })),
    pickup,
    customer: { name, phone, ...(email ? { email } : {}) },
    returnUrl: returnUrl.toString(),
  }
}

async function createSquareCheckout(checkout: ValidatedCheckout, env: Env) {
  const accessToken = requireEnvironmentValue(env.SQUARE_ACCESS_TOKEN, 'SQUARE_ACCESS_TOKEN')
  const locationId = requireEnvironmentValue(env.SQUARE_LOCATION_ID, 'SQUARE_LOCATION_ID')
  const pickupDetails = {
    recipient: {
      display_name: checkout.customer.name,
      phone_number: checkout.customer.phone,
      ...(checkout.customer.email ? { email_address: checkout.customer.email } : {}),
    },
    schedule_type: checkout.pickup.type,
    ...(checkout.pickup.type === 'SCHEDULED' ? { pickup_at: checkout.pickup.pickupAt } : {}),
  }

  const squareResponse = await fetch(`${squareApiBaseUrl}/v2/online-checkout/payment-links`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Square-Version': squareApiVersion,
    },
    body: JSON.stringify({
      idempotency_key: `wazzup-${checkout.checkoutAttemptId}`,
      order: {
        location_id: locationId,
        source: { name: 'Wazzup Falafel pickup prototype' },
        line_items: checkout.items.map(({ item, quantity }) => ({
          name: item.name,
          quantity: String(quantity),
          base_price_money: {
            amount: item.priceInCents,
            currency: 'AUD',
          },
        })),
        fulfillments: [{
          type: 'PICKUP',
          state: 'PROPOSED',
          pickup_details: pickupDetails,
        }],
      },
      checkout_options: {
        redirect_url: checkout.returnUrl,
      },
      pre_populated_data: {
        buyer_phone_number: checkout.customer.phone,
        ...(checkout.customer.email ? { buyer_email: checkout.customer.email } : {}),
      },
      payment_note: 'Wazzup Falafel pickup order',
    }),
  })

  let result: SquarePaymentLinkResponse
  try {
    result = await squareResponse.json() as SquarePaymentLinkResponse
  } catch {
    throw new HttpError(502, 'Square Sandbox returned an unreadable response.')
  }

  if (!squareResponse.ok) {
    console.error('Square Sandbox rejected checkout.', {
      status: squareResponse.status,
      errors: result.errors,
    })
    throw new HttpError(502, 'Square Sandbox could not create checkout.')
  }

  const checkoutUrl = result.payment_link?.url
  const orderId = result.payment_link?.order_id
  if (!checkoutUrl || !orderId) throw new HttpError(502, 'Square Sandbox response was incomplete.')

  const parsedCheckoutUrl = new URL(checkoutUrl)
  if (parsedCheckoutUrl.protocol !== 'https:' || parsedCheckoutUrl.hostname !== 'square.link') {
    throw new HttpError(502, 'Square Sandbox returned an unexpected checkout URL.')
  }

  return { checkoutUrl: parsedCheckoutUrl.toString(), orderId }
}

async function handleCheckout(request: Request, env: Env) {
  let responseHeaders: HeadersInit = {}

  try {
    responseHeaders = corsHeaders(request, env)

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: responseHeaders })
    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed.' }, 405, {
        ...responseHeaders,
        Allow: 'POST, OPTIONS',
      })
    }
    if (!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json')) {
      throw new HttpError(415, 'Content-Type must be application/json.')
    }

    const payload = await parseJsonBody(request, maximumRequestBytes)
    const checkout = validateCheckout(payload, env)
    const result = await createSquareCheckout(checkout, env)
    return jsonResponse(result, 200, responseHeaders)
  } catch (error) {
    if (error instanceof HttpError) {
      return jsonResponse({ error: error.message }, error.status, responseHeaders)
    }
    console.error('Unexpected checkout error.', error)
    return jsonResponse({ error: 'Checkout could not be created.' }, 500, responseHeaders)
  }
}

function decodeBase64(value: string) {
  try {
    const binary = atob(value)
    return Uint8Array.from(binary, (character) => character.charCodeAt(0))
  } catch {
    return null
  }
}

async function verifySquareWebhook(
  signature: string,
  rawBody: string,
  notificationUrl: string,
  signatureKey: string,
) {
  const signatureBytes = decodeBase64(signature)
  if (!signatureBytes) return false

  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(signatureKey),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify'],
  )

  return crypto.subtle.verify(
    'HMAC',
    key,
    signatureBytes,
    encoder.encode(notificationUrl + rawBody),
  )
}

async function handleSquareWebhook(request: Request, env: Env) {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed.' }, 405, { Allow: 'POST' })
  }

  const requestUrl = new URL(request.url)
  if (requestUrl.search || requestUrl.hash) {
    return jsonResponse({ error: 'Webhook URL is invalid.' }, 400)
  }

  const signature = request.headers.get('x-square-hmacsha256-signature')
  if (!signature) return jsonResponse({ error: 'Webhook signature is missing.' }, 403)

  const contentLength = Number(request.headers.get('Content-Length') ?? 0)
  if (Number.isFinite(contentLength) && contentLength > maximumWebhookBytes) {
    return jsonResponse({ error: 'Webhook body is too large.' }, 413)
  }

  const rawBody = await request.text()
  if (new TextEncoder().encode(rawBody).byteLength > maximumWebhookBytes) {
    return jsonResponse({ error: 'Webhook body is too large.' }, 413)
  }

  const signatureKey = requireEnvironmentValue(
    env.SQUARE_WEBHOOK_SIGNATURE_KEY,
    'SQUARE_WEBHOOK_SIGNATURE_KEY',
  )
  const isValid = await verifySquareWebhook(
    signature,
    rawBody,
    requestUrl.toString(),
    signatureKey,
  )

  if (!isValid) return jsonResponse({ error: 'Webhook signature is invalid.' }, 403)

  try {
    const event = JSON.parse(rawBody) as Record<string, unknown>
    console.log('Valid Square Sandbox webhook received.', {
      eventId: typeof event.event_id === 'string' ? event.event_id : 'unknown',
      eventType: typeof event.type === 'string' ? event.type : 'unknown',
    })
  } catch {
    return jsonResponse({ error: 'Webhook body must be valid JSON.' }, 400)
  }

  return jsonResponse({ received: true })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      const pathname = new URL(request.url).pathname

      if (pathname === '/api/checkout') return handleCheckout(request, env)
      if (pathname === '/api/square/webhook') return handleSquareWebhook(request, env)

      return jsonResponse({ error: 'Not found.' }, 404)
    } catch (error) {
      if (error instanceof HttpError) {
        return jsonResponse({ error: error.message }, error.status)
      }
      console.error('Unexpected Worker error.', error)
      return jsonResponse({ error: 'Request could not be processed.' }, 500)
    }
  },
}
