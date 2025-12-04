import Link from "next/link";
import { Button } from "@/components/ui/button";

/** Fallback FadeIn (remove if you already have one) */
function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <div
      style={{ animationDelay: `${delay}s` }}
      className="animate-in fade-in-0 duration-700"
    >
      {children}
    </div>
  );
}

export default function WelcomeContent() {
  return (
    <div className="container py-12 md:py-20">
      <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center">
        <FadeIn>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Rasti Lari Group of Companies
            </h1>

            {/* black text */}
            <p className="max-w-xl text-base leading-relaxed text-slate-900">
              RASTI LARI is a multi-national group involved in multi-faceted
              activities based in Dubai, United Arab Emirates. From imports and
              exports to wholesale, retail and distribution, we serve customers
              across the UAE, Asia and the Middle East.
            </p>

            <div className="grid gap-4 rounded-2xl bg-white/90 p-5 text-slate-900 shadow-soft sm:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  100-year celebration
                </div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  100 YEARS OF EXPERIENCE
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  With roots dating back to the 1920s, Rasti Lari has evolved
                  from a humble trading entity into a diversified conglomerate
                  with a rich legacy in the region.
                </p>
              </div>

              <div className="space-y-2 text-xs leading-relaxed text-slate-600">
                <p>
                  At the heart of Rasti Lari&apos;s success lies an unwavering
                  commitment to customer satisfaction, quality and innovation.
                  Our customer-centric approach has earned the trust of both
                  businesses and consumers alike.
                </p>
              </div>
            </div>

          
          </div>
        </FadeIn>

        {/* Video replaces the image */}
        <FadeIn delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
            {/* 16:9 responsive wrapper */}
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/Gph7vtG6vx0?start=14"
                title="Rasti Lari Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
