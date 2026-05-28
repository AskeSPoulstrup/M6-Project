// HOME PAGE (default export)
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <RecipesSection />
    </>
  );
}

// HERO
function HeroSection() {
  return (
    <section className="w-full h-96 md:h-screen bg-black">
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
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12 text-center px-4">
        <div>
          <p className="text-xs font-bold mb-1">FRI FRAGT TIL PAKKESHOP</p>
          <p className="text-xs text-gray-600">ALLE ORDRER OVER 499 DKK</p>
        </div>
        <div>
          <p className="text-xs font-bold mb-1">KUNDESERVICE 8-17</p>
          <p className="text-xs text-gray-600">ALLE HVERDAGE</p>
        </div>
        <div>
          <p className="text-xs font-bold mb-1">STORT UDVALG</p>
          <p className="text-xs text-gray-600">RÅVARER & GEAR</p>
        </div>
      </div>
    </section>
  );
}

// PRODUCTS
function ProductsSection() {
  const products = [
    { name: "FIOR DI LATTE", brand: "Latteria Sorrentina", price: "219,00 KR." },
    { name: "NUVOLA SUPER", brand: "Caputo", price: "129,00 KR." },
    { name: "SAN MARZANO", brand: "Solania", price: "FRA 29,00 KR." },
    { name: "PIZZASPADE", brand: "Enzo", price: "FRA 429,00 KR." },
  ];

  return (
    <section className="bg-[#ebe7df] py-16">
      <h2 className="text-center text-xs font-bold tracking-wider mb-12 uppercase">Populære produkter</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {products.map((p, i) => (
          <div key={i} className="text-center">
            <div className="bg-white h-40 mb-3"></div>
            <p className="text-xs font-bold uppercase">{p.name}</p>
            <p className="text-xs text-gray-600 mb-2">{p.brand}</p>
            <p className="text-xs font-medium">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// RECIPES
function RecipesSection() {
  const recipes = ["Marinara", "Quattro Formaggi", "Diavola", "Capricciosa", "Salsiccia e Friarielli", "Margarita"];

  return (
    <section className="bg-[#ebe7df] py-16 text-center">
      <h2 className="text-xs font-bold tracking-wider mb-6 uppercase">Pizzaopskrifter</h2>
      <div className="w-12 h-px bg-black mx-auto mb-8"></div>
      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {recipes.map((r, i) => (
          <a key={i} href={`/recipes`} className="text-xs uppercase hover:text-[#6b8d7c]">
            {r}
          </a>
        ))}
      </div>
    </section>
  );
}