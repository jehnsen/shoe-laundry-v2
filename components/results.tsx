import { BeforeAfter } from "@/components/before-after";
import { Bubbles } from "@/components/bubbles";
import { Icon } from "@/components/icon";
import { Eyebrow } from "@/components/ui";
import { features } from "@/lib/site";

export function Results() {
  return (
    <section id="results" className="section-y relative overflow-hidden bg-ink text-haze-300">
      <Bubbles
        items={[
          { size: 180, top: "-60px", right: "-50px", tint: "light" },
          { size: 70, bottom: "12%", left: "3%", tint: "light" },
          { size: 110, bottom: "-50px", right: "30%", tint: "light", className: "hidden md:block" },
        ]}
      />
      <div className="wrap relative grid items-center gap-[clamp(40px,6vw,80px)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal text-center lg:text-left">
          <Eyebrow tone="light">The difference</Eyebrow>
          <h2 className="section-title text-white">Old favourites.<br /><em>A new lease on life.</em></h2>
          <p className="mt-3.5 text-[17px] text-haze-400">
            Drag the slider to see a typical deep clean and unyellowing treatment. Every pair is photographed on arrival
            and on completion, so you can see exactly what we did.
          </p>

          <ul className="mx-auto mt-9 grid max-w-[520px] gap-[22px] text-left lg:mx-0">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-light/12 text-brand-light">
                  <Icon name={f.icon} />
                </span>
                <div>
                  <h3 className="text-[17px] font-bold text-white">{f.title}</h3>
                  <p className="mt-1 text-[15px] text-haze-400">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <BeforeAfter />
      </div>
    </section>
  );
}
