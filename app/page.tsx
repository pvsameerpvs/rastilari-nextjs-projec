// app/page.tsx
import { HomeFeaturedProducts } from "@/components/home/home-featured-products";
import { HomeFoodSection } from "@/components/home/home-food-section";
import { HomeGalleryTeaser } from "@/components/home/home-gallery-teaser";
import { HomeHero } from "@/components/home/home-hero";
import { products } from "@/data/products";

export default function HomePage() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      {/* 🔵 FULL-WIDTH HERO (NO CONTAINER WRAPPER) */}
      <HomeHero />

      {/* OTHER SECTIONS INSIDE CONTAINER */}
      <div className="container space-y-16">
        <HomeFeaturedProducts products={featured} />
        <HomeFoodSection />
        <HomeGalleryTeaser />
      </div>
    </>
  );
}
