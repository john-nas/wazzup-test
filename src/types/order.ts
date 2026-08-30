import type { MenuItem } from './content'

export type OrderingMode = 'mock' | 'square-sandbox'

export type BasketQuantities = Record<string, number>

export type OrderLine = {
  item: MenuItem
  quantity: number
}

export type OrderCustomer = {
  name: string
  phone: string
  email: string
}

export type PickupChoice =
  | { type: 'ASAP' }
  | { type: 'SCHEDULED'; pickupAt: string }

export type CheckoutRequest = {
  checkoutAttemptId: string
  items: {
    itemId: string
    quantity: number
  }[]
  pickup: PickupChoice
  customer: OrderCustomer
  returnUrl: string
}

export type CheckoutResponse = {
  checkoutUrl: string
  orderId: string
}

export type OrderSuccessDetails = {
  orderId: string
  pickupLabel: string
  mode: OrderingMode
}
