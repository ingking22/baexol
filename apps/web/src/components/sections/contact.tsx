import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-40">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-silver">
          04 — Contact
        </p>
        <h2 className="mt-8 max-w-3xl font-display text-4xl font-medium leading-[1.2] text-balance break-keep text-graphite sm:text-5xl">
          견고하게 동작하는 제품이
          <br />
          <span className="text-silver">필요하다면.</span>
        </h2>
        <p className="mt-6 text-lg text-slate">
          {"Let's build reliable systems together."}
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
          <a
            href="mailto:ybj19880612@gmail.com"
            className="group inline-flex items-center gap-2 text-lg text-graphite"
          >
            <span className="border-b border-frost transition-colors group-hover:border-graphite">
              ybj19880612@gmail.com
            </span>
          </a>
          <a
            href="https://github.com/ingking22"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm uppercase tracking-[0.18em] text-slate transition-colors hover:text-graphite"
          >
            GitHub ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-12">
      <div className="divider" />
      <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <span className="font-mono text-xs tracking-[0.2em] text-silver">
          BAEXOL · baexol.dev
        </span>
        <span className="font-mono text-xs text-silver">
          © {year} — Built with a zero-defect philosophy
        </span>
      </div>
    </footer>
  );
}
