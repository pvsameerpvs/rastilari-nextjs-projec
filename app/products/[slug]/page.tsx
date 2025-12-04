import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { getTestimonialsForProduct } from "@/data/testimonials";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductInfoTabs } from "@/components/product-info-tabs";
import { ProductCard } from "@/components/product-card";

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({
  params
}: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product not found - Rasti Lari" };

  return {
    title: `${product.name} | Rasti Lari Product Info`,
    description: product.shortDescription
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const testimonials = getTestimonialsForProduct(product.slug);
  const related = getRelatedProducts(product, 4);

  return (
    <div className="container space-y-10">
      <nav className="text-xs text-slate-500">
        <Link href="/" className="hover:text-brand">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/products" className="hover:text-brand">
          Product Info
        </Link>{" "}
        / <span className="text-slate-800">{product.name}</span>
      </nav>

      <section className="grid gap-8 md:grid-cols-[1.1fr,1fr] md:items-start">
        <div className="space-y-4">
          <Badge>Product information</Badge>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            {product.name}
          </h1>
          {product.subtitle && (
            <p className="text-sm text-slate-600">{product.subtitle}</p>
          )}
          <dl className="grid gap-3 text-xs text-slate-600 sm:grid-cols-3">
            <div>
              <dt className="font-semibold text-slate-700">SKU</dt>
              <dd>{product.sku}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-700">Category</dt>
              <dd>{product.categoryLabel}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-700">Product ID</dt>
              <dd>{product.productId}</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-3">
          <div className="relative h-72 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          {product.images[1] && (
            <div className="relative h-28 overflow-hidden rounded-2xl border border-dashed border-slate-200 bg-slate-50">
              <Image
                src={product.images[1]}
                alt={`${product.name} secondary`}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>

      <ProductInfoTabs product={product} testimonials={testimonials} />

      {related.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Related products
            </h2>
            <Button asChild variant="ghost" size="sm" className="rounded-full">
              <Link href="/products">Back to all products</Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((relatedProduct, index) => (
              <ProductCard
                key={relatedProduct.slug}
                product={relatedProduct}
                index={index}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
