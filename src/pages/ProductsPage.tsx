import { useState } from 'react'
import ProductList from '../components/products/ProductList'
import { useProducts } from '../hooks/useProducts'

const ALL_CATEGORY = 'alle'

const CATEGORY_LABELS: Record<string, string> = {
  alle: 'Alle',
  raavarer: 'Råvarer',
  udstyr: 'Udstyr',
  tilbehoer: 'Tilbehør',
}

export default function ProductsPage() {
  const { products, loading, error } = useProducts()
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY)

  const categories = [
    ALL_CATEGORY,
    ...Array.from(new Set(products.map((p) => p.category.toLowerCase()))),
  ]

  const filtered =
    activeCategory === ALL_CATEGORY
      ? products
      : products.filter((p) => p.category.toLowerCase() === activeCategory)

  return (
    <section className="catalog-page">
      <div className="catalog-hero">
        <div>
          <p className="eyebrow">Shop</p>
          <h1>Råvarer, udstyr og gear til pizzanørder</h1>
          <p>
            Alt hvad du har brug for til at bage den perfekte pizza derhjemme.
            Fra tipo 00 mel og San Marzano tomater til professionelle pizzasten og spader.
          </p>
        </div>
      </div>

      <div className="catalog-filters" role="tablist" aria-label="Filtrer efter kategori">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`filter-btn${activeCategory === cat ? ' filter-btn--active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {CATEGORY_LABELS[cat] ?? cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="product-list">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div key={n} className="product-card product-card--skeleton" aria-hidden="true" />
          ))}
        </div>
      ) : error ? (
        <div className="catalog-state catalog-state--error">
          <p>{error}</p>
        </div>
      ) : (
        <ProductList products={filtered} />
      )}
    </section>
  )
}
