import "./HomePage.css";
import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import FeaturedProductsSection from '../components/home/FeaturedProductsSection'
import RecipesSection from '../components/home/RecipesSection'

export default function HomePage() {
  return (
    <div>

      {/* TOPBAR */}
      <div className="topbar">
        Fri fragt ved køb over 499 kr | Kundeservice: Alle dage 08:00 - 17:00 | Tlf: 12 34 56 78
      </div>

      {/* NAVBAR */}
      <div className="navbar">
        <div className="container nav-inner">
          <div className="logo">LOGO</div>

          <div className="nav-links">
            <a>SHOP</a>
            <a>OPSKRIFTER</a>
            <a>OM OS</a>
            <a>KONTAKT</a>
          </div>

          <div className="nav-actions">
            <span>🔍 SØG</span>
            <span>🛒</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <HeroSection />

      {/* FEATURE BAR */}
      <FeaturesSection />

      {/* PRODUCTS */}
      <FeaturedProductsSection />

      {/* RECIPES */}
      <RecipesSection />

      {/* FOOTER */}
      <div className="footer">
        <div className="container footer-inner">

          <div>
            <h4>SLICE-MANAGEMENT</h4>
            <p>Fibigerstræde 15</p>
            <p>9000 Aalborg</p>
            <p>CVR: 09876543</p>
          </div>

          <div>
            <h4>KUNDESERVICE</h4>
            <p>MAN - FRE: 08:00–17:00</p>
            <p>TLF: (+45) 12 34 56 78</p>
            <p>support@slice-management.dk</p>
          </div>

          <div>
            <h4>INFORMATION</h4>
            <p>OM OS</p>
            <p>JOBS</p>
            <p>BETINGELSER</p>
          </div>

        </div>
      </div>

    </div>
  );
}