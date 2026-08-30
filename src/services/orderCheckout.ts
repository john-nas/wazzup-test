import { orderingMode } from '../data/ordering'
import type {
  CheckoutRequest,
  CheckoutResponse,
  OrderSuccessDetails,
} from '../types/order'

const successStorageKey = 'wazzup-order-success'
const squareCheckoutHosts = new Set(['square.link', 'checkout.square.site'])

export function getOrderReturnUrl() {
  return new URL(`${import.meta.env.BASE_URL}order/success`, window.location.origin).toString()
}

export async function createOrderCheckout(
  checkoutRequest: CheckoutRequest,
): Promise<CheckoutResponse> {
  if (orderingMode === 'mock') {
    return {
      checkoutUrl: checkoutRequest.returnUrl,
      orderId: `DEMO-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
    }
  }

  const apiUrl = import.meta.env.VITE_ORDER_API_URL?.trim()
  if (!apiUrl) {
    throw new Error('Square Sandbox checkout is not configured.')
  }

  const response = await fetch(new URL('/api/checkout', apiUrl), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(checkoutRequest),
  })

  if (!response.ok) {
    throw new Error('Square Sandbox checkout could not be started.')
  }

  const result = await response.json() as Partial<CheckoutResponse>
  if (!result.checkoutUrl || !result.orderId) {
    throw new Error('Square Sandbox returned an incomplete checkout response.')
  }

  const checkoutUrl = new URL(result.checkoutUrl)
  if (checkoutUrl.protocol !== 'https:' || !squareCheckoutHosts.has(checkoutUrl.hostname)) {
    throw new Error('Square Sandbox returned an unexpected checkout URL.')
  }

  return { checkoutUrl: checkoutUrl.toString(), orderId: result.orderId }
}

export function saveOrderSuccess(details: OrderSuccessDetails) {
  try {
    sessionStorage.setItem(successStorageKey, JSON.stringify(details))
  } catch {
    // Storage can be unavailable in privacy modes. Square's orderId query
    // parameter still provides a fallback reference after hosted checkout.
  }
}

export function readOrderSuccess(): OrderSuccessDetails | null {
  try {
    const value = sessionStorage.getItem(successStorageKey)
    if (!value) return null

    const details = JSON.parse(value) as Partial<OrderSuccessDetails>
    if (
      typeof details.orderId !== 'string'
      || typeof details.pickupLabel !== 'string'
      || (details.mode !== 'mock' && details.mode !== 'square-sandbox')
    ) {
      return null
    }

    return details as OrderSuccessDetails
  } catch {
    return null
  }
}
