import HeroSlider from "../components/HeroSlider";
import Categories from "../components/Categories";
import ProductGrid from "../components/ProductGrid";
import PromoBanner from "../components/PromoBanner";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Categories />
      <ProductGrid />
      <PromoBanner />
    </>
  );
}
