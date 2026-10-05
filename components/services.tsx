"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Icon, type IconName } from "@/components/icon";
import { IconTile, SectionHead } from "@/components/ui";
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
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = tabs[(index + dir + tabs.length) % tabs.length];
    setActive(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <section id="services" className="section-y relative">
      {/* Deep-link targets for the footer */}
      {tabs.map((t) => (
        <span key={t.anchor} id={t.anchor} className="absolute top-0" aria-hidden="true" />
      ))}

      <div className="wrap">
        <SectionHead eyebrow="Our services" title="Two specialties. One standard of care.">
          Clothing and footwear need very different treatment. We run dedicated stations and trained technicians for each
          — so your silk blouse and your suede boots both get exactly what they need.
        </SectionHead>

        <div
          role="tablist"
          aria-label="Service categories"
          className="reveal relative mx-auto mb-10 grid w-full max-w-[420px] grid-cols-2 rounded-full border border-line bg-tint p-[5px]"
        >
          <span
            aria-hidden="true"
            className={`absolute inset-y-[5px] left-[5px] w-[calc(50%-5px)] rounded-full bg-white shadow-soft transition-transform duration-300 ease-soft ${
              active === "shoes" ? "translate-x-full" : ""
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
                  selected ? "text-ink" : "text-muted hover:text-ink"
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
            hidden={active !== tab.id}
            className="animate-fade-up"
          >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services[tab.id].map((s) => (
                <article
                  key={s.title}
                  className="flex flex-col rounded-2xl border border-line bg-white p-[22px] transition duration-300 ease-soft hover:-translate-y-1 hover:border-transparent hover:shadow-card sm:p-7"
                >
                  <IconTile tone={tab.id === "shoes" ? "shoe" : "brand"}>
                    <Icon name={s.icon} className="size-6" />
                  </IconTile>
                  <h3 className="mt-4 text-[19px] font-bold sm:mt-5">{s.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{s.body}</p>
                  <p className="mt-auto pt-[18px] text-sm font-bold text-ink">{s.meta}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
