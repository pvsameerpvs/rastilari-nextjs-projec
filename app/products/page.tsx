import Link from "next/link";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/product-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
    filtered = filtered.filter((product) => product.categorySlug === activeCategory);
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
    <div className="container py-10 md:py-14 grid gap-10 md:grid-cols-[280px,1fr]">
      {/* Sidebar */}
      <aside className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] section-title">
            Product info
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Our products
          </h1>
          <p className="text-sm leading-relaxed text-slate-600">
            Browse a snapshot of our assortment across foodstuff, confectionery,
            snacks, drinks and toys.
          </p>
        </div>

        {/* Search */}
        <form className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
          <label className="block space-y-1">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Search products
            </span>
            <input
              name="q"
              defaultValue={searchParams?.q ?? ""}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
              placeholder="Search by name or SKU"
            />
          </label>

          <input type="hidden" name="category" value={activeCategory} />

          <Button type="submit" size="sm" className="w-full rounded-full">
            Apply
          </Button>

          {(activeCategory || q) && (
            <Button asChild variant="outline" size="sm" className="w-full rounded-full">
              <Link href="/products">Clear filters</Link>
            </Button>
          )}
        </form>

        {/* Categories */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Categories
          </div>

          <div className="space-y-1">
            <Link
              href="/products"
              className={`flex items-center justify-between rounded-2xl px-3 py-2 text-sm transition ${
                !activeCategory
                  ? "bg-slate-900 text-white"
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
                  className={`flex items-center justify-between rounded-2xl px-3 py-2 text-sm transition ${
                    selected
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span>{category.name}</span>
                  <span className={selected ? "text-white/80 text-xs" : "text-slate-500 text-xs"}>
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
        <div className="flex flex-wrap items-start justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="space-y-2">
           <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2">
  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
    Showing
  </span>
  <span className="text-sm font-semibold text-slate-900">
    {filtered.length} product{filtered.length === 1 ? "" : "s"}
  </span>
</div>


            {activeCategory && (
              <p className="text-xs text-slate-500">
                Filtered by category:{" "}
                <Badge className="bg-slate-100 text-slate-700">
                  {categories.find((c) => c.slug === activeCategory)?.name ?? activeCategory}
                </Badge>
              </p>
            )}

            {q && (
              <p className="text-xs text-slate-500">
                Search:{" "}
                <Badge className="bg-slate-100 text-slate-700">
                  {searchParams?.q}
                </Badge>
              </p>
            )}
          </div>

          <p className="max-w-xs text-xs leading-relaxed text-slate-500">
            Each product shows SKU, category, brand and a quick summary. Click a product
            to open the full details page.
          </p>
        </div>

        <ProductGrid products={filtered} />
      </section>
    </div>
  );
}
