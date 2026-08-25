import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { PROFILE, STATS, MARQUEE } from "@/lib/portfolio-data";
import { useScrollY } from "@/hooks/use-scroll-fx";
import { GlowButton, Reveal } from "./Primitives";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const done = !del && text === word;
    const empty = del && text === "";
    const timeout = window.setTimeout(
      () => {
        if (done) return setDel(true);
        if (empty) {
          setDel(false);
          setI((v) => v + 1);
          return;
        }
        setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      },
      done ? 1600 : del ? 40 : 80,
    );
    return () => window.clearTimeout(timeout);
  }, [text, del, i, words]);

  return text;
}

export function Hero() {
  const y = useScrollY();
  const typed = useTypewriter(PROFILE.taglines);

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden pt-28 pb-16">
      {/* parallax background layers */}
      <div
        className="aurora pointer-events-none absolute inset-0 -z-20"
        style={{ transform: `translate3d(0, ${y * 0.25}px, 0)` }}
      />
      <div
        className="grid-bg pointer-events-none absolute inset-0 -z-20"
        style={{ transform: `translate3d(0, ${y * 0.12}px, 0)` }}
      />
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -z-10 size-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        style={{ transform: `translate3d(-50%, ${y * -0.18}px, 0)` }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
              <Sparkles className="size-3.5" />
              Available for internships
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,8vw,5.2rem)] leading-[0.95] font-bold text-balance">
              <span className="block text-foreground/90">Arghya Kamal</span>
              <span className="text-gradient block">Dey</span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-6 font-mono text-base text-primary sm:text-lg">
              {typed}
              <span className="animate-caret ml-0.5 inline-block">_</span>
            </p>
          </Reveal>

          <Reveal delay={230}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {PROFILE.role} at{" "}
              <span className="text-foreground">{PROFILE.university}</span> · {PROFILE.batch}.
              I build data-driven products where analytics, machine learning and thoughtful
              interfaces meet.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <GlowButton href="#projects">
                View Projects
                <ArrowDown className="size-4 transition-transform duration-500 group-hover:translate-y-0.5" />
              </GlowButton>
              <GlowButton href="#contact" variant="ghost">
                Get in touch
                <Mail className="size-4" />
              </GlowButton>
              <div className="flex items-center gap-2">
                {[
                  { href: PROFILE.github, Icon: Github, label: "GitHub" },
                  { href: PROFILE.linkedin, Icon: Linkedin, label: "LinkedIn" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="glass grid size-11 place-items-center rounded-full text-muted-foreground transition-all duration-400 hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* orbital visual */}
        <Reveal delay={220} className="relative hidden justify-center lg:flex">
          <div className="relative grid size-[360px] place-items-center">
            <div className="animate-spin-slow absolute inset-0 rounded-full border border-primary/20" />
            <div
              className="animate-spin-slow absolute inset-8 rounded-full border border-accent/25"
              style={{ animationDirection: "reverse", animationDuration: "16s" }}
            />
            <div className="absolute inset-16 rounded-full border border-white/10" />
            <div className="animate-pulse-glow absolute inset-20 rounded-full bg-primary/10 blur-2xl" />
            <div className="glass animate-float relative grid size-40 place-items-center rounded-[2rem] text-center">
              <div>
                <p className="font-display text-4xl font-bold text-gradient">AKD</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Data Science
                </p>
              </div>
            </div>
            {["Python", "ML", "SQL", "React"].map((t, idx) => (
              <span
                key={t}
                className="glass absolute rounded-full px-3 py-1.5 font-mono text-[11px] text-primary"
                style={{
                  top: `${50 - 46 * Math.cos((idx / 4) * Math.PI * 2)}%`,
                  left: `${50 + 46 * Math.sin((idx / 4) * Math.PI * 2)}%`,
                  transform: "translate(-50%, -50%)",
                  animation: `float-slow ${6 + idx}s ease-in-out infinite`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* stats */}
      <div className="mx-auto mt-16 max-w-6xl px-5 sm:px-8">
        <div className="glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl sm:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className="px-5 py-6 text-center transition-colors duration-500 hover:bg-white/5"
            >
              <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">{s.value}</p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* marquee */}
      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-3">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="glass rounded-full px-4 py-2 font-mono text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
