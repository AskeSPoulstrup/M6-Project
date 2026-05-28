import type { Product } from '../../types/product'
import ProductCard from './ProductCard'

type ProductListProps = {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return <p>No products yet. Firebase data will appear here.</p>
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}