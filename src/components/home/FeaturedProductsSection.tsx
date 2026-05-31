import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedProducts } from '../../services/productService'
import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/formatPrice'

export default function FeaturedProductsSection() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    getFeaturedProducts()
      .then((result) => { if (active) setProducts(result) })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [])

  if (loading) {
    return (
      <section className="home-section">
        <div className="home-section__header">
          <p className="eyebrow">Udvalgte produkter</p>
          <h2>Populaere produkter</h2>
        </div>
        <div className="product-list">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="product-card product-card--skeleton" aria-hidden="true" />
          ))}
        </div>
      </section>
    )
  }

  if (products.length === 0) return null

  return (
    <section className="home-section">
      <div className="home-section__header">
        <p className="eyebrow">Udvalgte produkter</p>
        <h2>Populære produkter</h2>
        <Link to="/products" className="home-section__link">Se alle produkter</Link>
      </div>
      <div className="product-list">
        {products.map((product) => {
          const img = (product.imageUrl ?? product.image ?? '').trim()
          return (
            <article key={product.id} className="product-card">
              <Link to={`/products/${product.id}`} className="product-card__media-link">
                <div className="product-card__media">
                  {img ? (
                    <img src={img} alt={product.name} loading="lazy" />
                  ) : (
                    <div className="product-card__media-placeholder" aria-hidden="true">
                      <span>{product.category}</span>
                    </div>
                  )}
                </div>
              </Link>
              <p className="product-card__category">{product.category}</p>
              <h3>{product.name}</h3>
              <p>{product.shortDescription ?? product.description}</p>
              <strong>{formatPrice(product.price)}</strong>
              <Link to={`/products/${product.id}`}>Se produkt</Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}
