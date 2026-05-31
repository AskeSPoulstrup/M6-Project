import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { useProduct } from '../hooks/useProduct'
import { formatPrice } from '../utils/formatPrice'

export default function ProductDetailPage() {
  const { id = '' } = useParams()
  const { product, loading } = useProduct(id)
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (loading) {
    return (
      <div className="product-detail product-detail--loading">
        <div className="product-detail__media product-card--skeleton" />
        <div className="product-detail__info">
          <div className="skeleton-line skeleton-line--short" />
          <div className="skeleton-line" />
          <div className="skeleton-line skeleton-line--long" />
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="catalog-state catalog-state--error">
        <p>Produktet blev ikke fundet.</p>
        <Link to="/products">Tilbage til shop</Link>
      </div>
    )
  }

  const imageUrl = (product.imageUrl ?? product.image ?? '').trim()

  function handleAddToCart() {
    addToCart(product!, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <article className="product-detail">
      <Link to="/products" className="product-detail__back">Tilbage til shop</Link>

      <div className="product-detail__grid">
        <div className="product-detail__media">
          {imageUrl ? (
            <img src={imageUrl} alt={product.name} />
          ) : (
            <div className="product-card__media-placeholder">
              <span>{product.category}</span>
            </div>
          )}
        </div>

        <div className="product-detail__info">
          <p className="product-card__category">{product.category}</p>
          {product.subcategory && (
            <p className="product-card__meta">{product.subcategory}</p>
          )}
          <h1 className="product-detail__name">{product.name}</h1>
          {product.brand && (
            <p className="product-detail__brand">{product.brand}</p>
          )}
          <p className="product-detail__price">{formatPrice(product.price)}</p>
          {product.unit && (
            <p className="product-card__meta">{product.unit}</p>
          )}

          <p className="product-detail__description">{product.description}</p>

          {product.inStock === false ? (
            <p className="product-detail__oos">Ikke på lager</p>
          ) : (
            <div className="product-detail__actions">
              <div className="qty-control">
                <button
                  className="qty-control__btn"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Mindsk antal"
                >
                  -
                </button>
                <span className="qty-control__value">{quantity}</span>
                <button
                  className="qty-control__btn"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Øg antal"
                >
                  +
                </button>
              </div>
              <button
                className={`btn btn--primary${added ? ' btn--success' : ''}`}
                onClick={handleAddToCart}
              >
                {added ? 'Lagt i kurv' : 'Læg i kurv'}
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
