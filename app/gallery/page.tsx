import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1585386959984-a4155223f3f8?auto=format&fit=crop&w=1400&q=80",
    alt: "Warehouse operations",
    label: "Warehouse operations",
  },
  {
    src: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80",
    alt: "Confectionery display",
    label: "Confectionery display",
  },
  {
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1400&q=80",
    alt: "Dubai skyline",
    label: "Dubai headquarters",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1400&q=80",
    alt: "Fleet of vehicles",
    label: "Distribution fleet",
  },
  {
    src: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=80",
    alt: "Logistics hub",
    label: "Logistics hub",
  },
  {
    src: "https://images.unsplash.com/photo-1515162305284-9b50b9b22a19?auto=format&fit=crop&w=1400&q=80",
    alt: "Retail shelves",
    label: "Retail shelves",
  },
];

export default function GalleryPage() {
  return (
    <div className="container py-10 md:py-14 space-y-8">
      <header className="max-w-2xl space-y-3">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] section-title">
          Image gallery
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          A visual snapshot of Rasti Lari
        </h1>
        <p className="text-sm leading-relaxed text-slate-600">
          A simple gallery showcasing our headquarters, warehouses, fleet and
          product displays. Replace these placeholder images with your own
          photography when you are ready.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <FadeIn key={image.src + index} delay={0.04 * index}>
            <figure className="group relative h-56 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-90" />

              <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 backdrop-blur">
                  {image.label}
                </span>
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </section>
    </div>
  );
}
