// components/home/home-gallery-teaser.tsx
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

const galleryImages = [
  "https://images.unsplash.com/photo-1585386959984-a4155223f3f8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=80",
];

export function HomeGalleryTeaser() {
  return (
    <section className="space-y-6 pb-16 md:pb-20">

      {/* Heading */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs section-title font-semibold uppercase tracking-[0.18em] ">
            Gallery
          </div>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
            A glimpse into Rasti Lari
          </h2>

          <p className="mt-1 max-w-xl text-sm text-slate-600">
            Explore our showrooms, warehouses and product displays through a
            simple image gallery.
          </p>
        </div>

        <Button asChild variant="outline" size="sm" className="rounded-full">
          <Link href="/gallery">Open image gallery</Link>
        </Button>
      </div>

      {/* Images */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((src, index) => (
          <FadeIn key={src + index} delay={0.05 * index}>
            <Link
              href="/gallery"
              className="group relative block h-40 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Image
                src={src}
                alt="Rasti Lari gallery image"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-900/10 to-transparent opacity-90" />

              {/* small label */}
              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 backdrop-blur">
                View
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
