// components/catalog/ProductGrid.tsx
import { products } from "@/utils/data";
import ProductTile from "./ProductTile";



export default function ProductGrid() {
  return (
    <section className="products-band">
    <div className="mx-auto w-full max-w-screen-xl px-4 py-24">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((item) => (
          <ProductTile key={item.id} {...item} />
        ))}
      </div>
    </div>
    </section>
    
  );
}
