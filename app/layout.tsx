import type { Metadata } from "next";
import { Outfit, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

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
        className={`flex min-h-screen flex-col ${outfit.variable} ${dmSerif.variable} font-sans`}
      >
        <SiteHeader />
        <main className="flex-1 ">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
