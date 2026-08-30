import type { OrderingMode } from '../types/order'

const configuredMode = import.meta.env.VITE_ORDERING_MODE

export const orderingMode: OrderingMode = configuredMode === 'square-sandbox'
  ? 'square-sandbox'
  : 'mock'

export const orderingModeLabel = orderingMode === 'square-sandbox'
  ? 'Square sandbox'
  : 'Demo ordering'

export const maximumItemQuantity = 10

export const orderMetadata = {
  title: 'Order Pickup | Wazzup Falafel Northcote',
  description:
    'Prototype pickup ordering for Wazzup Falafel at 343 High Street, Northcote.',
}

export const orderSuccessMetadata = {
  title: 'Order Received | Wazzup Falafel',
  description: 'Wazzup Falafel pickup order confirmation.',
}
