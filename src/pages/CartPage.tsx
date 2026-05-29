import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../utils/formatPrice'

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeFromCart } = useCart()

  if (items.length === 0) {
    return (
      <section className="cart-page">
        <h1 className="cart-page__title">Din kurv</h1>
        <div className="cart-empty">
          <p className="cart-empty__icon" aria-hidden="true">🛒</p>
          <p>Din kurv er tom.</p>
          <Link to="/products" className="btn btn--primary">Gaa til shop</Link>
        </div>
      </section>
    )
  }

  const shipping = subtotal >= 599 ? 0 : 49
  const total = subtotal + shipping

  return (
    <section className="cart-page">
      <h1 className="cart-page__title">Din kurv</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map(({ product, quantity }) => {
            const imageUrl = (product.imageUrl ?? product.image ?? '').trim()
            return (
              <article key={product.id} className="cart-item">
                <div className="cart-item__media">
                  {imageUrl ? (
                    <img src={imageUrl} alt={product.name} />
                  ) : (
                    <div className="product-card__media-placeholder" aria-hidden="true">
                      <span>{product.category}</span>
                    </div>
                  )}
                </div>
                <div className="cart-item__info">
                  <p className="product-card__category">{product.category}</p>
                  <p className="cart-item__name">{product.name}</p>
                  {product.unit && <p className="product-card__meta">{product.unit}</p>}
                </div>
                <div className="cart-item__controls">
                  <div className="qty-control">
                    <button
                      className="qty-control__btn"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      aria-label="Mindsk antal"
                    >
                      -
                    </button>
                    <span className="qty-control__value">{quantity}</span>
                    <button
                      className="qty-control__btn"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      aria-label="Oeg antal"
                    >
                      +
                    </button>
                  </div>
                  <p className="cart-item__price">{formatPrice(product.price * quantity)}</p>
                  <button
                    className="cart-item__remove"
                    onClick={() => removeFromCart(product.id)}
                    aria-label={`Fjern ${product.name} fra kurv`}
                  >
                    Fjern
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <aside className="cart-summary">
          <h2 className="cart-summary__title">Ordreoversigt</h2>
          <div className="cart-summary__row">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="cart-summary__row">
            <span>Fragt</span>
            <span>{shipping === 0 ? 'Gratis' : formatPrice(shipping)}</span>
          </div>
          {shipping > 0 && (
            <p className="cart-summary__shipping-note">
              Tilfoej {formatPrice(599 - subtotal)} mere for gratis fragt
            </p>
          )}
          <div className="cart-summary__row cart-summary__row--total">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <Link to="/checkout" className="btn btn--primary cart-summary__cta">
            Gaa til betaling
          </Link>
          <Link to="/products" className="cart-summary__continue">Fortsaet med at handle</Link>
        </aside>
      </div>
    </section>
  )
}
