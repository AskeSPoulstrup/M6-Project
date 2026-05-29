import "./HomePage.css";

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
      <div className="hero">
        <img
          src="/assets/Images/Pizza-ovn.png"
          alt="Pizzaovne"
        />
      </div>

      {/* FEATURE BAR */}
      <div className="features">
        <div className="container feature-inner">

          <div className="feature">
            <strong>FRI FRAGT TIL PAKKESHOP</strong>
            <span>ALLE ORDRER OVER 499 DKK</span>
          </div>

          <div className="feature">
            <strong>KUNDESERVICE 8-17</strong>
            <span>ALLE HVERDAGE</span>
          </div>

          <div className="feature">
            <strong>STORT UDVALG</strong>
            <span>RÅVARER & GEAR</span>
          </div>

        </div>
      </div>

      {/* PRODUCTS */}
      <div className="container products">
        <h2>POPULÆRE PRODUKTER</h2>

        <div className="product-grid">

          <div className="product">
            <img src="/assets/Images/fiordilatte.png" />
            <p className="title">FIOR DI LATTE</p>
            <p>Latteria Sorrentina</p>
            <p className="price">219,00 KR.</p>
          </div>

          <div className="product">
            <img src="/assets/Images/mel.webp" />
            <p className="title">NUVOLA SUPER</p>
            <p>Caputo</p>
            <p className="price">129,00 KR.</p>
          </div>

          <div className="product">
            <img src="/assets/Images/tomater.jpg" />
            <p className="title">SAN MARZANO</p>
            <p>Solania</p>
            <p className="price">FRA 29,00 KR.</p>
          </div>

          <div className="product">
            <img src="/assets/Images/pizzaspade.jpg" />
            <p className="title">PIZZASPADE</p>
            <p>Enzo</p>
            <p className="price">FRA 429,00 KR.</p>
          </div>

        </div>
      </div>

      {/* RECIPES */}
      <div className="container recipes">
        <h2>PIZZAOPSKRIFTER</h2>
        <div className="divider"></div>

        <div className="recipe-grid">
          <span>MARINARA</span>
          <span>QUATTRO FORMAGGI</span>
          <span>DIAVOLA</span>

          <span>CAPRICCIOSA</span>
          <span>SALSICCIA E FRIARIELLI</span>
          <span>MARGARITA</span>
        </div>
      </div>

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