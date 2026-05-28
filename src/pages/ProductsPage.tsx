import ProductList from '../components/products/ProductList'
import SectionTitle from '../components/common/SectionTitle'
import { useProducts } from '../hooks/useProducts'

export default function ProductsPage() {
  const { products, loading } = useProducts()

  return (
    <section>
      <SectionTitle
        title="Products"
        subtitle="Firebase product listing placeholder for the catalog page."
      />
      {loading ? <p>Loading products...</p> : <ProductList products={products} />}
    </section>
  )
}