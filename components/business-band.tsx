import { Bubbles } from "@/components/bubbles";
import { Icon } from "@/components/icon";
import { buttonClass } from "@/components/ui";

export function BusinessBand() {
  return (
    <section className="wrap">
      <div className="reveal relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-brand-100 bg-[linear-gradient(120deg,var(--color-brand-50),var(--color-shoe-50))] px-[clamp(24px,4vw,40px)] py-8 text-center md:flex-row md:text-left">
        <Bubbles
          items={[
            { size: 96, top: "-48px", right: "-28px", tint: "shoe" },
            { size: 60, bottom: "-34px", left: "-18px" },
            { size: 16, bottom: "12px", right: "6px", className: "hidden md:block" },
          ]}
        />
        <span className="relative grid size-14 shrink-0 place-items-center rounded-2xl bg-white text-brand shadow-soft">
          <Icon name="building" className="size-[26px]" />
        </span>
        <div className="relative flex-1">
          <h2 className="text-[clamp(20px,2.4vw,24px)] font-extrabold">Fresh-scented linens for hotels, gyms &amp; spas</h2>
          <p className="mt-1 text-muted">
            Scheduled commercial pickups, volume pricing and monthly invoicing for businesses of any size.
          </p>
        </div>
        <a href="#book" className={buttonClass({ className: "relative w-full md:w-auto" })}>
          Request a quote
        </a>
      </div>
    </section>
  );
}
