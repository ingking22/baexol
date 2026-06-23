import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-silver">
          05 — Contact
        </p>
        <h2 className="mt-8 max-w-3xl font-display text-3xl font-medium leading-[1.2] text-balance break-keep text-graphite sm:text-4xl">
          좋은 시스템은
          <br />
          <span className="text-silver">좋은 팀에서 나옵니다.</span>
        </h2>
        <p className="mt-6 text-lg text-slate">
          {"Great systems come from great teams."}
        </p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate">
          제 경험이 팀의 비전을 현실로 만드는 강력한 동력이 되길 기대합니다.
          가벼운 대화라도 언제나 환영합니다.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
          <a
            href="mailto:ingking22@baexol.dev"
            className="group inline-flex items-center gap-2 text-lg text-graphite"
          >
            <span className="border-b border-frost transition-colors group-hover:border-graphite">
              ingking22@baexol.dev
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
