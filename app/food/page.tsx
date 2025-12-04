import { FadeIn } from "@/components/motion/fade-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FoodPage() {
  return (
    <div className="container space-y-10">
      <FadeIn>
        <header className="max-w-2xl space-y-3">
          <div className="section-title">Food</div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Best Yummy Food – our food and distribution network
          </h1>
          <p className="text-sm text-slate-600">
            Rasti Lari&apos;s food division combines a century of trading
            heritage with modern infrastructure to move products quickly and
            safely across the UAE and beyond.
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={0.05}>
        <section className="max-w-3xl space-y-4 rounded-3xl border border-slate-100 bg-white p-7 text-sm leading-relaxed text-slate-700 shadow-soft">
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
        </section>
      </FadeIn>
    </div>
  );
}
