import SectionTitle from '../components/common/SectionTitle'
import { useCart } from '../hooks/useCart'

export default function CartPage() {
  const { items, subtotal } = useCart()

  return (
    <section>
      <SectionTitle title="Cart" subtitle="Placeholder cart page." />
      <pre>{JSON.stringify({ items, subtotal }, null, 2)}</pre>
    </section>
  )
}