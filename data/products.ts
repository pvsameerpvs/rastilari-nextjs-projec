import type { CategorySlug } from "./categories";

export type Product = {
  id: number;
  productId: number;
  name: string;
  subtitle?: string;
  slug: string;
  sku: string;
  categorySlug: CategorySlug;
  categoryLabel: string;
  brand: string;
  company: string;
  shortDescription: string;
  longDescription: string;
  featured?: boolean;
  images: string[];
  tags?: string[];
};

export const products: Product[] = [
  {
    id: 1,
    productId: 22905,
    name: "Good day MOCACINNO",
    subtitle: "Good Day MOCACINNO 12x35X20g",
    slug: "good-day-mocacinno-12x35x20g",
    sku: "CFBA17M",
    categorySlug: "tea-drinks",
    categoryLabel: "Tea | Drinks",
    brand: "FIESTA",
    company: "CONFECTIONERY",
    shortDescription:
      "A rich, creamy mocaccino-style instant drink that combines smooth coffee with indulgent chocolate notes.",
    longDescription:
      "Good Day MOCACINNO is crafted for coffee lovers who enjoy a hint of chocolate sweetness in every sip. Each 20g sachet is perfectly portioned to deliver a café-style experience at home, in the office, or on the go. Packed in a convenient 12x35x20g format, it is ideal for retail shelves, wholesale orders, and modern trade. The blend dissolves instantly in hot water or milk, giving a velvety froth and balanced flavour profile that appeals to all age groups.",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=900&q=80"
    ],
    tags: ["instant drink", "coffee", "chocolate"]
  },
  {
    id: 2,
    productId: 31001,
    name: "Fiesta Choco Crunch Cookies",
    subtitle: "Butter cookies with rich chocolate chips",
    slug: "fiesta-choco-crunch-cookies",
    sku: "CKF1102",
    categorySlug: "cookies",
    categoryLabel: "Cookies",
    brand: "FIESTA",
    company: "CONFECTIONERY",
    shortDescription:
      "Crispy butter cookies loaded with chocolate chips for an everyday treat.",
    longDescription:
      "Fiesta Choco Crunch Cookies are baked with premium flour and real butter to achieve the perfect crunch. Generous chocolate chips in every bite make them a favourite for children and adults alike. Ideal for tea-time, lunch boxes, and impulse-buy counters. Packed for freshness and long shelf life, these cookies are designed for both traditional groceries and modern retail formats.",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80"
    ],
    tags: ["cookies", "chocolate", "snack"]
  },
  {
    id: 3,
    productId: 41022,
    name: "Golden Crunch Potato Chips - Classic Salt",
    subtitle: "Thin cut potato chips 25g",
    slug: "golden-crunch-potato-chips-classic-salt",
    sku: "CHS2501",
    categorySlug: "chips",
    categoryLabel: "Chips",
    brand: "GOLDEN CRUNCH",
    company: "SNACKS DIVISION",
    shortDescription:
      "Light, crispy potato chips seasoned with classic rock salt.",
    longDescription:
      "Golden Crunch Potato Chips are sliced extra thin and fried to a golden crisp. The Classic Salt variant delivers a clean, moreish flavour that keeps consumers coming back bag after bag. Perfect for supermarkets, convenience stores, horeca minibars and catering. Designed for excellent shelf impact with bold branding and reliable quality.",
    images: [
      "https://images.unsplash.com/photo-1585238342028-1bf29f26a10e?auto=format&fit=crop&w=900&q=80"
    ],
    tags: ["chips", "snacks"]
  },
  {
    id: 4,
    productId: 51010,
    name: "Rainbow Jelly Cups",
    subtitle: "Assorted fruit-flavoured jelly cups",
    slug: "rainbow-jelly-cups-assorted",
    sku: "JEL1003",
    categorySlug: "jellies",
    categoryLabel: "Jellies &",
    brand: "RAINBOW",
    company: "CONFECTIONERY",
    shortDescription:
      "Colourful, fun jelly cups in assorted fruit flavours for kids and families.",
    longDescription:
      "Rainbow Jelly Cups are a playful addition to any confectionery assortment. Each cup is sealed for hygiene and convenience, with bright colours that stand out on shelf. Ideal for school canteens, family stores and export markets looking for value-added jelly products.",
    images: [
      "https://images.unsplash.com/photo-1580537659466-5c8c89e5f9a2?auto=format&fit=crop&w=900&q=80"
    ],
    tags: ["jelly", "kids"]
  },
  {
    id: 5,
    productId: 62005,
    name: "Premium Assam Black Tea",
    subtitle: "Loose leaf black tea 200g",
    slug: "premium-assam-black-tea",
    sku: "TEA2020",
    categorySlug: "tea-drinks",
    categoryLabel: "Tea | Drinks",
    brand: "RASTI LARI",
    company: "FOODSTUFF",
    shortDescription:
      "Strong, aromatic Assam black tea sourced from select tea gardens.",
    longDescription:
      "Premium Assam Black Tea brings a full-bodied cup with bright colour and brisk flavour. Carefully packed to preserve freshness, it is suitable for both traditional loose-tea customers and modern café concepts. Can be served plain, with milk or blended into signature tea drinks.",
    images: [
      "https://images.unsplash.com/photo-1518977956815-dee006e48b48?auto=format&fit=crop&w=900&q=80"
    ],
    tags: ["tea", "hot drinks"]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.slug !== product.slug && p.categorySlug === product.categorySlug)
    .slice(0, limit);
}
