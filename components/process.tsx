import { Icon } from "@/components/icon";
import { SectionHead } from "@/components/ui";
import { steps } from "@/lib/site";

export function Process() {
  return (
    <section id="process" className="section-y bg-tint">
      <div className="wrap">
        <SectionHead eyebrow="How it works" title="Fresh results in four simple steps">
          No trips, no queues. Book online in under a minute and we&apos;ll take care of the rest.
        </SectionHead>

        <ol className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="reveal relative rounded-2xl border border-line bg-white px-6 py-7">
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-[53px] -right-[21px] hidden h-0.5 w-[22px] bg-[repeating-linear-gradient(90deg,var(--color-brand-100)_0_4px,transparent_4px_8px)] xl:block"
                />
              )}
              <span className="absolute top-[22px] right-6 text-[28px] leading-none font-extrabold text-brand-100">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="grid size-[52px] place-items-center rounded-full bg-brand text-white ring-[6px] ring-brand-50">
                <Icon name={step.icon} />
              </span>
              <h3 className="mt-[22px] text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-[15px] text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
