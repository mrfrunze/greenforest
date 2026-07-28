import Sliders from "@/components/hero/Sliders";
import About from "@/components/about/About";
import ProductGrid from "@/components/catalog/ProductGrid";
import ProductSlider from "@/components/catalog/ProductSlider";


export default function Home() {
  return (
    <>
      <Sliders/>
      <About/>
      {/* <ProductGrid/> */}
      <ProductSlider/>
    </>
  );
}
