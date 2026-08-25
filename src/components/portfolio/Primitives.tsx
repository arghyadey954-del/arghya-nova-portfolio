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
  const magnetic = useMagnetic(0.3, 12);
  return (
    <a
      href={href}
      {...magnetic}
      className={cn(
        "shine magnetic group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium active:scale-[0.97]",
        variant === "primary"
          ? "glow-ring bg-primary text-primary-foreground hover:shadow-[0_0_0_1px_var(--glow),0_24px_70px_-18px_var(--glow)]"
          : "glass gradient-frame text-foreground hover:border-primary/40 hover:text-primary",
        className,
      )}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}
