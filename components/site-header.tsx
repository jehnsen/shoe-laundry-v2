"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { buttonClass } from "@/components/ui";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Header border/shadow once the page leaves the very top.
  useEffect(() => {
    const sentinel = document.getElementById("top-sentinel");
    if (!sentinel) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  // Highlight the nav link of the section in the middle of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((s): s is HTMLElement => s !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setCurrent(`#${entry.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Close the mobile menu on Escape, outside click, or when resizing to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!navRef.current?.contains(t) && !toggleRef.current?.contains(t)) setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    mq.addEventListener("change", onMq);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/95 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
        scrolled ? "border-line shadow-[0_4px_20px_-12px_rgb(15_27_52/0.2)]" : "border-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <Logo />

        <nav
          ref={navRef}
          id="site-nav"
          aria-label="Primary"
          className={`absolute inset-x-0 top-16 flex max-h-[calc(100dvh-64px)] flex-col gap-4 overflow-y-auto overscroll-contain border-b border-line bg-paper px-[clamp(20px,4vw,32px)] pt-4 pb-6 shadow-[0_24px_40px_-20px_rgb(35_61_49/0.15)] transition duration-200 ease-soft lg:static lg:max-h-none lg:flex-row lg:items-center lg:gap-5 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:visible lg:translate-y-0 lg:opacity-100 ${
            open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-0.5 lg:flex-row lg:gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  aria-current={current === link.href ? "location" : undefined}
                  className={`block rounded-lg px-3 py-3.5 text-[17px] font-medium transition-colors hover:bg-brand-50 hover:text-brand lg:px-2 lg:py-3 lg:text-[13px] ${
                    current === link.href ? "bg-brand-50 text-brand" : "text-body"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 border-t border-line pt-4 lg:flex-row lg:items-center lg:gap-4 lg:border-0 lg:pt-0">
            <a
              href={site.phoneHref}
              onClick={close}
              className="inline-flex items-center justify-center gap-1.5 p-2.5 text-base font-bold text-ink lg:hidden"
            >
              <Icon name="phone" className="size-4 text-brand" />
              {site.phone}
            </a>
            <a href="#book" onClick={close} className={buttonClass({ size: "sm", className: "max-lg:py-3.5 max-lg:text-base" })}>
              Book a pickup <Icon name="arrow" className="size-4" />
            </a>
          </div>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-controls="site-nav"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-grid size-11 place-items-center rounded-xl border border-line bg-white text-ink lg:hidden"
        >
          <Icon name={open ? "x" : "menu"} />
        </button>
      </div>
    </header>
  );
}
