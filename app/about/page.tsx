import { FadeIn } from "@/components/motion/fade-in";

export default function AboutPage() {
  return (
    <div className="container space-y-12">
      <section className="max-w-3xl space-y-6">
        <FadeIn>
          <div className="section-title">About us</div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            About Rasti Lari Group
          </h1>
          <p className="text-sm leading-relaxed text-slate-600">
            Established in the 1920s by our founders HAJI ZAINAL RASTI &amp;
            MOHAMED B. RASTI, the Rasti Lari multinational Group was set up in
            Dubai, U.A.E. After 79 years, in 1999, the company was renamed by
            the sons of Haji Zainal Rasti with the same level of commitment and
            vision to form the RASTI LARI GROUP OF COMPANIES.
          </p>
        </FadeIn>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.6fr,1.2fr] md:items-start">
        <FadeIn>
          <div className="space-y-5 text-sm leading-relaxed text-slate-700">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              History of Rasti Lari
            </h2>
            <p>
              With roots dating back to the 1920s, Rasti Lari is a multinational
              group of companies headquartered in Dubai, United Arab Emirates.
              The company has evolved from its humble beginnings as a trading
              entity to a diversified conglomerate, encompassing imports,
              exports, wholesale, retail and distribution.
            </p>
            <p>
              Its extensive product portfolio caters to a diverse clientele, and
              its international presence expands its reach, opening doors to new
              markets and opportunities. RASTI LARI is a multi-national group
              involved in multi-faceted activities based in Dubai, United Arab
              Emirates. Its activities include import, export, wholesale and
              retail operations.
            </p>
            <p>
              The Group, in association with some of the leading suppliers in
              the world, offers a bouquet of superior quality products that
              include foodstuff items, confectionery, household products,
              batteries, sundries, toys and more. The Rasti Lari Group has a
              wide market base covering the entire U.A.E. as well as
              international markets, specifically Asian countries and the Middle
              East.
            </p>
            <p>
              The Group though 100 years old, still possesses a young spirit and
              dreams to reach higher levels of success year after year.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
            <h3 className="text-sm font-semibold tracking-tight text-slate-900">
              Our presence in Dubai
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Our head office and the main Rasti Lari showroom is located in the
              Group&apos;s own building in the heart of Dubai&apos;s wholesale
              market – Al Ras, near the world-famous Gold Souq in Deira. It has
              its own spacious warehouse.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              The Group also operates a block of seven warehouses in Al Quoz
              Industrial Area 4 and another warehouse in Al Rashidiya to support
              fast and efficient deliveries across the UAE and beyond.
            </p>
            <p className="text-xs text-slate-500">
              From finalising deals to prompt deliveries, our rich experience of
              over 90 years comes in handy, backed by a dependable logistics
              fleet and professional team.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
