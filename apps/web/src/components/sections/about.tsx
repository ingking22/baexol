import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-silver">
          01 — Approach
        </p>
      </Reveal>

      <div className="mt-10 grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-7" delay={60}>
          <h2 className="font-display text-3xl font-medium leading-[1.25] text-balance break-keep text-graphite sm:text-4xl">
            Zero-Defect.
            <br />
            <span className="text-silver">시스템은 투명하고 예측 가능해야 한다.</span>
          </h2>
        </Reveal>

        <Reveal className="md:col-span-5 md:pt-3" delay={140}>
          <div className="space-y-5 text-base leading-relaxed text-slate">
            <p>
              제품 기획과 UI/UX 설계부터 시스템 아키텍처, 풀스택 구현, 그리고
              단위 테스트 단계의{" "}
              <span className="text-graphite">AI 모델을 실서비스 수준으로 고도화</span>해
              API·서빙까지 — 한 사람이 하나의 흐름으로 책임집니다.
            </p>
            <p>
              병목 없는 클린 아키텍처, 명시적인 경계, 실패를 가정한 설계.
              화려한 기능보다 <span className="text-graphite">방어 가능한 견고함</span>을
              우선합니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
