"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav-links";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle navigation"
        onClick={() => setOpen((v) => !v)}
      >
        <Menu className="h-5 w-5" />
      </Button>
      {open && (
        <div className="absolute inset-x-0 top-16 z-30 border-b border-slate-100 bg-white/95 backdrop-blur">
          <nav className="container flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => {
              const isActive = link.match ? link.match.test(pathname) : false;

              const className = cn(
                "nav-link py-2",
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
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={className}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
