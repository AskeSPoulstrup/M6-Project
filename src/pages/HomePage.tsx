// HOME PAGE (default export)
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FeaturedProductsSection />
      <RecipesSection />
    </>
  );
}

// HERO
function HeroSection() {
  return (
    <section className="relative w-full h-[350px] md:h-[500px] bg-black overflow-hidden">
      <img
        src="/images/hero-ovens.jpg"
        alt="Pizzaovne"
        className="w-full h-full object-cover"
      />
    </section>
  );
}

// FEATURES
function FeaturesSection() {
  return (
    <section className="bg-[#ebe7df] py-12 border-t-4 border-[#6b8d7c]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-[#6b8d7c]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 6v2h-2V6h2zm0 8v2h-2v-2h2zm4-4v2h-2v-2h2zM7 8v2H5V8h2zm12-2v2h-2V6h2zM9 4v2H7V4h2zm8 16h2v2h-2v-2zm-4 0h2v2h-2v-2zm4-4h2v2h-2v-2zm-4 0h2v2h-2v-2zm0-4h2v2h-2v-2z"/>
            </svg>
            <h3 className="text-xs font-bold text-black mb-1">FRI FRAGT TIL PAKKESHOP</h3>
            <p className="text-xs text-gray-600">ALLE ORDRER OVER 499 DKK</p>
          </div>

          <div className="text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-[#6b8d7c]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <h3 className="text-xs font-bold text-black mb-1">KUNDESERVICE 8-17</h3>
            <p className="text-xs text-gray-600">ALLE HVERDAGE</p>
          </div>

          <div className="text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-[#6b8d7c]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-2-.9-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <h3 className="text-xs font-bold text-black mb-1">STORT UDVALG</h3>
            <p className="text-xs text-gray-600">RÅVARER & GEAR</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// PRODUCTS
function FeaturedProductsSection() {
  const products = [
    {
      name: "FIOR DI LATTE",
      brand: "Latteria Sorrentina",
      price: "219,00 KR.",
      image: "/images/products/cheese.png",
    },
    {
      name: "NUVOLA SUPER",
      brand: "Caputo",
      price: "129,00 KR.",
      image: "/images/products/flour.png",
    },
    {
      name: "SAN MARZANO",
      brand: "Solania",
      price: "FRA 29,00 KR.",
      image: "/images/products/tomatoes.png",
    },
    {
      name: "PIZZASPADE",
      brand: "Enzo",
      price: "FRA 429,00 KR.",
      image: "/images/products/shovel.png",
    },
  ];

  return (
    <section className="bg-[#ebe7df] py-20">
      <h2 className="text-center text-sm font-bold tracking-widest mb-16 text-black uppercase">
        Populære produkter
      </h2>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <div key={i} className="text-center">
            <div className="bg-white p-6 mb-4 h-48 flex items-center justify-center">
              <img
                src={p.image}
                alt={p.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="text-xs font-bold text-black mb-1 uppercase">
              {p.name}
            </h3>
            <p className="text-xs text-gray-600 mb-2">{p.brand}</p>
            <p className="text-xs font-medium text-black">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// RECIPES
function RecipesSection() {
  const recipes = [
    "Marinara",
    "Quattro Formaggi",
    "Diavola",
    "Capricciosa",
    "Salsiccia e Friarielli",
    "Margarita",
  ];

  return (
    <section className="bg-[#ebe7df] py-20 text-center">
      <h2 className="text-sm font-bold tracking-widest mb-8 text-black uppercase">
        Pizzaopskrifter
      </h2>

      <div className="w-12 h-px bg-black mx-auto mb-12"></div>

      <div className="max-w-3xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((r, i) => (
          <a
            key={i}
            href={`/recipes/${r.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-xs font-medium text-black uppercase hover:text-[#6b8d7c] transition-colors"
          >
            {r}
          </a>
        ))}
      </div>
    </section>
  );
}