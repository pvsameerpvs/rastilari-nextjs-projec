"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {NAV_LINKS.map((link) => {
        const isActive = link.match ? link.match.test(pathname) : false;

        const className = cn(
          "nav-link",
          isActive && "nav-link-active"
        );

        if (link.external) {
          return (
            <a
              key={link.href}
              href={link.href}
              className={className}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          );
        }

        return (
          <Link key={link.href} href={link.href} className={className}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
