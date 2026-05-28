import { useParams } from 'react-router-dom'
import SectionTitle from '../components/common/SectionTitle'
import { useProduct } from '../hooks/useProduct'

export default function ProductDetailPage() {
  const { id = '' } = useParams()
  const { product, loading } = useProduct(id)

  return (
    <section>
      <SectionTitle title="Product detail" subtitle="Placeholder detail page." />
      {loading ? (
        <p>Loading product...</p>
      ) : (
        <pre>{JSON.stringify(product ?? { id, status: 'missing placeholder data' }, null, 2)}</pre>
      )}
    </section>
  )
}