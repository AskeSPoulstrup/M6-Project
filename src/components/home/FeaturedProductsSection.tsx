import ProductList from '../products/ProductList'
import { type Product } from '../../types/product'

const featuredProducts: Product[] = [
  {
    id: 'flour-1',
    name: 'Tipo 00 flour',
    slug: 'tipo-00-flour',
    price: 59,
    description: 'Placeholder product for the homepage showcase.',
    image: '',
    category: 'Ingredients',
    featured: true,
  },
  {
    id: 'peel-1',
    name: 'Pizza peel',
    slug: 'pizza-peel',
    price: 249,
    description: 'Placeholder product for the homepage showcase.',
    image: '',
    category: 'Tools',
    featured: true,
  },
]

export default function FeaturedProductsSection() {
  return (
    <section className="home-section">
      <div>
        <h2>Featured products</h2>
        <p>Static boilerplate cards that can later be driven by Firebase.</p>
      </div>
      <ProductList products={featuredProducts} />
    </section>
  )
}