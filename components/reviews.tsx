import { Stars } from "@/components/icon";
import { SectionHead } from "@/components/ui";
import { reviews } from "@/lib/site";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .replace(/[^A-Z]/gi, "")
    .slice(0, 2)
    .toUpperCase();

export function Reviews() {
  return (
    <section id="reviews" className="section-y">
      <div className="wrap">
        <SectionHead eyebrow="Kind words, fresh starts" title="A little love from our customers." />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="reveal flex flex-col gap-[18px] rounded-xl border border-line bg-white/60 p-7">
              <Stars />
              <blockquote className="font-display text-[25px] leading-[1.4] text-ink-2">“{r.quote}”</blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-line pt-[18px]">
                <span
                  className="grid size-[42px] shrink-0 place-items-center rounded-full text-sm font-extrabold"
                  style={{ background: `hsl(${r.hue} 55% 92%)`, color: `hsl(${r.hue} 55% 30%)` }}
                >
                  {initials(r.name)}
                </span>
                <span>
                  <strong className="block text-[15px] text-ink">{r.name}</strong>
                  <small className="text-[13px] text-muted">{r.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
