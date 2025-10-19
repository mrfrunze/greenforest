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
    <article className="
        group relative overflow-hidden rounded-2xl
        border-[1px] border-[#a09b9b] bg-white
        shadow-[0_1px_0_rgba(0,0,0,0.02)]
        hover:[box-shadow:1px_0px_14px_1px_#ebebeb]
        smooth-transition
    ">
      {/* image */}
      <Link href={href} aria-label={title} className="block">
        {/* preserve aspect ratio */}
        <div className="relative w-full overflow-hidden rounded-t-xl" 
          style={{ aspectRatio: "4/3" }}
        >
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
            <div className="
                pointer-events-auto flex gap-2 rounded-full bg-white/80 backdrop-blur
                ring-1 ring-black/10
                md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100
            ">
              {/* wishlist */}
              <button
                type="button"
                className="
                  inline-flex 
                  h-9 
                  w-9 
                  items-center 
                  justify-center 
                  rounded-full text-[#001819] hover:text-[--color-primary] transition-colors"
                aria-label="Add to wishlist"
              >
                <FaHeart className="text-[16px]" />
              </button>
              {/* add to cart */}
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#001819] hover:text-[--color-primary] transition-colors"
                aria-label="Add to cart"
              >
                <FaShoppingCart className="text-[16px]" />
              </button>
            </div>
          </div>
        </div>
      </Link>

      {/* content */}
      <div className="border-t border-black/5 bg-[#F6F6EE] p-4">
        {/* title */}
        <div className="font-bold text-[#49AF45] text-center text-3xl">
          {title}
        </div>

        {/* price */}
        <div className="mt-2 text-2xl font-semibold text-center">${price.toFixed(2)}</div>
      </div>
    </article>
  );
}
