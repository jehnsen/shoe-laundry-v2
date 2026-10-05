import { SectionHead } from "@/components/ui";
import { faqs, site } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="section-y">
      <div className="wrap grid items-start gap-[clamp(32px,6vw,80px)] lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHead eyebrow="FAQ" title="Questions, answered" align="left" className="lg:sticky lg:top-[104px] lg:mb-0">
          Can&apos;t find what you&apos;re looking for? Call us at{" "}
          <a href={site.phoneHref} className="font-semibold text-brand">
            {site.phone}
          </a>{" "}
          or send a message below.
        </SectionHead>

        <div className="reveal grid gap-3">
          {faqs.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className="group rounded-2xl border border-line bg-white transition-[border-color,box-shadow] open:border-brand-100 open:shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-[22px] py-5 text-base font-bold text-ink">
                {item.q}
                <span
                  aria-hidden="true"
                  className="relative size-7 shrink-0 rounded-full bg-brand-50 transition-transform duration-300 ease-soft group-open:rotate-[135deg] before:absolute before:top-1/2 before:left-1/2 before:h-0.5 before:w-3 before:-translate-1/2 before:bg-brand after:absolute after:top-1/2 after:left-1/2 after:h-3 after:w-0.5 after:-translate-1/2 after:bg-brand"
                />
              </summary>
              <p className="px-[22px] pb-[22px] text-[15.5px] text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
