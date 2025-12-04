import Image from "next/image";

export default function AboutRastiLariSection() {
  return (
    <section className="">
      <div className="container py-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
         
<div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft md:order-1">
  {/* smaller height */}
  <div className="relative h-[220px] w-full md:h-[280px]">
    <Image
      src="/about.jpeg"
      alt="About Rasti Lari"
      fill
      className="object-cover"
      sizes="(min-width: 768px) 50vw, 100vw"
      priority
    />
  </div>
  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
</div>


          {/* TEXT (RIGHT) */}
          <div className="space-y-4 md:order-2">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] section-title">  
              About Us
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-slate-900">
              About Rasti Lari Corps.
            </h2>

            <p className="text-base leading-relaxed text-slate-700">
              Established in the 1920s by our founders <b>HAJI ZAINAL RASTI</b>{" "}
              &amp; <b>MOHAMED B. RASTI</b>. The Rasti Lari multinational Group
              was set up in Dubai, U.A.E. After 79 years, in 1999, the company
              was renamed by the sons of Haji Zainal Rasti with the same level
              of commitment and vision to form the{" "}
              <b>RASTI LARI GROUP OF COMPANIES</b>.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Founded
                </div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  1920s
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Renamed
                </div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  1999
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
