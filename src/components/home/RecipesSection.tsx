import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getRecipes } from '../../services/recipeService'
import type { Recipe } from '../../types/recipe'

export default function RecipesSection() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    getRecipes()
      .then((result) => { if (active) setRecipes(result.slice(0, 6)) })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [])

  if (loading || recipes.length === 0) return null

  return (
    <section className="recipes-strip">
      <div className="recipes-strip__inner">
        <p className="eyebrow eyebrow--light">Bliv inspireret</p>
        <h2 className="recipes-strip__title">Pizzaopskrifter</h2>
        <div className="recipes-strip__grid">
          {recipes.map((recipe) => (
            <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="recipes-strip__item">
              {recipe.title}
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
