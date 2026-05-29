import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/formatPrice'
import type { Product } from '../../types/product'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = (product.imageUrl ?? product.image ?? '').trim().replace(/^[./\\]+/, '/')
  const description = product.shortDescription ?? product.description

  return (
    <article className="product-card">
      <div className="product-card__media">
        {imageUrl ? (
          <img src={imageUrl} alt={product.name} loading="lazy" />
        ) : (
          <div className="product-card__media-placeholder" aria-hidden="true">
            <span>{product.category}</span>
          </div>
        )}
      </div>
      <p className="product-card__category">{product.category}</p>
      <h3>{product.name}</h3>
      <p>{description}</p>
      {product.brand ? <p className="product-card__meta">{product.brand}</p> : null}
      {product.unit ? <p className="product-card__meta">{product.unit}</p> : null}
      <strong>{formatPrice(product.price)}</strong>
      <Link to={`/products/${product.id}`}>View details</Link>
    </article>
  )
}