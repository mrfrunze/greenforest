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
    <header
      className={`absolute inset-x-0 top-0 z-50 transition-all duration-300`}
    >
      {/* top header */}
      <div className={`header-top ${isSticky ? "header-top--hide" : ""}`}>
        <TopHeader />
      </div>

      {/* main header */}
      <div
        className={`header-main ${
          isSticky ? "header-main--fixed" : "header-main--init"
        }`}
      >
        <div className="header-inner">
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
          <CartButton count={cartCount} />
        </div>
      </div>
    </header>
  );
}
