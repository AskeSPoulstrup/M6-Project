import { Link } from 'react-router-dom'

const recipeLinks = [
  'Margherita',
  'Quattro Formaggi',
  'Diavola',
  'Capricciosa',
  'Salsiccia e Friarielli',
  'Marinara',
]

export default function RecipesSection() {
  return (
    <section className="recipes-strip">
      <div className="recipes-strip__inner">
        <p className="eyebrow eyebrow--light">Bliv inspireret</p>
        <h2 className="recipes-strip__title">Pizzaopskrifter</h2>
        <div className="recipes-strip__grid">
          {recipeLinks.map((name) => (
            <Link key={name} to="/recipes" className="recipes-strip__item">
              {name}
            </Link>
          ))}
        </div>
        <Link to="/recipes" className="btn btn--outline-light recipes-strip__cta">
          Se alle opskrifter
        </Link>
      </div>
    </section>
  )
}
