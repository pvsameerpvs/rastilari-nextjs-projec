// app/page.tsx
import AboutRastiLariSection from "@/components/home/AboutRastiLariSection";
import { HomeFeaturedProducts } from "@/components/home/home-featured-products";
import { HomeFoodSection } from "@/components/home/home-food-section";
import { HomeGalleryTeaser } from "@/components/home/home-gallery-teaser";
import { HomeHero } from "@/components/home/home-hero";
import WelcomeContent from "@/components/home/WelcomeContent";
import { products } from "@/data/products";

export default function HomePage() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      {/* 🔵 FULL-WIDTH HERO (NO CONTAINER WRAPPER) */}
      <HomeHero />

      {/* OTHER SECTIONS INSIDE CONTAINER */}
      <div className="container space-y-16">
        <WelcomeContent/>
        <AboutRastiLariSection/>
        <HomeFeaturedProducts products={featured} />
        <HomeFoodSection />
        <HomeGalleryTeaser />
      </div>
    </>
  );
}
