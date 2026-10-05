import { BookingForm } from "@/components/booking-form";
import { Icon, type IconName } from "@/components/icon";
import { Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";
import type { ReactNode } from "react";

const contacts: { icon: IconName; title: string; body: ReactNode }[] = [
  {
    icon: "pin",
    title: "Visit the studio",
    body: site.address.map((line) => <span key={line} className="block">{line}</span>),
  },
  {
    icon: "phone",
    title: "Call or text",
    body: <a href={site.phoneHref} className="font-semibold text-brand">{site.phone}</a>,
  },
  {
    icon: "mail",
    title: "Email",
    body: <a href={`mailto:${site.email}`} className="font-semibold break-all text-brand">{site.email}</a>,
  },
  {
    icon: "clock",
    title: "Opening hours",
    body: site.hours.map((line) => <span key={line} className="block">{line}</span>),
  },
];

export function Booking() {
  return (
    <section id="book" className="section-y relative overflow-hidden bg-tint">
      <div className="wrap relative grid items-start gap-[clamp(40px,6vw,80px)] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal text-center lg:text-left">
          <Eyebrow>Book a pickup</Eyebrow>
          <h2 className="section-title">A lighter load.<br />A fresher day.</h2>
          <p className="mt-3.5 text-[17px] text-muted">
            Tell us what you need and pick a time. We&apos;ll confirm by text within 15 minutes during opening hours.
          </p>

          <ul className="mt-9 grid gap-[22px] text-left md:grid-cols-2 lg:grid-cols-1">
            {contacts.map((c) => (
              <li key={c.title} className="flex items-start gap-3.5 text-[15px] text-muted">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-white text-brand">
                  <Icon name={c.icon} />
                </span>
                <span>
                  <strong className="mb-0.5 block text-[15px] text-ink">{c.title}</strong>
                  {c.body}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <BookingForm />
      </div>
    </section>
  );
}
