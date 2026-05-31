import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <p className="footer__brand">Slice-Management</p>
          <p className="footer__tagline">
            Råvarer, udstyr og opskrifter til pizzanørder der tager det seriøst.
          </p>
          <p className="footer__address">Pizzagade 12 &middot; 9000 Aalborg</p>
        </div>
        <div className="footer__col">
          <p className="footer__col-title">Kundeservice</p>
          <nav aria-label="Kundeservice navigation">
            <Link to="/contact">Kontakt os</Link>
            <Link to="/products">Shop</Link>
            <Link to="/recipes">Opskrifter</Link>
          </nav>
        </div>
        <div className="footer__col">
          <p className="footer__col-title">Information</p>
          <nav aria-label="Info navigation">
            <Link to="/about">Om os</Link>
            <a href="mailto:info@slice-management.dk">info@slice-management.dk</a>
            <a href="tel:+4512345678">+45 12 34 56 78</a>
          </nav>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Slice-Management. Alle rettigheder forbeholdes.</p>
      </div>
    </footer>
  )
}
