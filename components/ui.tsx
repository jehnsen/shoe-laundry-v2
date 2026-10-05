import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "light";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex min-h-11 items-center justify-center gap-3 whitespace-nowrap rounded-full border font-semibold leading-tight transition duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-brand text-white hover:bg-brand-600 hover:shadow-brand",
  ghost: "border-line bg-transparent text-ink hover:border-ink hover:bg-brand-50",
  light: "border-transparent bg-white text-ink hover:bg-brand-50",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-[9px] text-sm",
  md: "px-5 py-3 text-[15px]",
  lg: "px-[26px] py-[15px] text-base",
};

export function buttonClass({
  variant = "primary",
  size = "md",
  className = "",
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

/** Trailing arrow that nudges right on button hover. */
export const arrowClass = "size-[18px] transition-transform duration-200 group-hover/btn:translate-x-0.5";

export function Eyebrow({ children, tone = "brand", className = "" }: { children: ReactNode; tone?: "brand" | "light"; className?: string }) {
  return (
    <p
      className={`mb-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase ${
        tone === "light" ? "text-brand-light" : "text-brand"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  children,
  align = "center",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={`reveal mb-9 max-w-[680px] md:mb-14 ${
        align === "center" ? "mx-auto text-center" : "mx-auto text-center lg:mx-0 lg:text-left"
      } ${className}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="section-title">{title}</h2>
      {children && <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.8] text-muted">{children}</p>}
    </div>
  );
}

/** Rounded tinted square holding an icon. */
export function IconTile({
  children,
  tone = "brand",
  className = "size-12 rounded-[14px]",
}: {
  children: ReactNode;
  tone?: "brand" | "shoe";
  className?: string;
}) {
  return (
    <span
      className={`grid shrink-0 place-items-center ${
        tone === "shoe" ? "bg-shoe-50 text-shoe" : "bg-brand-50 text-brand"
      } ${className}`}
    >
      {children}
    </span>
  );
}
