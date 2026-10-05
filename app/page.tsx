import { Booking } from "@/components/booking";
import { BusinessBand } from "@/components/business-band";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { MobileCta } from "@/components/mobile-cta";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { Results } from "@/components/results";
import { RevealObserver } from "@/components/reveal-observer";
import { Reviews } from "@/components/reviews";
import { Scents } from "@/components/scents";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StatsStrip } from "@/components/stats-strip";

export default function Home() {
  return (
    <>
      <span id="top-sentinel" className="absolute top-0 h-2 w-px" aria-hidden="true" />
      <a
        href="#main"
        className="fixed top-[-60px] left-4 z-[100] rounded-[10px] bg-ink px-4 py-2.5 text-white transition-[top] focus:top-3"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="pb-[76px] md:pb-0">
        <div id="hero">
          <Hero />
          <StatsStrip />
        </div>
        <Services />
        <Scents />
        <Process />
        <Pricing />
        <Results />
        <Reviews />
        <BusinessBand />
        <Faq />
        <Booking />
      </main>

      <SiteFooter />
      <MobileCta />
      <RevealObserver />
    </>
  );
}
