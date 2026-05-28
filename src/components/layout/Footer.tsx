import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <p>Slice-Management. Boilerplate til webshop, opskrifter og Firebase flow.</p>
      <nav aria-label="Footer navigation">
        <Link to="/products">Products</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/about">About</Link>
      </nav>
    </footer>
  )
}