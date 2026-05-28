import FeaturedProductsSection from '../components/home/FeaturedProductsSection'
import FeaturesSection from '../components/home/FeaturesSection'
import HeroSection from '../components/home/HeroSection'
import RecipesSection from '../components/home/RecipesSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FeaturedProductsSection />
      <RecipesSection />
    </>
  )
}