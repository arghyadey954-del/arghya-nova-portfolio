import type { ReactNode } from "react";
import { useMagnetic } from "@/hooks/use-scroll-fx";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span";
}) {
  return (
    <Tag
      className={cn("reveal", className)}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl md:mb-16">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
          <span className="size-1.5 animate-pulse-glow rounded-full bg-primary" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 text-3xl leading-[1.08] font-semibold text-balance sm:text-4xl md:text-5xl">
          <span className="text-gradient-flow">{title}</span>
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={140}>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-28",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function GlowButton({
  children,
  href,
  variant = "primary",
  className,
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const magnetic = useMagnetic(0.32, 14);
  return (
    <a
      href={href}
      {...magnetic}
      className={cn(
        "magnetic group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-display text-sm font-semibold tracking-tight",
        variant === "primary" ? "btn-ember btn-halo" : "btn-ghost-ember glass",
        className,
      )}
    >
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-500 group-hover:-translate-y-[1px]">
        {children}
      </span>
      <span className="pointer-events-none absolute inset-0 z-10 -translate-x-full skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,oklch(1_0_0/35%),transparent)] transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full" />
    </a>
  );
}
