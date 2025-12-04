export type CategorySlug =
  | "biscuits"
  | "candy"
  | "chips"
  | "chocolate"
  | "cookies"
  | "drinks"
  | "foodstuff"
  | "gummies"
  | "jellies"
  | "kids-toys"
  | "kids-toys-chocolate"
  | "marshmallow"
  | "snacks"
  | "special-snacks"
  | "tea-drinks"
  | "toffee"
  | "toys"
  | "wafers"
  | "wafers-chocolate";

export type Category = {
  slug: CategorySlug;
  name: string;
  productCount: number;
};

export const categories: Category[] = [
  { slug: "biscuits", name: "Biscuits &", productCount: 21 },
  { slug: "candy", name: "Candy", productCount: 4 },
  { slug: "chips", name: "Chips", productCount: 54 },
  { slug: "chocolate", name: "Chocolate", productCount: 7 },
  { slug: "cookies", name: "Cookies", productCount: 21 },
  { slug: "drinks", name: "Drinks", productCount: 14 },
  { slug: "foodstuff", name: "FoodStuff", productCount: 5 },
  { slug: "gummies", name: "Gummies", productCount: 1 },
  { slug: "jellies", name: "Jellies &", productCount: 1 },
  { slug: "kids-toys", name: "Kids Toys", productCount: 38 },
  {
    slug: "kids-toys-chocolate",
    name: "Kids Toys | Chocolate",
    productCount: 1
  },
  { slug: "marshmallow", name: "Marshmallow", productCount: 5 },
  { slug: "snacks", name: "Snacks &", productCount: 32 },
  {
    slug: "special-snacks",
    name: "Special Snacks | Snacks &",
    productCount: 22
  },
  { slug: "tea-drinks", name: "Tea | Drinks", productCount: 12 },
  { slug: "toffee", name: "Toffee &", productCount: 4 },
  { slug: "toys", name: "Toys", productCount: 1 },
  { slug: "wafers", name: "Wafers", productCount: 4 },
  {
    slug: "wafers-chocolate",
    name: "Wafers | Chocolate",
    productCount: 1
  }
];
