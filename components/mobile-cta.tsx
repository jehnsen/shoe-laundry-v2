"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";
import { buttonClass } from "@/components/ui";
import { site } from "@/lib/site";

/** Sticky bottom bar on small screens — hidden over the hero and the booking section. */
export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const book = document.getElementById("book");
    if (!hero || !book) return;

    let heroVisible = true;
    let bookVisible = false;
    const sync = () => setVisible(!heroVisible && !bookVisible);

    const heroIo = new IntersectionObserver(([e]) => {
      heroVisible = e.isIntersecting;
      sync();
    });
    const bookIo = new IntersectionObserver(
      ([e]) => {
        bookVisible = e.isIntersecting;
        sync();
      }
    );
    heroIo.observe(hero);
    bookIo.observe(book);
    return () => {
      heroIo.disconnect();
      bookIo.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-line bg-white/95 px-[clamp(16px,4vw,32px)] pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 ease-soft md:hidden ${
        visible ? "translate-y-0" : "translate-y-[110%]"
      }`}
      aria-hidden={!visible}
      inert={!visible}
    >
      <a href={site.phoneHref} aria-label="Call us" className={buttonClass({ variant: "ghost", className: "w-[50px] px-0!" })}>
        <Icon name="phone" className="size-[18px]" />
      </a>
      <a href="#book" className={buttonClass({ className: "flex-1 py-3.5!" })}>
        Schedule a pickup
      </a>
    </div>
  );
}
