import { Link, useLocation } from 'react-router-dom'
import type { CartItem } from '../context/cartContext'
import type { Customer } from '../types/customer'
import { formatPrice } from '../utils/formatPrice'

type LocationState = {
  orderId: string | null
  customer: Customer
  items: CartItem[]
  total: number
}

export default function ConfirmationPage() {
  const location = useLocation()
  const state = location.state as LocationState | null

  if (!state) {
    return (
      <section className="confirmation-page">
        <h1>Ingen ordredata</h1>
        <p>Gaa til <Link to="/products">shoppen</Link> for at handle.</p>
      </section>
    )
  }

  const { orderId, customer, items, total } = state
  const itemsTotal = items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0)
  const shipping = total - itemsTotal

  return (
    <section className="confirmation-page">
      <div className="confirmation-icon" aria-hidden="true">✓</div>
      <h1 className="confirmation-page__title">Tak for din ordre!</h1>
      <p className="confirmation-page__subtitle">
        Vi har modtaget din bestilling og vender tilbage hurtigst muligt.
      </p>

      {orderId && (
        <p className="confirmation-page__order-id">
          Ordrenummer: <strong>{orderId}</strong>
        </p>
      )}

      <div className="confirmation-grid">
        <div className="confirmation-card">
          <h2>Leveringsadresse</h2>
          <p>{customer.firstName} {customer.lastName}</p>
          <p>{customer.address}</p>
          <p>{customer.postalCode} {customer.city}</p>
          <p>{customer.email}</p>
          {customer.phone && <p>{customer.phone}</p>}
        </div>

        <div className="confirmation-card">
          <h2>Ordreoversigt</h2>
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="checkout-summary__item">
              <span>{product.name} x{quantity}</span>
              <span>{formatPrice(product.price * quantity)}</span>
            </div>
          ))}
          {shipping > 0 && (
            <div className="checkout-summary__item">
              <span>Fragt</span>
              <span>{formatPrice(shipping)}</span>
            </div>
          )}
          <div className="checkout-summary__item checkout-summary__item--total">
            <strong>Total</strong>
            <strong>{formatPrice(total)}</strong>
          </div>
        </div>
      </div>

      <Link to="/products" className="btn btn--primary confirmation-page__cta">
        Forsaet med at handle
      </Link>
    </section>
  )
}
