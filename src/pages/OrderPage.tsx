import {
  useMemo,
  useReducer,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from 'react'
import { useNavigate } from 'react-router-dom'
import OrderMenu from '../components/OrderMenu'
import OrderSummary from '../components/OrderSummary'
import PageMetadata from '../components/PageMetadata'
import TatreezDivider from '../components/TatreezDivider'
import { menu } from '../data/menu'
import {
  maximumItemQuantity,
  orderMetadata,
  orderingMode,
  orderingModeLabel,
} from '../data/ordering'
import {
  createOrderCheckout,
  getOrderReturnUrl,
  saveOrderSuccess,
} from '../services/orderCheckout'
import type {
  BasketQuantities,
  OrderCustomer,
  PickupChoice,
} from '../types/order'
import { formatPrice } from '../utils/formatPrice'
import { createPickupSlots } from '../utils/pickupSlots'
import '../styles/order.css'

type BasketAction = {
  type: 'add' | 'increase' | 'decrease' | 'remove'
  itemId: string
}

function basketReducer(state: BasketQuantities, action: BasketAction): BasketQuantities {
  const currentQuantity = state[action.itemId] ?? 0

  if (action.type === 'remove' || (action.type === 'decrease' && currentQuantity <= 1)) {
    const nextState = { ...state }
    delete nextState[action.itemId]
    return nextState
  }

  if (action.type === 'decrease') {
    return { ...state, [action.itemId]: currentQuantity - 1 }
  }

  return {
    ...state,
    [action.itemId]: Math.min(currentQuantity + 1, maximumItemQuantity),
  }
}

const allMenuItems = menu.categories.flatMap((category) => category.items)

function OrderPage() {
  const navigate = useNavigate()
  const [basket, dispatch] = useReducer(basketReducer, {})
  const [pickup, setPickup] = useState<PickupChoice>({ type: 'ASAP' })
  const [customer, setCustomer] = useState<OrderCustomer>({ name: '', phone: '', email: '' })
  const [checkoutStatus, setCheckoutStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const [checkoutError, setCheckoutError] = useState('')
  const checkoutAttemptId = useRef(crypto.randomUUID())
  const pickupSlots = useMemo(() => createPickupSlots(), [])

  const lines = useMemo(() => allMenuItems.flatMap((item) => {
    const quantity = basket[item.id] ?? 0
    return quantity > 0 ? [{ item, quantity }] : []
  }), [basket])

  const totalInCents = lines.reduce(
    (total, { item, quantity }) => total + item.priceInCents * quantity,
    0,
  )
  const totalQuantity = lines.reduce((total, line) => total + line.quantity, 0)

  const resetCheckoutAttempt = () => {
    checkoutAttemptId.current = crypto.randomUUID()
    setCheckoutStatus('idle')
    setCheckoutError('')
  }

  const updateBasket = (action: BasketAction) => {
    dispatch(action)
    resetCheckoutAttempt()
  }

  const updatePickup = (nextPickup: PickupChoice) => {
    setPickup(nextPickup)
    resetCheckoutAttempt()
  }

  const updateCustomer = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCustomer((current) => ({ ...current, [name]: value }))
    resetCheckoutAttempt()
  }

  const handleCheckout = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (lines.length === 0) return

    setCheckoutStatus('submitting')
    setCheckoutError('')

    try {
      const response = await createOrderCheckout({
        checkoutAttemptId: checkoutAttemptId.current,
        items: lines.map(({ item, quantity }) => ({ itemId: item.id, quantity })),
        pickup,
        customer,
        returnUrl: getOrderReturnUrl(),
      })
      const pickupLabel = pickup.type === 'ASAP'
        ? 'ASAP'
        : pickupSlots.find((slot) => slot.value === pickup.pickupAt)?.label ?? 'Chosen time'

      saveOrderSuccess({ orderId: response.orderId, pickupLabel, mode: orderingMode })

      if (orderingMode === 'mock') {
        navigate('/order/success')
      } else {
        window.location.assign(response.checkoutUrl)
      }
    } catch (error) {
      setCheckoutStatus('error')
      setCheckoutError(error instanceof Error ? error.message : 'Checkout could not be started.')
    }
  }

  return (
    <div className={`order-page${totalQuantity > 0 ? ' order-page--has-items' : ''}`}>
      <PageMetadata {...orderMetadata} />

      <header className="order-page__header">
        <div className="container">
          <span className="ordering-mode-label">{orderingModeLabel}</span>
          <p className="eyebrow">Order pickup</p>
          <h1>Order pickup</h1>
          <p>343 High Street, Northcote</p>
        </div>
      </header>

      <TatreezDivider pattern="walls" />

      <div className="container order-page__layout">
        <OrderMenu
          basket={basket}
          onAdd={(itemId) => updateBasket({ type: 'add', itemId })}
          onDecrease={(itemId) => updateBasket({ type: 'decrease', itemId })}
          onIncrease={(itemId) => updateBasket({ type: 'increase', itemId })}
          onRemove={(itemId) => updateBasket({ type: 'remove', itemId })}
        />
        <OrderSummary
          lines={lines}
          totalInCents={totalInCents}
          pickup={pickup}
          pickupSlots={pickupSlots}
          customer={customer}
          checkoutStatus={checkoutStatus}
          checkoutError={checkoutError}
          onCustomerChange={updateCustomer}
          onPickupChange={updatePickup}
          onSubmit={handleCheckout}
        />
      </div>

      {totalQuantity > 0 && (
        <a className="order-mobile-bar" href="#order-summary">
          <span>View order ({totalQuantity})</span>
          <strong>{formatPrice(totalInCents, menu.currency)}</strong>
        </a>
      )}
    </div>
  )
}

export default OrderPage
