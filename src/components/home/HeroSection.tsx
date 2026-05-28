import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <p className="eyebrow">Pizza gear and ingredients</p>
      <h1>Build better pizza with curated tools, dough, sauce and toppings.</h1>
      <p>
        This homepage follows the mockup structure and is ready to be wired to
        Firebase content.
      </p>
      <div className="hero-section__actions">
        <Link to="/products">Browse products</Link>
        <Link to="/recipes">Explore recipes</Link>
      </div>
    </section>
  )
}