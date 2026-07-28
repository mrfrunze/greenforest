"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import TopHeader from "./TopHeader";
import { navLinks } from "@/utils/data";
import { useSticky } from "@/hooks/useSticky";
import CartButton from "./CartButton";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiLobArrow } from "react-icons/gi";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuH, setMenuH] = useState(0);

  const innerRef = useRef<HTMLDivElement>(null)

  const isSticky = useSticky(80);
  const cartCount = 2;

   useEffect(() => {
    const measure = () => setMenuH(isOpen ? (innerRef.current?.scrollHeight ?? 0) : 0);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isOpen]);


  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 transition-all duration-300`}
    >
      {/* top header */}
      <div
        className={`header-top ${
          isSticky ? "header-top--hide" : ""
        } hidden md:block`}
      >
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
                src="/images/logo-white-mini.png"
                alt="GreenForest logo"
                width={150}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* navigation */}
          <nav
            id="site-nav"
            className="nav-mobile nav-collapse md:justify-center md:static md:bg-transparent md:h-auto flex md:flex-row md:gap-8 md:p-0"
            style={{ ["--menu-h" as any]: isOpen ? `${menuH}px` : "0px" } as React.CSSProperties}
          >
            <div ref={innerRef} className="flex flex-col items-center py-5 gap-5 md:flex-row md:gap-8 md:py-0">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[--color-primary] transition-colors text-[18px]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* cart button */}
          <CartButton count={cartCount} />
          {/* burger menu */}
          <div
            className="burger-menu md:hidden flex text-[50px] text-white relative z-10"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="site-nav"
          >
            {isOpen ? <GiLobArrow /> : <FaBarsStaggered />}
          </div>
        </div>
      </div>
    </header>
  );
}
