import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/icon";
import { SectionHead } from "@/components/ui";
import { scents } from "@/lib/site";

const scentStyles: { color: string; background: string; icon: IconName }[] = [
  { color: "#8e9b7e", background: "#eef1e8", icon: "leaf" },
  { color: "#9790a5", background: "#f0edf3", icon: "flower" },
  { color: "#c69c5b", background: "#f6f0e3", icon: "sun" },
  { color: "#a6aa9a", background: "#f1f1eb", icon: "feather" },
];

export function Scents() {
  return (
    <section id="scents" className="section-y border-y border-line bg-white/50">
      <div className="wrap">
        <SectionHead eyebrow="The finishing touch" title="Freshness that feels like you.">
          Three signature scents and a fragrance-free option. A thoughtful little
          detail, included with every wash &amp; fold.
        </SectionHead>
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4 sm:gap-5">
          {scents.map((scent, index) => {
            const style = scentStyles[index];
            return (
              <li key={scent.id} className="scent-card reveal relative flex flex-col items-center rounded-xl px-3 pt-10 pb-7 text-center sm:px-6" style={{ "--scent-color": style.color, "--scent-bg": style.background } as CSSProperties}>
                {scent.badge && <span className="absolute top-3 text-[9px] font-semibold tracking-[0.12em] text-brand uppercase">The customer favourite</span>}
                <span aria-hidden="true" className="scent-bottle"><Icon name={style.icon} className="relative z-1 size-6" /></span>
                <h3 className="mt-7 font-display text-[23px] font-semibold sm:text-[27px]">{scent.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-[13px]">{scent.notes}</p>
              </li>
            );
          })}
        </ul>
        <p className="mx-auto mt-8 flex max-w-xl items-start justify-center gap-2.5 text-center text-xs text-muted sm:items-center sm:text-sm"><Icon name="leaf" className="size-4 shrink-0 text-brand" /><span>Thoughtfully formulated. Gentle on your clothes. A joy to come home to.</span></p>
      </div>
    </section>
  );
}
