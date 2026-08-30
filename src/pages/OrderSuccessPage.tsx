import { Link, useSearchParams } from 'react-router-dom'
import PageMetadata from '../components/PageMetadata'
import TatreezDivider from '../components/TatreezDivider'
import { orderingMode, orderSuccessMetadata } from '../data/ordering'
import { readOrderSuccess } from '../services/orderCheckout'
import '../styles/order.css'

function OrderSuccessPage() {
  const [searchParams] = useSearchParams()
  const storedDetails = readOrderSuccess()
  const mode = storedDetails?.mode ?? orderingMode
  const orderReference = searchParams.get('orderId')
    ?? searchParams.get('order_id')
    ?? storedDetails?.orderId

  return (
    <section className="order-success" aria-labelledby="order-success-heading">
      <PageMetadata {...orderSuccessMetadata} />
      <TatreezDivider pattern="walls" />
      <div className="container order-success__inner">
        <span className="ordering-mode-label">
          {mode === 'mock' ? 'Demo ordering' : 'Square sandbox'}
        </span>
        <p className="eyebrow">Pickup order</p>
        <h1 id="order-success-heading">Order received</h1>

        {mode === 'mock' ? (
          <p className="order-success__notice">Demo order — no payment was taken.</p>
        ) : (
          <p className="order-success__notice">
            Square Sandbox — no real charge was made. Payment confirmation must
            come from Square's signed webhook, not this browser redirect.
          </p>
        )}

        <dl className="order-success__details">
          <div>
            <dt>Order reference</dt>
            <dd>{orderReference ?? 'Not available'}</dd>
          </div>
          {storedDetails?.pickupLabel && (
            <div>
              <dt>Pickup</dt>
              <dd>{storedDetails.pickupLabel}</dd>
            </div>
          )}
        </dl>

        <div className="order-success__actions">
          <Link className="button" to="/menu">Return to menu</Link>
          <Link className="text-link" to="/">Return home</Link>
        </div>
      </div>
    </section>
  )
}

export default OrderSuccessPage
