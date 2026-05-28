import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/formatPrice'
import type { Product } from '../../types/product'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card__media" aria-hidden="true" />
      <p>{product.category}</p>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>{formatPrice(product.price)}</strong>
      <Link to={`/products/${product.id}`}>View details</Link>
    </article>
  )
}