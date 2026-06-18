import { BirchMark } from "@/components/birch-mark";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6"
    >
      {/* decorative mark — quiet side accent, not a background watermark */}
      <BirchMark className="drift pointer-events-none absolute right-[-10%] top-1/2 h-[58vmin] w-[58vmin] -translate-y-1/2 opacity-[0.12]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <p
          className="rise font-mono text-[0.7rem] uppercase tracking-[0.3em] text-silver"
          style={{ animationDelay: "80ms" }}
        >
          Full-Stack AI Engineer
        </p>

        <h1
          className="rise mt-8 max-w-4xl font-display font-medium leading-[1.18] text-balance break-keep text-graphite text-[clamp(2rem,5vw,3.5rem)]"
          style={{ animationDelay: "180ms" }}
        >
          초기 아키텍처 설계부터 고성능 AI 서빙까지,
          <br />
          <span className="text-silver">제품의 처음과 끝을 책임집니다.</span>
        </h1>

        <p
          className="rise mt-7 max-w-xl text-base leading-relaxed text-slate sm:text-lg"
          style={{ animationDelay: "320ms" }}
        >
          From initial architecture to high-performance AI serving, taking full ownership of the product lifecycle.
        </p>

        <div
          className="rise mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "440ms" }}
        >
          <a
            href="#work"
            className="rounded-full bg-graphite px-6 py-3 text-sm font-medium text-snow-0 transition-transform hover:-translate-y-0.5"
          >
            Selected Work
          </a>
          <a
            href="#contact"
            className="rounded-full border hairline px-6 py-3 text-sm font-medium text-graphite transition-colors hover:bg-snow-2"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-silver">
          Scroll
        </span>
      </div>
    </section>
  );
}
