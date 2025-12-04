export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
  match?: RegExp;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home", match: /^\/$/ },
  {
    href: "https://shop.rastilari.com/",
    label: "E-Shop",
    external: true
  },
  { href: "/products", label: "Product Info", match: /^\/products/ },
  { href: "/contact", label: "Contact us", match: /^\/contact/ },
  { href: "/about", label: "About us", match: /^\/about/ },
  // { href: "/blog", label: "Blog", match: /^\/blog/ },
  { href: "/gallery", label: "Gallery", match: /^\/gallery/ },
  { href: "/food", label: "Food", match: /^\/food/ }
];
