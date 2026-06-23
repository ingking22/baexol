import { Reveal } from "@/components/reveal";

type Project = {
  index: string;
  title: string;
  kicker?: string;
  summary: string;
  // STAR — 채용 담당자가 보고 싶어하는 "문제 → 해결 → 성과" 구조
  role?: string; // 팀 프로젝트일 경우 본인 역할/기여
  problem?: string;
  action?: string;
  result?: string;
  tags: string[];
  badge: string;
  featured?: boolean;
  upcoming?: boolean;
};

const UPCOMING = {
  title: "Upcoming Architecture",
  summary: "새로운 시스템 설계 및 최적화 사례를 준비 중입니다.",
  tags: [] as string[],
  badge: "In Progress",
  upcoming: true,
};

// ── 보존: Dexma Watch 케이스 (준비되면 featured 로 복원) ──
// 정량 성과(레이턴시·채널 수 등)와 본인 역할/기여 비중을 채워 PROJECTS 맨 앞에 넣으세요.
// {
//   index: "P-01",
//   title: "Dexma Watch",
//   kicker: "지능형 영상 관제 · 실시간 AI 서빙 파이프라인",
//   summary:
//     "영상과 메타데이터 파이프라인을 분리하고 PTS 기반 동기화를 적용한 실시간 AI 관제 시스템.",
//   role: "아키텍처 설계 · 백엔드/서빙 파이프라인 전담",
//   problem: "영상 스트림과 AI 추론 결과 간 동기화 불일치로 인한 관제 신뢰도 저하.",
//   action:
//     "WebRTC + FastAPI 기반 듀얼 파이프라인 구축, 시간축(PTS) 기준 동기화 아키텍처 재설계.",
//   result:
//     "지연·프레임 어긋남 해결로 상용 수준 실시간 관제 성능 달성. (정량 지표 정리 중)",
//   tags: ["FastAPI", "Hexagonal", "WebRTC / WHEP", "GStreamer", "Realtime"],
//   badge: "Architecture Case",
//   featured: true,
// },

const PROJECTS: Project[] = [
  { index: "P-01", ...UPCOMING },
  { index: "P-02", ...UPCOMING },
];

export function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <Reveal>
        <div className="flex items-baseline justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-silver">
            02 — Selected Work
          </p>
          <span className="font-mono text-xs text-silver">/{PROJECTS.length}</span>
        </div>
        <div className="divider mt-6" />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.index} delay={i * 90}>
            <article
              className={`surface group flex h-full flex-col rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ice hover:shadow-[0_18px_50px_-24px_rgba(20,22,27,0.3)] ${
                p.upcoming ? "opacity-60" : ""
              } ${p.featured ? "lg:col-span-2" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-silver">
                  {p.index}
                </span>
                <span
                  className={`font-mono text-[0.6rem] uppercase tracking-[0.2em] ${
                    p.featured ? "text-ice" : "text-silver"
                  }`}
                >
                  {p.badge}
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-medium text-graphite">
                {p.title}
              </h3>
              {p.kicker ? (
                <p className="mt-1 text-sm text-silver">{p.kicker}</p>
              ) : null}
              {p.role ? (
                <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-silver">
                  {p.role}
                </p>
              ) : null}
              <p className="mt-5 text-sm leading-relaxed text-slate">
                {p.summary}
              </p>

              {p.problem || p.action || p.result ? (
                <dl className="mt-5 flex-1 space-y-3 text-sm leading-relaxed">
                  {p.problem ? (
                    <div>
                      <dt className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-silver">
                        Problem
                      </dt>
                      <dd className="mt-1 text-slate">{p.problem}</dd>
                    </div>
                  ) : null}
                  {p.action ? (
                    <div>
                      <dt className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-silver">
                        Action
                      </dt>
                      <dd className="mt-1 text-slate">{p.action}</dd>
                    </div>
                  ) : null}
                  {p.result ? (
                    <div>
                      <dt className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-silver">
                        Result
                      </dt>
                      <dd className="mt-1 text-graphite">{p.result}</dd>
                    </div>
                  ) : null}
                </dl>
              ) : (
                <div className="flex-1" />
              )}

              {p.tags.length > 0 ? (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border hairline px-3 py-1 font-mono text-[0.65rem] tracking-wide text-slate"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
