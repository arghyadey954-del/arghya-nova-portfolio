/** Fixed, always-on animated backdrop: drifting aurora blobs + faint grid. */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="animate-blob absolute -top-40 -left-32 size-[46rem] rounded-full bg-primary/12 blur-[140px]" />
      <div
        className="animate-blob absolute top-1/3 -right-40 size-[40rem] rounded-full bg-accent/12 blur-[150px]"
        style={{ animationDelay: "-9s" }}
      />
      <div
        className="animate-blob absolute -bottom-52 left-1/3 size-[38rem] rounded-full bg-primary/10 blur-[150px]"
        style={{ animationDelay: "-17s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_40%,oklch(0.16_0.028_265/70%)_100%)]" />
    </div>
  );
}
