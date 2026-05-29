import { Link } from 'react-router-dom'
import { useRecipes } from '../hooks/useRecipes'

export default function RecipesPage() {
  const { recipes, loading } = useRecipes()

  return (
    <section className="recipes-page">
      <div className="catalog-hero">
        <p className="eyebrow">Opskrifter</p>
        <h1>Pizzaopskrifter til noerder</h1>
        <p>
          Fra den klassiske napolitanske Margherita til den fyldige Quattro Formaggi
          - her finder du opskrifter der hjaelper dig til at bage bedre pizza derhjemme.
        </p>
      </div>

      {loading ? (
        <div className="recipe-grid">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="recipe-card recipe-card--skeleton" aria-hidden="true" />
          ))}
        </div>
      ) : recipes.length === 0 ? (
        <div className="catalog-state catalog-state--empty">
          <p>Ingen opskrifter fundet endnu.</p>
        </div>
      ) : (
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <article key={recipe.id} className="recipe-card">
              <div className="recipe-card__meta">
                <span>{recipe.prepTimeMinutes + recipe.bakeTimeMinutes} min</span>
                <span>{recipe.servings} pers.</span>
              </div>
              <h2 className="recipe-card__title">{recipe.title}</h2>
              <p className="recipe-card__desc">{recipe.description}</p>
              <Link to={`/recipes/${recipe.id}`} className="btn btn--secondary">
                Se opskrift
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
