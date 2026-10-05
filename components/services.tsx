"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Icon, type IconName } from "@/components/icon";
import { arrowClass, buttonClass, SectionHead } from "@/components/ui";
import { services, type Category } from "@/lib/site";

const tabs: { id: Category; label: string; icon: IconName; anchor: string }[] = [
  { id: "clothing", label: "Clothing care", icon: "shirt", anchor: "clothing-care" },
  { id: "shoes", label: "Shoe care", icon: "sneaker", anchor: "shoe-care" },
];

export function Services() {
  const [active, setActive] = useState<Category>("clothing");
  const tabRefs = useRef<Record<Category, HTMLButtonElement | null>>({ clothing: null, shoes: null });

  // Links like href="#shoe-care" (e.g. in the footer) switch to the matching tab.
  useEffect(() => {
    const onHash = () => {
      const match = tabs.find((t) => `#${t.anchor}` === window.location.hash);
      if (match) setActive(match.id);
    };
    const frame = window.requestAnimationFrame(onHash);
    window.addEventListener("hashchange", onHash);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const next = tabs[e.key === "Home" ? 0 : e.key === "End" ? tabs.length - 1 : (index + dir + tabs.length) % tabs.length];
    setActive(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <section id="services" className="section-y relative bg-linear-to-b from-white via-tint/70 to-white">
      {/* Deep-link targets for the footer */}
      {tabs.map((t) => (
        <span key={t.anchor} id={t.anchor} className="absolute top-0" aria-hidden="true" />
      ))}

      <div className="wrap">
        <SectionHead eyebrow="Our services" title="Two specialties. One standard of care." className="[&_h2]:text-balance">
          From your weekly laundry to your favourite sneakers, find the right treatment for the things you love.
          We&apos;ll take care of the details.
        </SectionHead>

        <div
          role="tablist"
          aria-label="Service categories"
          className="reveal relative mx-auto mb-10 grid w-full max-w-[420px] grid-cols-2 rounded-full border border-line bg-white p-1.5 shadow-soft"
        >
          <span
            aria-hidden="true"
            className={`absolute inset-y-1.5 left-1.5 w-[calc(50%-6px)] rounded-full transition-[transform,background-color] duration-300 ease-soft ${
              active === "shoes" ? "translate-x-full bg-shoe" : "bg-brand"
            }`}
          />
          {tabs.map((tab, i) => {
            const selected = active === tab.id;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[tab.id] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`relative z-[1] inline-flex items-center justify-center gap-2 rounded-full px-4 py-[11px] text-[15px] font-bold transition-colors ${
                  selected ? "text-white" : "text-muted hover:text-ink"
                }`}
              >
                <Icon name={tab.icon} className="size-[18px]" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            tabIndex={0}
            hidden={active !== tab.id}
            className={`animate-fade-up ${tab.id === "shoes" ? "[--service-accent:var(--color-shoe)] [--service-tint:var(--color-shoe-50)]" : "[--service-accent:var(--color-brand)] [--service-tint:var(--color-brand-50)]"}`}
          >
            <div className="mb-5 flex items-center justify-between gap-4 px-1">
              <p className="text-xs font-semibold tracking-[0.12em] whitespace-nowrap text-muted uppercase"><span className="hidden sm:inline">{tab.label} <span className="mx-2 text-line">/</span> </span>{String(services[tab.id].length).padStart(2, "0")} services</p>
              <a href="#pricing" className="group inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold whitespace-nowrap text-[var(--service-accent)]">
                Full price list <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {services[tab.id].map((s, index) => (
                <article
                  key={s.title}
                  className={`group relative isolate flex flex-col overflow-hidden rounded-3xl border p-6 transition-[transform,box-shadow,border-color] duration-300 ease-soft hover:-translate-y-1 hover:shadow-lift focus-within:shadow-lift motion-reduce:transform-none sm:p-7 ${
                    index === 0 ? "border-ink bg-ink shadow-card" : "border-line/80 bg-white hover:border-[var(--service-accent)]/40"
                  }`}
                >
                  {index === 0 && (
                    <div aria-hidden="true" className={`pointer-events-none absolute -top-20 -right-20 -z-10 size-64 rounded-full border-[35px] ${tab.id === "shoes" ? "border-shoe/15 bg-shoe/10" : "border-brand-light/10 bg-brand-light/5"}`} />
                  )}
                  <div className="flex items-center justify-between gap-3">
                    <span className={`grid size-14 shrink-0 place-items-center rounded-2xl ${index === 0 ? "bg-white/10 text-white ring-1 ring-white/15" : "bg-[var(--service-tint)] text-[var(--service-accent)]"}`}>
                      <Icon name={s.icon} className="size-7" strokeWidth={1.65} />
                    </span>
                    <span className={`text-right text-[10px] font-bold tracking-[0.1em] uppercase ${index === 0 ? (tab.id === "shoes" ? "text-shoe-100" : "text-brand-light") : "text-[var(--service-accent)]"}`}>{s.label}</span>
                  </div>
                  <h3 className={`mt-7 text-[22px] font-extrabold ${index === 0 ? "text-white" : "text-ink"}`}>{s.title}</h3>
                  <p className={`mt-3 mb-7 text-[15px] leading-relaxed ${index === 0 ? "text-haze-300" : "text-muted"}`}>{s.body}</p>
                  <div className={`mt-auto flex items-end justify-between gap-3 border-t pt-5 ${index === 0 ? "border-white/15" : "border-line/80"}`}>
                    <p>
                      <span className={`mb-1 block text-xs font-medium ${index === 0 ? "text-haze-300" : "text-muted"}`}>{s.price.label}</span>
                      <span className={`text-[26px] leading-tight font-extrabold tracking-tight ${index === 0 ? "text-white" : "text-ink"}`}>{s.price.amount}</span>
                      {s.price.unit && <span className={`ml-1.5 text-[13px] ${index === 0 ? "text-haze-300" : "text-muted"}`}>{s.price.unit}</span>}
                    </p>
                    <a
                      href="#book"
                      aria-label={`Book a pickup — ${s.title}`}
                      title="Book a pickup"
                      className={`grid size-11 shrink-0 place-items-center rounded-full border transition-colors focus-visible:outline-offset-4 ${index === 0 ? "border-white/25 text-white hover:bg-white hover:text-ink focus-visible:outline-white" : "border-line text-[var(--service-accent)] hover:border-[var(--service-accent)] hover:bg-[var(--service-tint)]"}`}
                    >
                      <Icon name="arrow" className="size-5 -rotate-45 transition-transform duration-200 group-hover:rotate-0 motion-reduce:transform-none" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl border border-line/80 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex items-center gap-4">
            <span className="hidden size-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand sm:grid"><Icon name="bubbles" className="size-6" /></span>
            <div>
              <p className="font-bold text-ink">A little care goes a long way.</p>
              <p className="mt-0.5 text-sm text-muted">Not sure where to start? Tell us about your items when you book.</p>
            </div>
          </div>
          <a href="#book" className={buttonClass({ className: "w-full shrink-0 sm:w-auto" })}>
            Book a pickup <Icon name="arrow" className={arrowClass} />
          </a>
        </div>
      </div>
    </section>
  );
}
