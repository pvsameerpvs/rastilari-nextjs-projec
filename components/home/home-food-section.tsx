// components/home/home-food-section.tsx
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export function HomeFoodSection() {
  return (
    <section className="grid gap-10 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-soft md:grid-cols-[1.1fr,1fr] md:items-center">
      <FadeIn>
        <div className="space-y-4">
          <div className="section-title">Food</div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Best Yummy Food – backed by strong infrastructure
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            The Group has the right type of infrastructure with professionals
            who are experts in their respective fields. The head office and
            main showroom are located in the Group&apos;s own building in the
            heart of Dubai&apos;s wholesale market – Al Ras, near the
            world-famous Gold Souq in Deira.
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            With spacious warehouses in Al Quoz Industrial Area and Al
            Rashidiya, a fleet of more than 50 vehicles, and a team of around
            95 people in the UAE, Rasti Lari delivers prompt, reliable
            service across the region.
          </p>
          <Button asChild size="sm" className="rounded-full">
            <Link href="/food">View more about our food operations</Link>
          </Button>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative h-32 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
              alt="Warehouse operations"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-32 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1585386959984-a4155223f3f8?auto=format&fit=crop&w=800&q=80"
              alt="Food distribution"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-32 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1528184039930-bd03972bd974?auto=format&fit=crop&w=800&q=80"
              alt="Retail shelves"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-32 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80"
              alt="Logistics vehicles"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
