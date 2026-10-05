import { HeroReel } from "@/components/hero-reel";
import { Icon, Stars } from "@/components/icon";
import { arrowClass, buttonClass } from "@/components/ui";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="wrap hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow"><span /> A little care. A fresh start.</p>
          <h1>For the things<br />you love to <em>wear.</em></h1>
          <p className="hero-description">
            Beautifully fresh laundry. Favourite shoes, renewed.
            Expert care for your everyday essentials, collected
            from your door and delivered with a little extra love.
          </p>
          <div className="hero-actions">
            <a href="#book" className={buttonClass({ size: "lg" })}>
              Schedule a pickup <Icon name="arrow" className={arrowClass} />
            </a>
            <a href="#services" className="hero-services-link">Explore our services <Icon name="arrow" className="size-4" /></a>
          </div>
          <p className="hero-delivery-note"><Icon name="truck" className="size-4" /> Free pickup &amp; delivery on orders over {site.freeDeliveryMin}</p>
          <div className="hero-social-proof">
            <div className="hero-proof-icon"><Icon name="sparkles" className="size-6" /></div>
            <div><Stars /><p><strong>4.9/5</strong> from 2,300+ happy customers</p></div>
          </div>
        </div>
        <div className="hero-visual">
          <HeroReel />
          <div className="hero-care-seal" aria-label="Expert care, thoughtfully done"><Icon name="leaf" className="size-6" /><span>EXPERT CARE</span><small>thoughtfully done</small></div>
          <div className="hero-care-note"><span><Icon name="check" className="size-5" /></span><div><strong>Fresh. Folded. At your door.</strong><p>More time for the things you love.</p></div></div>
          <p className="hero-image-footnote">Your favourites are in good hands.</p>
        </div>
      </div>
    </section>
  );
}
