import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    slug: "celebrating-100-years-of-rasti-lari",
    title: "Celebrating 100+ years of Rasti Lari",
    excerpt:
      "From a small trading outfit in the 1920s to a diversified multinational group of companies in Dubai.",
    tag: "Milestones"
  },
  {
    slug: "expanding-distribution-across-the-region",
    title: "Expanding our distribution across the region",
    excerpt:
      "How Rasti Lari serves customers across the UAE, Asia and the wider Middle East with a strong logistics network.",
    tag: "Distribution"
  },
  {
    slug: "partnering-with-global-brands",
    title: "Partnering with global brands",
    excerpt:
      "Working with leading suppliers around the world to bring trusted food, confectionery and household products to market.",
    tag: "Partnerships"
  }
];

export default function BlogPage() {
  return (
    <div className="container space-y-8">
      <header className="max-w-2xl space-y-3">
        <div className="section-title">Blog</div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          News &amp; updates
        </h1>
        <p className="text-sm text-slate-600">
          Short editorial-style posts you can later connect to a CMS. For now
          these are static placeholders.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {posts.map((post, index) => (
          <FadeIn key={post.slug} delay={0.04 * index}>
            <article className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 text-sm shadow-soft">
              <Badge className="mb-2">{post.tag}</Badge>
              <h2 className="text-base font-semibold tracking-tight text-slate-900">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                {post.excerpt}
              </p>
              <Link
                href="#"
                className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand hover:text-brand-dark"
              >
                Read more (coming soon)
              </Link>
            </article>
          </FadeIn>
        ))}
      </section>
    </div>
  );
}
