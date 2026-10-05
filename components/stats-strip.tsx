import { CountUp } from "@/components/count-up";
import { stats } from "@/lib/site";

export function StatsStrip() {
  return (
    <section aria-label="Highlights" className="border-y border-line bg-white">
      <div className="wrap grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-4 py-7 text-center ${i % 2 === 1 ? "border-l border-line" : ""} ${
              i >= 2 ? "border-t border-line lg:border-t-0" : ""
            } ${i === 2 ? "lg:border-l" : ""}`}
          >
            <strong className="block text-[clamp(26px,3vw,34px)] font-extrabold tracking-[-0.03em] text-ink">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </strong>
            <span className="text-sm font-medium text-muted">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
