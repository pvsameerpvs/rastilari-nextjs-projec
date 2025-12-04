import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1585386959984-a4155223f3f8?auto=format&fit=crop&w=1200&q=80",
    alt: "Warehouse operations",
    label: "Warehouse operations"
  },
  {
    src: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    alt: "Confectionery display",
    label: "Confectionery display"
  },
  {
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
    alt: "Dubai skyline",
    label: "Dubai headquarters"
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    alt: "Fleet of vehicles",
    label: "Distribution fleet"
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    alt: "Logistics hub",
    label: "Logistics hub"
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    alt: "Retail shelves",
    label: "Retail shelves"
  }
];

export default function GalleryPage() {
  return (
    <div className="container space-y-8">
      <header className="space-y-3 max-w-2xl">
        <div className="section-title">Image gallery</div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          A visual snapshot of Rasti Lari
        </h1>
        <p className="text-sm text-slate-600">
          A simple gallery showcasing our headquarters, warehouses, fleet and
          product displays. Replace these placeholder images with your own
          photography when you are ready.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {galleryImages.map((image, index) => (
          <FadeIn key={image.src} delay={0.04 * index}>
            <figure className="group relative h-56 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent px-4 pb-3 pt-12 text-xs text-slate-50">
                {image.label}
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </section>
    </div>
  );
}
