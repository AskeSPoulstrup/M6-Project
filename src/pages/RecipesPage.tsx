import SectionTitle from '../components/common/SectionTitle'
import { useRecipes } from '../hooks/useRecipes'

export default function RecipesPage() {
  const { recipes, loading } = useRecipes()

  return (
    <section>
      <SectionTitle title="Recipes" subtitle="Recipe index placeholder." />
      {loading ? <p>Loading recipes...</p> : <pre>{JSON.stringify(recipes, null, 2)}</pre>}
    </section>
  )
}