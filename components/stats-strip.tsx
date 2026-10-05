import { CountUp } from "@/components/count-up";
import { stats } from "@/lib/site";

export function StatsStrip() {
  return (
    <section aria-label="Highlights" className="border-y border-line bg-[#eef0e7]">
      <div className="wrap grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-4 py-7 text-center ${i % 2 === 1 ? "border-l border-line" : ""} ${
              i >= 2 ? "border-t border-line lg:border-t-0" : ""
            } ${i === 2 ? "lg:border-l" : ""}`}
          >
            <strong className="block font-display text-[clamp(30px,3vw,40px)] font-medium tracking-[-0.03em] text-ink">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </strong>
            <span className="text-[11px] font-medium tracking-wide text-muted sm:text-xs">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
