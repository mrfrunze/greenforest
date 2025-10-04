// components/catalog/ProductGrid.tsx
import { products } from "@/utils/data";
import ProductTile from "./ProductTile";



export default function ProductGrid() {
  return (
    <section className="mx-auto w-full max-w-screen-xl px-4 py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((item) => (
          <ProductTile key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
