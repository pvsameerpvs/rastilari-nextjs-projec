import { FadeIn } from "@/components/motion/fade-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="container py-10 md:py-14 space-y-10">
      <FadeIn>
        <header className="max-w-2xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] section-title">
            Contact us
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Get in touch
          </h1>
          <p className="text-sm leading-relaxed text-slate-600">
            For enquiries, orders or partnerships, please reach out to us during
            working hours via email or phone. You are also most welcome to visit
            our head office or warehouse.
          </p>
        </header>
      </FadeIn>

      <section className="grid gap-10 md:grid-cols-[1.1fr,1fr]">
        {/* LEFT: DETAILS + FORM */}
        <FadeIn>
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Contact details
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-semibold text-slate-800">
                    Address
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    19 Al Ras Rd - Deira - Al Ras - Dubai - United Arab Emirates
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-semibold text-slate-800">
                    Working hours
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    Sunday – Thursday
                    <br />
                    9:00 AM to 6:00 PM (UAE time)
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-800">
                  Email & Phone
                </div>
                <div className="mt-2 space-y-1 text-sm">
                  <a
                    href="mailto:rasti@rastilari.com"
                    className="block text-slate-700 underline underline-offset-4 hover:text-slate-900"
                  >
                    rasti@rastilari.com
                  </a>
                  <a
                    href="tel:+97142262500"
                    className="block text-slate-700 underline underline-offset-4 hover:text-slate-900"
                  >
                    +971 4 2262500
                  </a>
                </div>
              </div>

              {/* Optional quick actions */}
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm" className="rounded-full">
                  <a href="mailto:rasti@rastilari.com">Email us</a>
                </Button>
                <Button asChild variant="outline" size="sm" className="rounded-full">
                  <a href="tel:+97142262500">Call now</a>
                </Button>
                <Button asChild size="sm" className="rounded-full">
                  <Link href="/products">Browse products</Link>
                </Button>
              </div>
            </div>

            {/* FORM */}
            <form className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Name
                  </span>
                  <input
                    type="text"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
                    placeholder="Your full name"
                  />
                </label>

                <label className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Email
                  </span>
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Phone
                </span>
                <input
                  type="tel"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
                  placeholder="+971 ..."
                />
              </label>

              <label className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Message
                </span>
                <textarea
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
                  rows={5}
                  placeholder="Write your message or enquiry here"
                />
              </label>

              <Button type="submit" className="rounded-full">
                Send message (demo)
              </Button>
            </form>
          </div>
        </FadeIn>

        {/* RIGHT: MAP */}
        <FadeIn delay={0.05}>
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Find us on the map
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
              <iframe
                title="Rasti Lari head office location"
                src="https://www.google.com/maps?q=19+Al+Ras+Rd,+Deira,+Dubai,+United+Arab+Emirates&output=embed"
                width="100%"
                height="380"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <p className="text-xs text-slate-500">
              Tip: Use the map to get directions to Al Ras (Deira), Dubai.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
