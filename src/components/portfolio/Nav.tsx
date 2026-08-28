import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, PROFILE } from "@/lib/portfolio-data";
import { useActiveSection, useScrollY } from "@/hooks/use-scroll-fx";
import { cn } from "@/lib/utils";

const IDS = NAV.map((n) => n.id);

export function Nav() {
  const y = useScrollY();
  const active = useActiveSection(IDS);
  const [open, setOpen] = useState(false);
  const scrolled = y > 24;

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-[var(--gradient-line)]"
        style={{
          transform: `scaleX(${Math.min(
            1,
            y /
              Math.max(
                1,
                (typeof document !== "undefined"
                  ? document.body.scrollHeight - window.innerHeight
                  : 1) || 1,
              ),
          )})`,
        }}
      />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
            scrolled ? "glass mx-4 shadow-[0_18px_50px_-30px_var(--glow)]" : "mx-4 bg-transparent",
          )}
        >
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="relative grid size-8 place-items-center rounded-xl border border-primary/40 bg-primary/10 font-display text-sm font-bold text-primary">
              AK
              <span className="absolute inset-0 animate-pulse-glow rounded-xl bg-primary/10" />
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
              Arghya<span className="text-primary">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[13px] transition-colors duration-300",
                    active === n.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {active === n.id && (
                    <span className="absolute inset-0 rounded-full border border-primary/30 bg-primary/10" />
                  )}
                  <span className="relative">{n.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${PROFILE.email}`}
              className="btn-ember group relative hidden overflow-hidden rounded-full px-5 py-2 font-display text-[13px] font-semibold sm:inline-flex"
            >
              <span className="relative z-10">Hire Me</span>
              <span className="pointer-events-none absolute inset-0 z-10 -translate-x-full skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,oklch(1_0_0/40%),transparent)] transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full" />
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="glass grid size-9 place-items-center rounded-full text-foreground md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "mx-4 mt-2 origin-top overflow-hidden transition-all duration-500 md:hidden",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <ul className="glass grid gap-1 rounded-3xl p-3">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-sm transition-colors",
                    active === n.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                  )}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
