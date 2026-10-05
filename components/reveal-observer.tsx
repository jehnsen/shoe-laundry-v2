"use client";

import { useEffect } from "react";

/**
 * Fades in every `.reveal` element as it scrolls into view by setting `data-visible`.
 * Siblings that enter together are staggered. Styles live in globals.css.
 */
export function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal")) : [];
          el.style.transitionDelay = `${Math.min(Math.max(siblings.indexOf(el), 0), 5) * 80}ms`;
          el.dataset.visible = "";
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
