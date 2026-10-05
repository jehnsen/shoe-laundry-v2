import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
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
  themeColor: "#0f1b34",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" id="top" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
