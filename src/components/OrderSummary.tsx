import type { ChangeEvent, FormEvent } from 'react'
import { menu } from '../data/menu'
import type { OrderCustomer, OrderLine, PickupChoice } from '../types/order'
import { formatPrice } from '../utils/formatPrice'
import type { PickupSlot } from '../utils/pickupSlots'

type OrderSummaryProps = {
  lines: OrderLine[]
  totalInCents: number
  pickup: PickupChoice
  pickupSlots: PickupSlot[]
  customer: OrderCustomer
  checkoutStatus: 'idle' | 'submitting' | 'error'
  checkoutError: string
  onCustomerChange: (event: ChangeEvent<HTMLInputElement>) => void
  onPickupChange: (pickup: PickupChoice) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

function OrderSummary({
  lines,
  totalInCents,
  pickup,
  pickupSlots,
  customer,
  checkoutStatus,
  checkoutError,
  onCustomerChange,
  onPickupChange,
  onSubmit,
}: OrderSummaryProps) {
  return (
    <section className="order-summary" id="order-summary" aria-labelledby="order-summary-heading">
      <h2 id="order-summary-heading">Your order</h2>

      {lines.length === 0 ? (
        <p className="order-summary__empty">Add something from the menu to begin.</p>
      ) : (
        <ul className="order-summary__items">
          {lines.map(({ item, quantity }) => (
            <li key={item.id}>
              <span>{quantity} × {item.name}</span>
              <strong>{formatPrice(item.priceInCents * quantity, menu.currency)}</strong>
            </li>
          ))}
        </ul>
      )}

      <div className="order-summary__total">
        <span>Total</span>
        <strong>{formatPrice(totalInCents, menu.currency)}</strong>
      </div>

      <form className="order-checkout-form" onSubmit={onSubmit}>
        <fieldset>
          <legend>Pickup</legend>
          <label className="order-radio">
            <input
              type="radio"
              name="pickupType"
              value="ASAP"
              checked={pickup.type === 'ASAP'}
              onChange={() => onPickupChange({ type: 'ASAP' })}
            />
            <span>ASAP</span>
          </label>
          <label className="order-radio">
            <input
              type="radio"
              name="pickupType"
              value="SCHEDULED"
              checked={pickup.type === 'SCHEDULED'}
              onChange={() => onPickupChange({
                type: 'SCHEDULED',
                pickupAt: pickupSlots[0]?.value ?? '',
              })}
            />
            <span>Choose a time</span>
          </label>
          {pickup.type === 'SCHEDULED' && (
            <label className="form-field order-pickup-time" htmlFor="pickup-time">
              <span>Pickup time</span>
              <select
                id="pickup-time"
                value={pickup.pickupAt}
                onChange={(event) => onPickupChange({
                  type: 'SCHEDULED',
                  pickupAt: event.target.value,
                })}
                required
              >
                {pickupSlots.map((slot) => (
                  <option key={slot.value} value={slot.value}>{slot.label}</option>
                ))}
              </select>
            </label>
          )}
        </fieldset>

        <fieldset>
          <legend>Pickup details</legend>
          <div className="form-field">
            <label htmlFor="order-name">Name <span aria-hidden="true">*</span></label>
            <input
              id="order-name"
              name="name"
              type="text"
              autoComplete="name"
              value={customer.name}
              onChange={onCustomerChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="order-phone">Phone <span aria-hidden="true">*</span></label>
            <input
              id="order-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={customer.phone}
              onChange={onCustomerChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="order-email">Email <span className="optional-label">Optional</span></label>
            <input
              id="order-email"
              name="email"
              type="email"
              autoComplete="email"
              value={customer.email}
              onChange={onCustomerChange}
            />
          </div>
        </fieldset>

        {checkoutStatus === 'error' && (
          <p className="order-checkout-form__error" role="alert">{checkoutError}</p>
        )}

        <button
          className="button order-checkout-form__submit"
          type="submit"
          disabled={lines.length === 0 || checkoutStatus === 'submitting'}
        >
          {checkoutStatus === 'submitting' ? 'Starting checkout…' : 'Pay securely with Square'}
        </button>
        <p className="order-checkout-form__note">
          Payment takes place on Square's hosted checkout. This prototype does not collect card details.
        </p>
      </form>
    </section>
  )
}

export default OrderSummary
