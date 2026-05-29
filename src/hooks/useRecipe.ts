import { useEffect, useState } from 'react'
import { getRecipeById } from '../services/recipeService'
import type { Recipe } from '../types/recipe'

export function useRecipe(id: string) {
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    void getRecipeById(id)
      .then((result) => {
        if (active) setRecipe(result)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [id])

  return { recipe, loading }
}
