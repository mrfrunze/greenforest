import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

type Props = {
  id: string;
  title: string;
  price: number;
  image: string;
  href?: string;
};

export default function ProductTile({ title, price, image, href = "#" }: Props) {
  return (
    <article className="group relative rounded-xl border border-white/10 bg-[#0e0e0e] shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
      {/* image */}
      <Link href={href} aria-label={title} className="block">
        {/* preserve aspect ratio */}
        <div className="relative w-full overflow-hidden rounded-t-xl" style={{ aspectRatio: "4/3" }}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 768px) 33vw, 100vw"
            priority={false}
          />
          {/* action bar: mobile visible, desktop on hover */}
          <div className="pointer-events-none absolute inset-0 flex items-start justify-end p-3">
            <div className="pointer-events-auto flex gap-2 rounded-full bg-black/45 p-2 backdrop-blur-md md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
              {/* wishlist */}
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:border-[--color-primary] hover:text-[--color-primary] transition-colors"
                aria-label="Add to wishlist"
              >
                <FaHeart className="text-[16px]" />
              </button>
              {/* add to cart */}
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:border-[--color-primary] hover:text-[--color-primary] transition-colors"
                aria-label="Add to cart"
              >
                <FaShoppingCart className="text-[16px]" />
              </button>
            </div>
          </div>
        </div>
      </Link>

      {/* content */}
      <div className="p-4">
        {/* title */}
        <Link href={href} className="block text-base font-semibold text-white hover:text-[--color-primary] transition-colors">
          {title}
        </Link>

        {/* price */}
        <div className="mt-2 text-[--color-primary] font-semibold">${price.toFixed(2)}</div>
      </div>
    </article>
  );
}
