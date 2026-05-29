import type { Product } from '../../types/product'
import ProductCard from './ProductCard'

type ProductListProps = {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="catalog-state catalog-state--empty">
        <p>No products found yet.</p>
        <span>
          Connect Firebase and add documents to the <strong>products</strong>
          collection to populate this grid.
        </span>
      </div>
    )
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}