import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

type CartButtonProps = {
  count?: number;
};

export default function CartButton({ count = 0 }: CartButtonProps) {
  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:ring-offset-2 focus:ring-offset-[--color-title]"
      aria-label="Open cart"
    >
      {/* cart icon */}
      <FiShoppingCart className="w-6 h-6" aria-hidden />

      {/* cart badge */}
      {count > 0 && (
        <span
          className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1.5 rounded-full bg-[--color-primary] text-white text-[11px] leading-5 text-center"
          aria-live="polite"
        >
          {count}
        </span>
      )}
    </Link>
  );
}
