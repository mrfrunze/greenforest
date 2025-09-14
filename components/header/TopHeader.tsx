"use client";

import Link from "next/link";
import { infoList, phoneContact, socialLinks } from "@/utils/data";

const TopHeader = () => {
  return (
    <div className="w-full border-b border-[--color-primary]/20">
      <div className="mx-auto w-full max-w-[1140px] px-4 py-[11px] flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Left side: address and email */}
          <ul className="flex flex-col items-start gap-2 text-white text-[14px] md:flex-row md:gap-6">
            {infoList.map((item) => (
              <li key={item.id} className="flex items-center transition-colors hover:text-[--color-primary]">
                <item.icon className="mr-2 text-[--color-primary] text-[18px]" /> {item.text}
              </li>
            ))}
          </ul>

        {/* Right side: phone and social icons */}
        <div className="flex items-center gap-6 md:justify-end">
          <Link href="#" className="flex items-center text-white text-[14px] transition-colors hover:text-[--color-primary]">
            <phoneContact.icon className="mr-2 text-[--color-primary] text-[18px]" /> 
            {phoneContact.text}
          </Link>
         <ul className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <li key={social.id}>
                <Link href={social.url} 
                  className="text-white text-[15px] transition-colors hover:text-[--color-primary]"
                >
                  <social.icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
