import { Link, NavLink } from 'react-router-dom'
import CartIcon from '../cart/CartIcon'

const navItems = [
  { to: '/products', label: 'Products' },
  { to: '/recipes', label: 'Recipes' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">
        Slice-Management
      </Link>
      <nav className="navbar__links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <CartIcon />
    </header>
  )
}