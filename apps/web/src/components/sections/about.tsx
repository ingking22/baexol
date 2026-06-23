import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
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
          <div className="space-y-6">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-silver">
                Architecture &amp; Serving
              </p>
              <p className="mt-2 text-base leading-relaxed text-slate">
                트래픽 변화에도 흔들림 없는{" "}
                <span className="text-graphite">클린 아키텍처를 설계</span>합니다.
                AI 모델이 실서비스에서 지연 없이 서빙되도록 파이프라인의 병목을
                제거합니다.
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-silver">
                Product &amp; Business
              </p>
              <p className="mt-2 text-base leading-relaxed text-slate">
                <span className="text-graphite">오버 엔지니어링을 지양</span>
                합니다. 기술 자체보다 제품의 가치를 우선하며, 다양한 직군과
                소통해 비즈니스 목표에 최적인 기술 스택을 선택합니다.
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-silver">
                Team &amp; Culture
              </p>
              <p className="mt-2 text-base leading-relaxed text-slate">
                밀도 높은 코드 리뷰와 체계적인 문서화로, 개인의 경험을{" "}
                <span className="text-graphite">팀 전체의 자산</span>으로
                전환합니다.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
