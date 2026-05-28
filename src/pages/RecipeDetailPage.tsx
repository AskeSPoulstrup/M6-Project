import { useParams } from 'react-router-dom'
import SectionTitle from '../components/common/SectionTitle'
import { useRecipes } from '../hooks/useRecipes'

export default function RecipeDetailPage() {
  const { id = '' } = useParams()
  const { recipes, loading } = useRecipes()
  const recipe = recipes.find((item) => item.id === id)

  return (
    <section>
      <SectionTitle title="Recipe detail" subtitle="Placeholder recipe page." />
      {loading ? (
        <p>Loading recipe...</p>
      ) : (
        <pre>{JSON.stringify(recipe ?? { id, status: 'missing placeholder data' }, null, 2)}</pre>
      )}
    </section>
  )
}