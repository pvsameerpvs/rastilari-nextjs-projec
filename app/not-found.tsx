import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 py-24 text-center">
      <div className="section-title">Page not found</div>
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        We couldn&apos;t find that page.
      </h1>
      <p className="max-w-md text-sm text-slate-600">
        The link you followed may be broken or the page may have been moved.
        Use the navigation above or return to the home page.
      </p>
      <Button asChild className="rounded-full mt-2">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
