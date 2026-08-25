import {
  ArrowUpRight,
  Brain,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Trophy,
} from "lucide-react";
import {
  ACHIEVEMENTS,
  EDUCATION,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
} from "@/lib/portfolio-data";
import { useTilt } from "@/hooks/use-scroll-fx";
import { cn } from "@/lib/utils";
import { GlowButton, Reveal, Section, SectionHeading } from "./Primitives";

/* ---------------------------------- About --------------------------------- */

const HIGHLIGHTS = [
  {
    Icon: Brain,
    title: "Machine Learning",
    text: "Training, evaluating and explaining models that actually hold up outside a notebook.",
  },
  {
    Icon: Database,
    title: "Data Engineering",
    text: "Cleaning messy datasets, shaping pipelines and making numbers tell a clear story.",
  },
  {
    Icon: Code2,
    title: "Product Craft",
    text: "Shipping fast, accessible interfaces so insights reach the people who need them.",
  },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Turning raw data into decisions worth making"
        subtitle="I'm an undergraduate engineer fascinated by the space between statistics and software — where a well-chosen model and a well-designed interface change how people understand a problem."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="glass relative overflow-hidden rounded-3xl p-7">
          <div className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-primary/15 blur-3xl" />
          <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">Profile</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Currently pursuing B.Tech in Computer Science &amp; Engineering with a Data Science
            specialisation at {PROFILE.university}. My days move between coursework, Kaggle-style
            experiments and building small tools that solve real campus problems.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            I care about clarity: readable code, honest metrics and interfaces that don't make
            people think twice.
          </p>
          <div className="hairline my-6" />
          <dl className="grid gap-3 text-sm">
            {[
              ["Focus", "Data Science & ML"],
              ["University", PROFILE.university],
              ["Batch", PROFILE.batch],
              ["Location", PROFILE.location],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4">
                <dt className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                  {k}
                </dt>
                <dd className="text-right text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="grid gap-4">
          {HIGHLIGHTS.map(({ Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 110}
              className="glass group flex gap-4 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_70px_-40px_var(--glow)]"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------- Skills --------------------------------- */

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="The stack I think in"
        subtitle="A toolkit built around Python for analysis, modern JavaScript for delivery, and everything in between."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {SKILL_GROUPS.map((group, gi) => (
          <Reveal
            key={group.title}
            delay={gi * 120}
            className="glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/35"
          >
            <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-primary/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
            <h3 className="font-display text-lg font-semibold">{group.title}</h3>
            <ul className="mt-6 space-y-5">
              {group.items.map((s) => (
                <li key={s.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-foreground/90">{s.name}</span>
                    <span className="font-mono text-[11px] text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8">
                    <span
                      className="block h-full origin-left rounded-full bg-[var(--gradient-text)] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-[.is-visible]:scale-x-100"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------- Projects -------------------------------- */

function ProjectCard({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const tilt = useTilt(7);
  return (
    <Reveal delay={i * 90}>
      <article
        {...tilt}
        className={cn(
          "tilt-card glass group relative h-full overflow-hidden rounded-3xl p-6 hover:shadow-[0_30px_90px_-45px_var(--glow)]",
          p.accent === "violet" && "hover:shadow-[0_30px_90px_-45px_var(--neon)]",
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(320px circle at var(--mx,50%) var(--my,50%), oklch(1 0 0 / 8%), transparent 70%)",
          }}
        />
        <div className="flex items-start justify-between gap-4">
          <span
            className={cn(
              "grid size-11 place-items-center rounded-2xl border font-mono text-xs",
              p.accent === "cyan"
                ? "border-primary/30 bg-primary/10 text-primary"
                : "border-accent/30 bg-accent/10 text-accent",
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
          {p.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-foreground/80 transition-colors duration-300 hover:border-primary/40 hover:text-primary"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-2">
          <a
            href={p.demo}
            className="shine inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary/90 px-4 py-2.5 text-xs font-medium text-primary-foreground transition-all duration-400 hover:-translate-y-0.5 hover:bg-primary"
          >
            <ExternalLink className="size-3.5" /> Live Demo
          </a>
          <a
            href={p.code}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/12 px-4 py-2.5 text-xs font-medium text-foreground/85 transition-all duration-400 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
          >
            <Github className="size-3.5" /> Code
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've designed, trained and shipped"
        subtitle="Selected work spanning machine learning, analytics dashboards and full-stack utilities."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------- Education ------------------------------- */

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Education"
        title="The academic timeline"
        subtitle="Foundations in science and mathematics, now sharpened into computer science and data."
      />
      <ol className="relative ml-3 space-y-6 border-l border-white/10 pl-7 sm:ml-5 sm:pl-10">
        {EDUCATION.map((e, i) => (
          <Reveal as="li" key={e.title} delay={i * 110} className="relative">
            <span
              className={cn(
                "absolute top-7 -left-[38px] grid size-5 place-items-center rounded-full border sm:-left-[50px]",
                e.current
                  ? "animate-pulse-glow border-primary/50 bg-primary/25"
                  : "border-white/15 bg-card",
              )}
            >
              <span className="size-1.5 rounded-full bg-primary" />
            </span>
            <div className="glass rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/35">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
                  {e.period}
                </span>
                {e.current && (
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-primary uppercase">
                    Ongoing
                  </span>
                )}
              </div>
              <h3 className="mt-3 flex items-start gap-2 font-display text-lg font-semibold">
                <GraduationCap className="mt-0.5 size-5 shrink-0 text-primary" />
                {e.title}
              </h3>
              <p className="mt-1 text-sm text-foreground/85">{e.org}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

/* ------------------------------ Achievements ------------------------------ */

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading
        eyebrow="Achievements"
        title="Milestones along the way"
        subtitle="Certifications, contributions and moments that pushed the learning curve forward."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal
            key={a.title}
            delay={i * 100}
            className="glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-[0_28px_80px_-45px_var(--neon)]"
          >
            <div className="pointer-events-none absolute -right-16 -bottom-16 size-48 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
            <div className="flex items-center justify-between gap-3">
              <span className="grid size-11 place-items-center rounded-2xl border border-accent/25 bg-accent/10 text-accent transition-transform duration-500 group-hover:-rotate-12">
                <Trophy className="size-5" />
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                {a.badge}
              </span>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------- Contact -------------------------------- */

export function Contact() {
  return (
    <Section id="contact" className="pb-10">
      <Reveal className="glass relative overflow-hidden rounded-[2rem] p-8 text-center sm:p-14">
        <div className="pointer-events-none absolute -top-32 left-1/2 size-[420px] -translate-x-1/2 rounded-full bg-primary/15 blur-[110px]" />
        <span className="glass relative inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
          <Sparkles className="size-3.5" /> Contact
        </span>
        <h2 className="relative mt-6 font-display text-3xl leading-tight font-bold text-balance sm:text-5xl">
          <span className="text-gradient">Let's build something intelligent</span>
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Open to internships, research collaborations and data-driven side projects. The fastest
          way to reach me is email.
        </p>

        <div className="relative mt-9 flex flex-wrap justify-center gap-3">
          <GlowButton href={`mailto:${PROFILE.email}`}>
            <Mail className="size-4" /> {PROFILE.email}
          </GlowButton>
          <GlowButton href={PROFILE.github} variant="ghost">
            <Github className="size-4" /> GitHub
          </GlowButton>
          <GlowButton href={PROFILE.linkedin} variant="ghost">
            <Linkedin className="size-4" /> LinkedIn
          </GlowButton>
        </div>

        <p className="relative mt-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
          <MapPin className="size-3.5" /> {PROFILE.location}
        </p>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
      <div className="hairline mb-6" />
      <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
          {PROFILE.university} · {PROFILE.batch}
        </p>
      </div>
    </footer>
  );
}
