import Image from "next/image";
import Link from "next/link";
import type { HeroSlide } from "@/utils/heroData";

type Props = { slide: HeroSlide };

export default function Slider({ slide }: Props) {
  return (
    <div className="relative h-svh w-full">
      <Image
        src={slide.bg}
        alt={slide.subtitle}
        fill
        priority
        className="object-cover" /* cover whole area */
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[--color-title]/70" />
      <div className="relative z-10 h-full">
        <div className="mx-auto w-full max-w-screen-xl px-4 h-full flex items-center">
          <div className="max-w-[820px]">
            <p className="text-[--color-accent] text-sm font-medium uppercase tracking-wide">
              {slide.subtitle}
            </p>

            {/* titles */}
            <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-[1.05]">
              {slide.line1}
            </h1>
            <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-[1.05]">
              {slide.line2}
            </h1>

            {/* description */}
            <p className="text-white/90 text-base md:text-lg leading-7 md:leading-8 mt-5 md:w-1/2">
              {slide.desc}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex items-center gap-4">
              {slide.primary && (
                <Link
                  href={slide.primary.href}
                  className="relative inline-flex items-center justify-center rounded-md border-2 border-[--color-primary] bg-[--color-primary] px-8 py-3 text-white font-medium overflow-hidden"
                >
                  {/* hover fill */}
                  <span className="absolute inset-0 -z-10 before:content-[''] before:absolute before:inset-0 before:w-0 before:bg-white before:rounded-md before:transition-all before:duration-300 hover:before:w-full" />
                  <span className="relative z-10 hover:text-[--color-primary] transition-colors duration-300">
                    {slide.primary.label}
                  </span>
                </Link>
              )}
              {slide.secondary && (
                <Link
                  href={slide.secondary.href}
                  className="inline-flex items-center justify-center rounded-md border-2 border-white/40 bg-transparent px-8 py-3 text-white font-medium hover:text-[--color-primary] hover:border-[--color-primary] transition-colors"
                >
                  {slide.secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
