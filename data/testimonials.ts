export type Testimonial = {
  id: number;
  productSlug: string;
  author: string;
  role?: string;
  rating: number;
  content: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    productSlug: "good-day-mocacinno-12x35x20g",
    author: "Ayesha, Supermarket Buyer – Dubai",
    rating: 5,
    content:
      "Good Day MOCACINNO has become one of our fastest moving hot drinks. Customers love the taste and the packaging stands out on the shelf."
  },
  {
    id: 2,
    productSlug: "good-day-mocacinno-12x35x20g",
    author: "Omar, Café Owner – Sharjah",
    rating: 4,
    content:
      "Easy to prepare, consistent flavour and good margin. Perfect for offices and small cafés like ours."
  },
  {
    id: 3,
    productSlug: "fiesta-choco-crunch-cookies",
    author: "Lina, Mother of two",
    rating: 5,
    content:
      "These cookies are always in my kids’ lunch boxes. They stay crunchy and the portion size is just right."
  },
  {
    id: 4,
    productSlug: "golden-crunch-potato-chips-classic-salt",
    author: "Retail Partner – Oman",
    rating: 5,
    content:
      "Golden Crunch has built a loyal following. The Classic Salt flavour is a must-stock item for us."
  }
];

export function getTestimonialsForProduct(slug: string): Testimonial[] {
  return testimonials.filter((t) => t.productSlug === slug);
}
