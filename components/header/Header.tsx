"use client";

import Link from "next/link";
import Image from "next/image";
import TopHeader from "./TopHeader";
import { navLinks } from "@/utils/data";
import { useSticky } from "@/hooks/useSticky";
import CartButton from "./CartButton";

export default function Header() {
  const isSticky = useSticky(80);
  const cartCount = 2;

  return (
    <header className={`w-full border-b border-[--color-primary]/20 bg-[--color-title] transition-all duration-300 z-50 ${isSticky ? "fixed top-0 left-0 shadow-md" : "relative"}`}>
      {/* top header */}
      <TopHeader />

      {/* main header */}
      <div className="mx-auto w-full max-w-screen-xl px-4 flex items-center justify-between py-4 bg-[#111]">
        {/* logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="GreenForest logo"
              width={150}
              height={50}
              priority
            />
          </Link>
        </div>

        {/* navigation */}
        <nav className="flex gap-8 text-white text-sm font-medium">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-[--color-primary] transition-colors text-[18px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* cart button */}
        <CartButton count={cartCount}/>
      </div>
    </header>
  );
}
