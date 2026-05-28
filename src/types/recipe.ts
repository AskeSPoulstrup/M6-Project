export type Recipe = {
  id: string
  title: string
  slug: string
  description: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  bakeTimeMinutes: number
  servings: number
}