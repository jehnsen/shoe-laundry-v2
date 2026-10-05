import { Icon } from "@/components/icon";
import { buttonClass, IconTile, SectionHead } from "@/components/ui";
import { plan, priceLists, site } from "@/lib/site";

export function Pricing() {
  return (
    <section id="pricing" className="section-y">
      <div className="wrap">
        <SectionHead eyebrow="Transparent pricing" title="Simple rates. No surprises.">
          Pickup and delivery are free on orders over {site.freeDeliveryMin}. Final pricing is confirmed after inspection —
          we&apos;ll always ask before doing extra work.
        </SectionHead>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-[1fr_1fr_0.92fr]">
          {priceLists.map((list) => (
            <div key={list.category} className="reveal rounded-3xl border border-line bg-white p-6 sm:p-7">
              <div className="flex items-center gap-3.5 border-b border-line pb-5">
                <IconTile tone={list.category === "shoes" ? "shoe" : "brand"}>
                  <Icon name={list.icon} className="size-6" />
                </IconTile>
                <div>
                  <h3 className="text-xl font-extrabold">{list.title}</h3>
                  <p className="text-sm text-muted">{list.subtitle}</p>
                </div>
              </div>
              <ul>
                {list.rows.map((row) => (
                  <li
                    key={row.item}
                    className="flex items-baseline justify-between gap-4 border-b border-dashed border-line py-[13px] text-[15px] last:border-b-0 last:pb-0"
                  >
                    <span className="font-medium text-body">
                      {row.item}
                      {row.note && <small className="block text-[12.5px] font-normal text-muted">{row.note}</small>}
                    </span>
                    <strong className="font-bold whitespace-nowrap text-ink tabular-nums">{row.price}</strong>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="reveal relative flex flex-col overflow-hidden rounded-3xl border border-ink bg-[linear-gradient(160deg,var(--color-ink-2)_0%,var(--color-ink)_70%)] p-6 text-haze-300 shadow-lift sm:p-7 md:col-span-2 xl:col-span-1">
            <span
              aria-hidden="true"
              className="absolute -top-[110px] -right-[90px] size-[260px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-shoe)_60%,transparent),transparent_70%)]"
            />
            <span className="relative mb-4 self-start rounded-full bg-brand-light/15 px-2.5 py-1 text-xs font-bold tracking-[0.04em] text-brand-light uppercase">
              Most popular
            </span>
            <h3 className="relative text-[22px] font-extrabold text-white">{plan.name}</h3>
            <p className="relative mt-2 text-[15px]">{plan.description}</p>
            <p className="relative my-[22px] flex items-baseline gap-1.5">
              <strong className="text-[52px] leading-none font-extrabold tracking-[-0.04em] text-white">{plan.price}</strong>
              <span>{plan.period}</span>
            </p>
            <ul className="relative mb-7 grid gap-3 md:grid-cols-2 xl:grid-cols-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[15px] text-haze-100">
                  <Icon name="check" className="mt-[3px] size-[18px] text-brand-light" strokeWidth={2.6} />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#book" className={buttonClass({ variant: "light", className: "relative mt-auto w-full" })}>
              Start your plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
