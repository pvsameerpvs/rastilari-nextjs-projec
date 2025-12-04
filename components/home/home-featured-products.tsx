// components/home/home-featured-products.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/product-grid";
import type { Product } from "@/data/products";

interface HomeFeaturedProductsProps {
  products: Product[];
}

export function HomeFeaturedProducts({ products }: HomeFeaturedProductsProps) {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="section-title">Products</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
            Our featured products
          </h2>
          <p className="mt-1 text-sm text-slate-600 max-w-xl">
            Rasti Lari works with leading global suppliers to offer a curated
            bouquet of foodstuff, confectionery, snacks, drinks, household
            items, toys and more.
          </p>
        </div>
        <Button asChild variant="ghost" size="sm" className="rounded-full">
          <Link href="/products">View all products</Link>
        </Button>
      </div>

      <ProductGrid products={products} />
    </section>
  );
}
