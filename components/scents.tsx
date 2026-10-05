import { Bubbles } from "@/components/bubbles";
import { Icon } from "@/components/icon";
import { SectionHead } from "@/components/ui";
import { scents } from "@/lib/site";

export function Scents() {
  return (
    <section
      id="scents"
      className="section-y relative overflow-hidden bg-[linear-gradient(180deg,var(--color-shoe-50),#f7fbfe_60%,#fff)]"
    >
      <Bubbles
        items={[
          { size: 140, top: "-40px", left: "-50px", tint: "shoe" },
          { size: 56, top: "18%", right: "8%", className: "hidden md:block" },
          { size: 26, bottom: "16%", left: "6%", tint: "shoe" },
          { size: 80, bottom: "-24px", right: "-20px" },
        ]}
      />

      <div className="wrap relative">
        <SectionHead eyebrow="Signature scents" title="Pick a scent. We'll handle the rest.">
          Every wash &amp; fold order is finished in your choice of signature scent — hypoallergenic, long-lasting and
          gentle on sensitive skin. Prefer none? Go fragrance-free at no extra cost.
        </SectionHead>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {scents.map((scent) => (
            <li
              key={scent.id}
              className="reveal relative flex flex-col items-center rounded-3xl border border-line bg-white/80 px-6 pt-8 pb-7 text-center backdrop-blur-sm transition duration-300 ease-soft hover:-translate-y-1 hover:shadow-card"
            >
              {scent.badge && (
                <span className="absolute top-4 right-4 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-bold tracking-[0.04em] text-brand-600 uppercase">
                  {scent.badge}
                </span>
              )}
              <span
                aria-hidden="true"
                className="relative grid size-20 place-items-center rounded-full"
                style={{
                  background: `radial-gradient(circle at 32% 28%, rgb(255 255 255 / 0.95) 0 9%, rgb(255 255 255 / 0.3) 24%, transparent 50%), radial-gradient(circle, color-mix(in srgb, ${scent.color} 18%, white) 40%, color-mix(in srgb, ${scent.color} 55%, white) 100%)`,
                  boxShadow: `0 12px 28px -12px ${scent.color}`,
                }}
              >
                <span
                  className="absolute -right-1 bottom-1 size-5 rounded-full border border-white"
                  style={{ background: `color-mix(in srgb, ${scent.color} 35%, white)` }}
                />
              </span>
              <h3 className="mt-5 text-lg font-bold">{scent.name}</h3>
              <p className="mt-1.5 text-[15px] text-muted">{scent.notes}</p>
            </li>
          ))}
        </ul>

        <p className="reveal mx-auto mt-10 flex max-w-xl items-start justify-center gap-2.5 text-center text-[15px] text-muted sm:items-center">
          <Icon name="sneaker" className="mt-0.5 size-5 text-shoe sm:mt-0" />
          <span>
            Shoes are finished with our odour-neutralising <strong className="text-ink">Fresh Step</strong> mist.
          </span>
        </p>
      </div>
    </section>
  );
}
