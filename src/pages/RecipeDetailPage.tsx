import { Link, useParams } from 'react-router-dom'
import { useRecipe } from '../hooks/useRecipe'

export default function RecipeDetailPage() {
  const { id = '' } = useParams()
  const { recipe, loading } = useRecipe(id)

  if (loading) {
    return (
      <div className="recipe-detail recipe-detail--loading">
        <div className="skeleton-line skeleton-line--short" />
        <div className="skeleton-line" />
        <div className="skeleton-line skeleton-line--long" />
      </div>
    )
  }

  if (!recipe) {
    return (
      <div className="catalog-state catalog-state--error">
        <p>Opskriften blev ikke fundet.</p>
        <Link to="/recipes">Tilbage til opskrifter</Link>
      </div>
    )
  }

  return (
    <article className="recipe-detail">
      <Link to="/recipes" className="product-detail__back">Alle opskrifter</Link>

      <header className="recipe-detail__header">
        <p className="eyebrow">Opskrift</p>
        <h1>{recipe.title}</h1>
        <p className="recipe-detail__desc">{recipe.description}</p>
        <div className="recipe-detail__stats">
          <div>
            <strong>{recipe.prepTimeMinutes} min</strong>
            <span>Forberedelse</span>
          </div>
          <div>
            <strong>{recipe.bakeTimeMinutes} min</strong>
            <span>Bagetid</span>
          </div>
          <div>
            <strong>{recipe.servings}</strong>
            <span>Portioner</span>
          </div>
        </div>
      </header>

      <div className="recipe-detail__body">
        <section className="recipe-detail__section">
          <h2>Fremgangsmåde</h2>
          <ol className="recipe-detail__steps">
            {recipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="recipe-detail__section">
          <h2>Ingredienser</h2>
          <ul className="recipe-detail__ingredients">
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}
