import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <FadeIn delay={0.05 * index}>
      <Card className="flex h-full flex-col overflow-hidden">
        <Link href={`/products/${product.slug}`}>
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>
        <CardHeader>
          <Badge className="mb-1">{product.categoryLabel}</Badge>
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
          {product.subtitle && (
            <CardDescription className="line-clamp-2">
              {product.subtitle}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="mt-auto flex flex-col gap-2 text-xs text-slate-500">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>
              <span className="font-semibold text-slate-700">SKU:</span>{" "}
              {product.sku}
            </span>
            <span>
              <span className="font-semibold text-slate-700">Brand:</span>{" "}
              {product.brand}
            </span>
          </div>
          <p className="line-clamp-2 text-xs leading-relaxed">
            {product.shortDescription}
          </p>
          <Link
            href={`/products/${product.slug}`}
            className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand hover:text-brand-dark"
          >
            View details
          </Link>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
