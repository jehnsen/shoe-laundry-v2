import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { footerLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink pt-[72px] text-haze-500">
      <div className="wrap grid grid-cols-2 gap-10 pb-12 md:grid-cols-3 lg:grid-cols-[1.6fr_repeat(3,1fr)]">
        <div className="col-span-full lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-4 max-w-[320px] text-[15px]">
            Fresh-scented laundry, dry cleaning and professional shoe care — picked up from your door and returned like new.
          </p>
          <div className="mt-[22px] flex gap-2.5">
            {(
              [
                ["instagram", "Instagram", site.social.instagram],
                ["facebook", "Facebook", site.social.facebook],
              ] as const
            ).map(([icon, label, href]) => (
              <a
                key={icon}
                href={href}
                aria-label={label}
                className="grid size-10 place-items-center rounded-[10px] border border-white/12 text-haze-300 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                <Icon name={icon} className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {footerLinks.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-sm font-bold tracking-[0.02em] text-white">{col.title}</h3>
            <ul className="grid gap-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[15px] transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="wrap">
        <div className="flex flex-col items-center gap-3 border-t border-white/8 py-6 text-center text-sm sm:flex-row sm:justify-between sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName.replace(/\.$/, "")}. All rights reserved.
          </p>
          <p className="flex gap-5">
            {["Privacy", "Terms", "Care guarantee"].map((l) => (
              <a key={l} href="#" className="hover:text-white">
                {l}
              </a>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
