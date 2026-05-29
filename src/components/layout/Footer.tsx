import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <p className="footer__brand">Slice-Management</p>
          <p className="footer__tagline">
            Raavarer, udstyr og opskrifter til pizzanoerder der tager det seriost.
          </p>
          <p className="footer__address">Pizzagade 12 &middot; 2100 Koebenhavn Oe</p>
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
            <a href="tel:+4570201010">+45 70 20 10 10</a>
          </nav>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Slice-Management. Alle rettigheder forbeholdes.</p>
      </div>
    </footer>
  )
}
