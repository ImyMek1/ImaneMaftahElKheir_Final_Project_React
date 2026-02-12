import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import HeroSlider from "../components/HeroSlider";
import Categories from "../components/Categories";
import ProductGrid from "../components/ProductGrid";
import PromoBanner from "../components/PromoBanner";

export default function Home() {
  return (
    <>
      <TopBar />
      <NavBar />
      <HeroSlider />
      <Categories />
      <ProductGrid />
      <PromoBanner />
    </>
  );
}
