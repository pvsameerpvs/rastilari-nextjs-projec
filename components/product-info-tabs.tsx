"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import type { Testimonial } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface ProductInfoTabsProps {
  product: Product;
  testimonials: Testimonial[];
}

type TabKey = "overview" | "additional" | "reviews";

const TABS: { key: TabKey; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "additional", label: "Additional information" },
  { key: "reviews", label: "Customer testimonials" }
];

export function ProductInfoTabs({ product, testimonials }: ProductInfoTabsProps) {
  const [active, setActive] = useState<TabKey>("overview");

  const averageRating = useMemo(() => {
    if (!testimonials.length) return null;
    const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
    return (total / testimonials.length).toFixed(1);
  }, [testimonials]);

  return (
    <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
      <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
        {TABS.map((tab) => (
          <Button
            key={tab.key}
            type="button"
            size="sm"
            variant={active === tab.key ? "default" : "ghost"}
            className={cn(
              "rounded-full px-4 py-1 text-xs",
              active === tab.key
                ? "bg-brand text-white"
                : "text-slate-600 hover:text-slate-900"
            )}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <div className="mt-5 text-sm leading-relaxed text-slate-700">
        {active === "overview" && (
          <div className="space-y-3">
            <p>{product.longDescription}</p>
          </div>
        )}

        {active === "additional" && (
          <dl className="grid gap-3 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Brand
              </dt>
              <dd>{product.brand}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Company
              </dt>
              <dd>{product.company}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Category
              </dt>
              <dd>{product.categoryLabel}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                SKU
              </dt>
              <dd>{product.sku}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Product ID
              </dt>
              <dd>{product.productId}</dd>
            </div>
          </dl>
        )}

        {active === "reviews" && (
          <div className="space-y-4">
            {averageRating && (
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm">
                <div className="flex items-center gap-1 text-brand">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-semibold">{averageRating}</span>
                </div>
                <p className="text-xs text-slate-500">
                  Based on {testimonials.length} customer review
                  {testimonials.length === 1 ? "" : "s"}.
                </p>
              </div>
            )}

            {testimonials.length ? (
              <div className="space-y-3">
                {testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="rounded-xl border border-slate-100 bg-white px-4 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5 text-xs text-amber-500">
                        {Array.from({ length: t.rating }).map((_, index) => (
                          <Star
                            key={index}
                            className="h-3 w-3 fill-current"
                          />
                        ))}
                      </div>
                      <div className="text-xs font-semibold text-slate-800">
                        {t.author}
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-slate-600">{t.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500">
                There are no customer testimonials for this product yet.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
