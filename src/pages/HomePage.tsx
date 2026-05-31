import "./HomePage.css";
import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import FeaturedProductsSection from '../components/home/FeaturedProductsSection'
import RecipesSection from '../components/home/RecipesSection'

export default function HomePage() {
  return (
    <div>

      {/* HERO */}
      <HeroSection />

      {/* FEATURE BAR */}
      <FeaturesSection />

      {/* PRODUCTS */}
      <FeaturedProductsSection />

      {/* RECIPES */}
      <RecipesSection />

    </div>
  );
}