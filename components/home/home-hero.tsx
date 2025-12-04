// components/home/home-hero.tsx
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "var(--accent)" }}
    >
      {/* CONTENT WRAPPER */}
      <div className="container relative z-20 py-10">
        <div className="grid min-h-[380px] gap-8 md:min-h-[480px] lg:min-h-[540px] grid-rows-[auto,1fr,auto]">
          {/* ROW 1: TITLE BLOCK */}
          <FadeIn>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="section-title !text-white/80 drop-shadow-sm">
                Welcome to
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">
                Rasti Lari Group of Companies
              </h1>

              <p className="max-w-xl text-sm sm:text-base text-white/80">
                A multi-national group with a legacy in trading, imports,
                exports, wholesale and distribution from Dubai to markets across
                the Middle East and Asia.
              </p>
            </div>
          </FadeIn>

          {/* ROW 2: SPLASH + BOTTLE */}
          <div className="flex items-center justify-center">
            <div className="relative flex w-full items-center justify-center">
              {/* Splash behind bottle */}
              <svg
                viewBox="0 0 900 900"
                className="
                  absolute -z-10
                  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                  h-[210px] w-[210px]
                  sm:h-[250px] sm:w-[250px]
                  md:h-[290px] md:w-[290px]
                  lg:h-[330px] lg:w-[330px]
                "
              >
                <defs>
                  <radialGradient id="juiceSplash" cx="35%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#F3E7A8" />
                    <stop offset="45%" stopColor="#E8D480" />
                    <stop offset="100%" stopColor="#DAB950" />
                  </radialGradient>
                </defs>

                <g fill="url(#juiceSplash)">
                  <path d="M450 60 C585 75 740 155 810 285 C880 420 835 610 705 705 C565 805 325 820 200 690 C80 565 85 350 215 220 C300 135 365 70 450 60 Z" />
                  <path d="M170 420 C120 390 120 330 165 305 C215 277 265 305 268 350 C270 395 220 435 170 420 Z" />
                  <path d="M760 430 C720 405 722 345 765 325 C815 302 855 335 848 380 C840 420 800 448 760 430 Z" />
                  <path d="M520 140 C505 95 540 60 585 70 C640 82 650 132 615 160 C585 182 535 170 520 140 Z" />

                  <path d="M270 650 C255 715 290 770 335 760 C378 750 385 695 360 660 C338 628 295 630 270 650 Z" />
                  <path d="M420 705 C405 785 450 835 505 820 C555 806 565 740 535 705 C505 668 455 675 420 705 Z" />
                  <path d="M600 655 C590 730 635 770 685 748 C730 728 725 675 695 650 C664 623 620 630 600 655 Z" />

                  <circle cx="205" cy="320" r="18" />
                  <circle cx="700" cy="300" r="14" />
                  <circle cx="740" cy="470" r="11" />
                  <circle cx="255" cy="485" r="12" />
                  <circle cx="320" cy="250" r="10" />
                  <circle cx="610" cy="250" r="9" />
                  <circle cx="790" cy="360" r="9" />
                  <circle cx="135" cy="520" r="10" />
                  <circle cx="470" cy="245" r="8" />
                  <circle cx="520" cy="255" r="6" />
                </g>
              </svg>

              {/* Bottle */}
              <div
                className="
                  relative
                  -translate-y-3 sm:-translate-y-4 md:-translate-y-5
                  h-[220px] w-[150px]
                  sm:h-[260px] sm:w-[170px]
                  md:h-[300px] md:w-[200px]
                  lg:h-[340px] lg:w-[220px]
                  drop-shadow-[0_22px_22px_rgba(0,0,0,0.30)]
                "
              >
                <Image
                  src="/hero-bottle.png"
                  alt="Featured bottle"
                  fill
                  priority
                  className="object-contain pointer-events-none -rotate-12"
                />
              </div>
            </div>
          </div>

          {/* ROW 3: BUTTONS */}
          <div className="flex items-center justify-end gap-3 pb-2 md:pb-4">
            <Button asChild size="sm" className="text-xs sm:text-sm px-4 py-2">
              <Link href="/products">Explore products</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="text-xs sm:text-sm px-4 py-2"
            >
              <Link href="/about">About Rasti Lari</Link>
            </Button>
          </div>
        </div>
      </div>

{/* Top-left image (hero-food-1.png) */}
<div className="pointer-events-none absolute left-32 top-24 z-0 h-[120px] w-[120px]">
  <Image
    src="/hero-food-1.png"
    alt="Food decoration"
    width={120}
    height={120}
    priority
    className="h-full w-full object-contain sticker-img"
  />
</div>
{/* Right-center image (hero-food-2.png) */}

<div className="pointer-events-none absolute right-24 top-1/2 z-0 -translate-y-1/2 translate-y-16 h-[120px] w-[120px]">
  <Image
    src="/hero-food-2.png"
    alt="Food decoration"
    width={120}
    height={120}
    priority
    className="h-full w-full object-contain sticker-img"
  />
</div>

      {/* Bottom-left image (gil-drinkjuice.png) */}
<div className="pointer-events-none absolute bottom-0 left-0 z-0 w-40 sm:w-52 md:w-64 lg:w-72">
  <Image
    src="/gil-drinkjuice.png"
    alt="Drink juice decoration"
    width={520}
    height={520}
    priority
    className="h-auto w-full object-contain sticker-img"
  />

      {/* Top-right image (caramal-drop.png) */}

</div>
<div className="pointer-events-none absolute right-2 top-4 z-0 h-[200px] w-[200px]">
  <Image
    src="/caramal-drop.png"
    alt="Caramel drop decoration"
    width={200}
    height={200}
    priority
    className="h-full w-full object-contain sticker-img"
  />
</div>




      {/* WAVE BOTTOM */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-[0]">
        <svg
          className="block h-16 w-full md:h-24"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="var(--background)"
            d="
              M0,240
              C350,60 650,360 1000,120
              C1250,-20 1440,180 1440,180
              L1440,320 L0,320 Z
            "
          />
        </svg>
      </div>
    </section>
  );
}
