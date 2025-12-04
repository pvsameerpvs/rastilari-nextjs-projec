import Link from "next/link";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/product-grid";
import { Badge } from "@/components/ui/badge";

interface ProductsPageProps {
  searchParams?: {
    category?: string;
    q?: string;
  };
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const activeCategory = searchParams?.category ?? "";
  const q = searchParams?.q?.toLowerCase().trim() ?? "";

  let filtered = products;

  if (activeCategory) {
    filtered = filtered.filter(
      (product) => product.categorySlug === activeCategory
    );
  }

  if (q) {
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(q) ||
        product.subtitle?.toLowerCase().includes(q) ||
        product.sku.toLowerCase().includes(q)
    );
  }

  return (
    <div className="container grid gap-10 md:grid-cols-[260px,1fr]">
      {/* Sidebar */}
      <aside className="space-y-6">
        <div>
          <div className="section-title">Product info</div>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
            Our products
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Browse a snapshot of our assortment across foodstuff, confectionery,
            snacks, drinks and toys.
          </p>
        </div>

        <form className="space-y-3">
          <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Search products
            <input
              name="q"
              defaultValue={searchParams?.q ?? ""}
              className="mt-1 w-full rounded-full border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-brand"
              placeholder="Search by name or SKU"
            />
          </label>
          <input type="hidden" name="category" value={activeCategory} />
          <button
            type="submit"
            className="w-full rounded-full bg-brand px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white"
          >
            Apply
          </button>
        </form>

        <div className="space-y-3 text-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Categories
          </div>
          <div className="space-y-1">
            <Link
              href="/products"
              className={`flex items-center justify-between rounded-full px-3 py-2 text-xs ${
                !activeCategory
                  ? "bg-brand/5 text-brand"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span>All categories</span>
            </Link>
            {categories.map((category) => {
              const selected = activeCategory === category.slug;
              return (
                <Link
                  key={category.slug}
                  href={`/products?category=${category.slug}`}
                  className={`flex items-center justify-between rounded-full px-3 py-2 text-xs ${
                    selected
                      ? "bg-brand/5 text-brand"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-[0.65rem] text-slate-500">
                    {category.productCount}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Content */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1 text-sm">
            <p className="font-medium text-slate-800">
              Showing {filtered.length} product{filtered.length === 1 ? "" : "s"}
            </p>
            {activeCategory && (
              <p className="text-xs text-slate-500">
                Filtered by category:{" "}
                <Badge className="bg-slate-100 text-slate-700">
                  {
                    categories.find((c) => c.slug === activeCategory)?.name ??
                    activeCategory
                  }
                </Badge>
              </p>
            )}
          </div>
          <p className="text-xs max-w-xs text-slate-500">
            Each product on this page displays core details such as SKU,
            category, brand, and a quick summary. Click any product to open the
            full product information page with additional details and customer
            testimonials.
          </p>
        </div>

        <ProductGrid products={filtered} />
      </section>
    </div>
  );
}
