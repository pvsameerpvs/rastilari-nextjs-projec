// components/home/home-gallery-teaser.tsx
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

const galleryImages = [
  "https://images.unsplash.com/photo-1585386959984-a4155223f3f8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1585386959984-a4155223f3f8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1585386959984-a4155223f3f8?auto=format&fit=crop&w=800&q=80",
];

export function HomeGalleryTeaser() {
  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="section-title">Gallery</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
            A glimpse into Rasti Lari
          </h2>
          <p className="mt-1 text-sm text-slate-600 max-w-xl">
            Explore our showrooms, warehouses and product displays through a
            simple image gallery.
          </p>
        </div>
        <Button asChild variant="outline" size="sm" className="rounded-full">
          <Link href="/gallery">Open image gallery</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {galleryImages.map((src, index) => (
          <FadeIn key={src + index} delay={0.05 * index}>
            <div className="relative h-32 overflow-hidden rounded-2xl border border-slate-100 bg-white">
              <Image
                src={src}
                alt="Rasti Lari gallery image"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
