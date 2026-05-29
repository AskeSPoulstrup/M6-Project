import { Link } from 'react-router-dom'
import heroImg from '../../assets/hero.png'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__bg">
        <img src={heroImg} alt="Professionelle pizzaovne" />
        <div className="hero-section__overlay" />
      </div>
      <div className="hero-section__content">
        <p className="hero-section__eyebrow">Pizzaudstyr &amp; raavarer</p>
        <h1 className="hero-section__title">
          Alt hvad du behoever<br />til den perfekte pizza.
        </h1>
        <p className="hero-section__subtitle">
          Professionelle raavarer og vaerktoej til hjemmebageren der tager pizzaen seriost.
        </p>
        <div className="hero-section__actions">
          <Link to="/products" className="btn btn--primary">Se produkter</Link>
          <Link to="/recipes" className="btn btn--ghost">Opskrifter</Link>
        </div>
      </div>
    </section>
  )
}
