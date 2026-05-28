import { useEffect, useState } from 'react'
import { getRecipes } from '../services/recipeService'
import type { Recipe } from '../types/recipe'

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    void getRecipes()
      .then((result) => {
        if (active) {
          setRecipes(result)
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [])

  return { recipes, loading }
}