import type { OrderingMode } from '../types/order'
import type { ImageAsset } from '../types/content'
import specialFalafelWrapImage from '../assets/images/special-falafel-wrap.webp'
import stuffedFalafelImage from '../assets/images/stuffed_falafel.jpg'

const configuredMode = import.meta.env.VITE_ORDERING_MODE

export const orderingMode: OrderingMode = configuredMode === 'square-sandbox'
  ? 'square-sandbox'
  : 'mock'

export const orderingModeLabel = orderingMode === 'square-sandbox'
  ? 'Square sandbox'
  : 'Demo ordering'

export const maximumItemQuantity = 10

// These photographs exist in the project but are not attached to the public
// MenuItem records because doing so would also alter the existing Menu page.
export const orderingItemImages: Partial<Record<string, ImageAsset>> = {
  'special-wrap': {
    src: specialFalafelWrapImage,
    alt: 'Special falafel wrap ready to serve',
    width: 860,
    height: 600,
  },
  'stuffed-falafel': {
    src: stuffedFalafelImage,
    alt: 'Stuffed falafel held on a fork, showing the centre',
    width: 447,
    height: 447,
  },
}

export const orderMetadata = {
  title: 'Order Pickup | Wazzup Falafel Northcote',
  description:
    'Prototype pickup ordering for Wazzup Falafel at 343 High Street, Northcote.',
}

export const orderSuccessMetadata = {
  title: 'Order Received | Wazzup Falafel',
  description: 'Wazzup Falafel pickup order confirmation.',
}
