import { BsGeoAlt } from "react-icons/bs";
import { BiEnvelopeOpen, BiPhone } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

// Info list data
export const infoList = [
  {
    id: 1,
    icon: BsGeoAlt,
    text: "Goteborg",
  },
  {
    id: 2,
    icon: BiEnvelopeOpen,
    text: "info@greenforest.com",
  },
];

// Phone contact
export const phoneContact = {
  icon: BiPhone,
  text: "+46 (073) 999 88 77",
};

// Social links
export const socialLinks = [
  {
    id: 1,
    icon: FaFacebookF,
    url: "#",
  },
  {
    id: 2,
    icon: FaTwitter,
    url: "#",
  },
  {
    id: 3,
    icon: FaLinkedinIn,
    url: "#",
  },
  {
    id: 4,
    icon: FaPinterestP,
    url: "#",
  },
];

export type NavItem = {
  label: string;
  href: string;
};

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pages", href: "/pages" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];