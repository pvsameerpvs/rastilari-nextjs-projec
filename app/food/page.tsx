import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export default function FoodPage() {
  return (
    <div className="container py-10 md:py-14 space-y-10">
      {/* HERO: text + image */}
      <section className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-center">
        <FadeIn>
          <header className="max-w-2xl space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] section-title">
              Food
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Best Yummy Food – our food and distribution network
            </h1>

            <p className="text-sm leading-relaxed text-slate-600">
              Rasti Lari&apos;s food division combines a century of trading
              heritage with modern infrastructure to move products quickly and
              safely across the UAE and beyond.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Fleet
                </div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  50+
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Warehouses
                </div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  7 + 1
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Team
                </div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  95+
                </div>
              </div>
            </div>
          </header>
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* IMAGE CARD */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-[240px] w-full sm:h-[320px] md:h-[380px]">
              <Image
                src="/food.jpg" // ✅ put food.jpg inside /public (or change to /desert.jpg)
                alt="Food & distribution"
                fill
                priority
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                Dubai • Al Ras • Al Quoz • Al Rashidiya
              </div>
              <p className="mt-1 text-sm leading-relaxed text-white/90">
                Built for prompt deliveries backed by decades of experience.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CONTENT CARD */}
      <FadeIn delay={0.05}>
        <section className="max-w-4xl rounded-3xl border border-slate-200 bg-white p-7 text-sm leading-relaxed text-slate-700 shadow-sm">
          <div className="space-y-4">
            <p>
              The Group has got the right type of infrastructure with
              professionals who are experts in their respective fields. The head
              office and the main showroom is located in the Group&apos;s own
              building in the heart of Dubai&apos;s wholesale market – Al Ras,
              near the world-famous Gold Souq in Deira, Dubai.
            </p>
            <p>
              It has spacious warehouses (a block of 7 warehouses each at Al
              Quoz) again owned by the Group and also one warehouse in Al
              Rashidiya. So, from finalizing deals to prompt deliveries, its rich
              experience of over 90 years comes handy and, until date, the Group
              owns a fleet of more than 50 vehicles to meet commitments.
            </p>
            <p>
              The Group, though 100 years old, still possesses a young spirit and
              dreams to reach higher levels of success year after year with its
              team of skilled staff. Thus, the overall business in the UAE has
              about 95 personnel which is expanding with the expansion of the
              company to Oman.
            </p>

            <div className="pt-3">
              <Button asChild size="sm" className="rounded-full">
                <Link href="/products?category=foodstuff">
                  View more food products
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
