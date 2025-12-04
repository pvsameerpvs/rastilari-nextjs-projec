import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";



export const metadata: Metadata = {
  title: "Rasti Lari Group",
  description:
    "Rasti Lari is a multinational group based in Dubai with more than 100 years of experience in trade, foodstuff, confectionery and consumer products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
     className="flex min-h-screen flex-col"
      >
        <SiteHeader />
        <main className="flex-1 ">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
