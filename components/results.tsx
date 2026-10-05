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
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold text-white">Restored, not just rinsed.</h2>
          <p className="mt-3.5 text-[17px] text-haze-400">
            Drag the slider to explore worn and fresh white sneaker examples. Our deep cleaning and sole care
            target built-up dirt, scuffs and discolouration to help your favourites look their best.
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
