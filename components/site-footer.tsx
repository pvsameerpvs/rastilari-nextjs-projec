import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container grid gap-10 py-10 md:grid-cols-[2fr,1.5fr,1.5fr]">
        <div className="space-y-4">
          <div className="text-xs font-semibold tracking-[0.26em] uppercase text-slate-500">
            Rastilari
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            Established in the 1920s by our founders HAJI ZAINAL RASTI &amp;
            MOHAMED Baqer RASTI. They set up their business in Dubai. This
            organization has been in existence for more than 100 years.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Head Office
          </h3>
          <p className="max-w-xs text-slate-600">
            19 Al Ras Rd- Deira – Al Ras, Dubai – United Arab Emirates
          </p>
          <div className="space-y-1">
            <a
              href="mailto:rasti@rastilari.com"
              className="block text-slate-700 hover:text-brand"
            >
              rasti@rastilari.com
            </a>
            <a
              href="tel:+97142262500"
              className="block text-slate-700 hover:text-brand"
            >
              +971 4 2262500
            </a>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Warehouse Office
          </h3>
          <p className="max-w-xs text-slate-600">
            Warehouse number 28 – Al Quoz Industrial Area 4 – Dubai – United
            Arab Emirates
          </p>
          <div className="space-y-1">
            <a
              href="mailto:sales@rastilari.com"
              className="block text-slate-700 hover:text-brand"
            >
              sales@rastilari.com
            </a>
            <a
              href="tel:+97143479590"
              className="block text-slate-700 hover:text-brand"
            >
              +971 4 3479590
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50/60">
        <div className="container flex flex-col gap-4 py-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Rasti Lari Group. All rights reserved.</div>
          <nav className="flex flex-wrap gap-4">
            {NAV_LINKS.filter((link) =>
              ["/", "/products", "/about", "/contact", "/blog"].includes(link.href)
            ).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
