export type HeroSlide = {
  id: string;
  bg: string;           // public image path
  subtitle: string;
  line1: string;
  line2: string;
  desc: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export const heroSlides: HeroSlide[] = [
  {
    id: "s1",
    bg: "/images/hero-bg.jpg",
    subtitle: "Natural Environment",
    line1: "Be Safe Controls",
    line2: "Environment",
    desc: "Professionally optimize interdependent intellectual interoperable best practices.",
    primary: { label: "Let’s Talk", href: "/contact" },
    secondary: { label: "Read More", href: "/about" },
  },
  {
    id: "s2",
    bg: "/images/hero-bg2.jpg",
    subtitle: "Natural Environment",
    line1: "Be Safe Controls",
    line2: "Environment",
    desc: "Improve ecosystems with data-driven impact and sustainable actions.",
    primary: { label: "Let’s Talk", href: "/contact" },
  },
];