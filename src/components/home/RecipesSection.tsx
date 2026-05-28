import { Link } from 'react-router-dom'
import { type Recipe } from '../../types/recipe'

const recipes: Recipe[] = [
  {
    id: 'recipe-1',
    title: 'Neapolitan starter dough',
    slug: 'neapolitan-starter-dough',
    description: 'Placeholder recipe teaser for the homepage.',
    instructions: [],
    ingredients: [],
    prepTimeMinutes: 20,
    bakeTimeMinutes: 90,
    servings: 4,
  },
]

export default function RecipesSection() {
  return (
    <section className="home-section">
      <div>
        <h2>Recipes</h2>
        <p>Recipe previews that later point into the CMS-like Firebase setup.</p>
      </div>
      <div className="recipe-preview-grid">
        {recipes.map((recipe) => (
          <article key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`}>Read recipe</Link>
          </article>
        ))}
      </div>
    </section>
  )
}