import { Bubbles, type Bubble } from "@/components/bubbles";
import { Icon, Stars, type IconName } from "@/components/icon";
import { arrowClass, buttonClass, Eyebrow, IconTile } from "@/components/ui";
import { site } from "@/lib/site";

const orderItems: { icon: IconName; name: string; detail: string; tag: "Clothing" | "Shoes" }[] = [
  { icon: "shirt", name: "5 × Dress shirts", detail: "Wash & press", tag: "Clothing" },
  { icon: "hanger", name: "1 × Wool coat", detail: "Dry clean", tag: "Clothing" },
  { icon: "sneaker", name: "1 pair × White sneakers", detail: "Deep clean + unyellow", tag: "Shoes" },
];

const heroBubbles: Bubble[] = [
  { size: 120, top: "8%", right: "4%", className: "hidden lg:block" },
  { size: 64, top: "62%", right: "44%", tint: "shoe", className: "hidden lg:block" },
  { size: 36, top: "14%", left: "46%", className: "hidden lg:block" },
  { size: 22, top: "30%", right: "38%", tint: "shoe", className: "hidden lg:block" },
  { size: 90, bottom: "-30px", left: "-24px", tint: "shoe" },
  { size: 18, top: "6%", left: "8%", className: "hidden lg:block" },
  { size: 46, bottom: "18%", right: "2%" },
];

const trackerSteps = [
  { label: "Picked up", state: "done" },
  { label: "Cleaning", state: "active" },
  { label: "Quality check", state: "todo" },
  { label: "Delivered", state: "todo" },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(600px_400px_at_85%_20%,color-mix(in_srgb,var(--color-brand)_14%,transparent),transparent_70%),radial-gradient(520px_380px_at_65%_95%,color-mix(in_srgb,var(--color-shoe)_12%,transparent),transparent_70%),linear-gradient(180deg,#f7fbfe,#fff)] pt-[clamp(48px,7vw,96px)] pb-[clamp(56px,8vw,110px)]">
      <div className="hero-grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <Bubbles items={heroBubbles} />

      <div className="wrap relative grid items-center gap-[clamp(40px,6vw,80px)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal text-center lg:text-left">
          <Eyebrow>
            <Icon name="bubbles" className="size-4" />
            {site.tagline}
          </Eyebrow>
          <h1 className="text-[clamp(34px,5.6vw,62px)] leading-[1.05] font-extrabold tracking-[-0.035em]">
            Fresh scents. Spotless shoes.{" "}
            <span className="block bg-linear-to-r from-brand to-shoe bg-clip-text pb-1 text-transparent">One trusted team.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[540px] text-[clamp(17px,1.6vw,19px)] text-muted lg:mx-0">
            Everyday wash &amp; fold finished in your choice of signature scent, expert dry cleaning and full sneaker
            restoration — picked up from your door and returned in as little as 48&nbsp;hours.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#book" className={buttonClass({ size: "lg" })}>
              Schedule free pickup
              <Icon name="arrow" className={arrowClass} />
            </a>
            <a href="#pricing" className={buttonClass({ variant: "ghost", size: "lg" })}>
              View pricing
            </a>
          </div>
          <ul className="mt-7 flex flex-col items-center gap-x-5 gap-y-2.5 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            {["Free pickup & delivery", "4 signature scents", "Every item insured"].map((point) => (
              <li key={point} className="inline-flex items-center gap-2 text-sm font-semibold text-ink-2">
                <Icon name="check" className="size-[18px] rounded-full bg-brand-50 p-[3px] text-brand" strokeWidth={3} />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative mx-auto w-full max-w-[520px] px-0 pt-16 pb-14 sm:px-3 lg:max-w-none" aria-hidden="true">
          <OrderCard />

          <div className="absolute top-0 right-1 z-[2] animate-float rounded-[14px] border border-line bg-white px-4 py-3 text-[13px] text-muted shadow-card sm:right-0">
            <Stars className="mb-1" />
            <p>
              <strong className="text-ink">4.9</strong> from 2,300+ reviews
            </p>
          </div>

          <div className="absolute bottom-1 left-1 z-[2] flex animate-float items-center gap-2.5 rounded-[14px] border border-line bg-white px-4 py-3 text-[13px] leading-snug text-muted shadow-card [animation-delay:-3s] sm:left-0">
            <span className="grid size-9 place-items-center rounded-[10px] bg-shoe-50 text-shoe">
              <Icon name="flower" />
            </span>
            <p>
              <strong className="text-ink">Hypoallergenic</strong>
              <br />
              signature scents
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderCard() {
  return (
    <div className="relative z-[1] mx-auto max-w-[440px] rounded-3xl border border-line bg-white p-[18px] shadow-lift sm:p-6">
      <div className="flex items-start justify-between border-b border-line pb-[18px]">
        <div>
          <p className="text-xs font-semibold tracking-[0.06em] text-muted uppercase">Order</p>
          <p className="text-xl font-extrabold tracking-tight text-ink">#SB-2048</p>
          <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-shoe">
            <Icon name="flower" className="size-3.5" />
            Scent: Lavender Calm
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-[13px] font-bold text-brand-600">
          <span className="relative size-2 rounded-full bg-brand">
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand" />
          </span>
          In cleaning
        </span>
      </div>

      <ul className="grid gap-3 py-[18px]">
        {orderItems.map((item) => {
          const shoe = item.tag === "Shoes";
          return (
            <li key={item.name} className="flex items-center gap-3">
              <IconTile tone={shoe ? "shoe" : "brand"} className="size-10 rounded-xl">
                <Icon name={item.icon} />
              </IconTile>
              <span className="flex-1 text-sm leading-tight font-bold text-ink">
                {item.name}
                <small className="block text-[13px] font-medium text-muted">{item.detail}</small>
              </span>
              <span
                className={`hidden rounded-md px-2 py-1 text-[11px] font-bold sm:inline ${
                  shoe ? "bg-shoe-50 text-shoe" : "bg-tint text-muted"
                }`}
              >
                {item.tag}
              </span>
            </li>
          );
        })}
      </ul>

      <ol className="grid grid-cols-4 gap-1.5 border-t border-line pt-4 pb-[18px]">
        {trackerSteps.map((step) => (
          <li
            key={step.label}
            className={`flex flex-col gap-2 text-[10.5px] font-semibold sm:text-[11.5px] ${
              step.state === "todo" ? "text-muted" : "text-ink"
            }`}
          >
            <span className={`relative h-1.5 overflow-hidden rounded-full ${step.state === "done" ? "bg-brand" : "bg-line"}`}>
              {step.state === "active" && <span className="absolute inset-y-0 left-0 animate-progress rounded-full bg-brand" />}
            </span>
            {step.label}
          </li>
        ))}
      </ol>

      <div className="flex items-center gap-2.5 rounded-xl bg-tint px-3.5 py-3 text-sm text-muted">
        <Icon name="truck" className="size-5 text-brand" />
        <span>
          Delivery <strong className="text-ink">tomorrow, 4–6 PM</strong>
        </span>
      </div>
    </div>
  );
}
