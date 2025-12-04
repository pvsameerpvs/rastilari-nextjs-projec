import Link from "next/link";
import Image from "next/image";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
  src="/logo.png"
  alt="Rasti Lari logo"
  width={80}
  height={50}
  priority
  className=" "
/>

          {/* <div className="leading-tight">
            <div className="text-sm font-semibold tracking-[0.35em] uppercase text-slate-900">
              RASTI LARI
            </div>
          </div> */}
        </Link>
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
