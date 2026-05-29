import { Link, NavLink } from 'react-router-dom'
import CartIcon from '../cart/CartIcon'

const navItems = [
  { to: '/products', label: 'Shop' },
  { to: '/recipes', label: 'Opskrifter' },
  { to: '/about', label: 'Om Os' },
  { to: '/contact', label: 'Kontakt' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">
        Slice-Management
      </Link>
      <nav className="navbar__links" aria-label="Primaer navigation">
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
