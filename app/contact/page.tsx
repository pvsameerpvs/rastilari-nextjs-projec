import { FadeIn } from "@/components/motion/fade-in";

export default function ContactPage() {
  return (
    <div className="container space-y-10">
      <FadeIn>
        <header className="max-w-2xl space-y-3">
          <div className="section-title">Contact us</div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Get in touch
          </h1>
          <p className="text-sm text-slate-600">
            For enquiries, orders or partnerships, please reach out to us during
            working hours via email or phone. You are also most welcome to visit
            our head office or warehouse.
          </p>
        </header>
      </FadeIn>

      <section className="grid gap-10 md:grid-cols-[1.1fr,1fr]">
        <FadeIn>
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white p-7 shadow-soft">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Contact details
            </h2>
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <div className="font-semibold text-slate-800">Address</div>
                <p>
                  19 Al Ras Rd - Deira - Al Ras - Dubai - United Arab Emirates
                </p>
              </div>
              <div>
                <div className="font-semibold text-slate-800">
                  Contact details
                </div>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:rasti@rastilari.com"
                    className="text-brand hover:text-brand-dark"
                  >
                    rasti@rastilari.com
                  </a>
                  <br />
                  Phone:{" "}
                  <a
                    href="tel:+97142262500"
                    className="text-brand hover:text-brand-dark"
                  >
                    +971 4 2262500
                  </a>
                </p>
              </div>
              <div>
                <div className="font-semibold text-slate-800">
                  Working hours
                </div>
                <p className="text-sm text-slate-600">
                  Sunday – Thursday, 9:00 AM to 6:00 PM (UAE time).
                </p>
              </div>
            </div>

            <form className="space-y-3 text-sm">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Name
                  </span>
                  <input
                    type="text"
                    className="w-full rounded-full border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-brand"
                    placeholder="Your full name"
                  />
                </label>
                <label className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Email
                  </span>
                  <input
                    type="email"
                    className="w-full rounded-full border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-brand"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Phone
                </span>
                <input
                  type="tel"
                  className="w-full rounded-full border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-brand"
                  placeholder="+971 ..."
                />
              </label>
              <label className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Message
                </span>
                <textarea
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-brand"
                  rows={4}
                  placeholder="Write your message or enquiry here"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-brand px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white"
              >
                Send message (demo only)
              </button>
            </form>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Find us on the map
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-100 shadow-soft">
              <iframe
                title="Rasti Lari head office location"
                src="https://www.google.com/maps?q=19+Al+Ras+Rd,+Deira,+Dubai,+United+Arab+Emirates&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
