import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export default function CartIcon() {
  const { itemCount } = useCart()

  return (
    <Link to="/cart" className="cart-icon" aria-label="Open cart">
      Cart ({itemCount})
    </Link>
  )
}