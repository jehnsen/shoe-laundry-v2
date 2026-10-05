import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

const sans = localFont({
  src: "./fonts/dm-sans-latin.woff2",
  variable: "--font-dm-sans",
  weight: "100 1000",
  display: "swap",
});

const editorial = localFont({
  src: [
    { path: "./fonts/cormorant-garamond-latin.woff2", weight: "400 600", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-italic.woff2", weight: "400 600", style: "italic" },
  ],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — Fresh-Scented Laundry & Shoe Care`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: "Fresh-scented laundry and like-new shoes. Free pickup and delivery, 48-hour turnaround.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#234d3c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" id="top" className={`${sans.variable} ${editorial.variable}`}>
      <body>{children}</body>
    </html>
  );
}
