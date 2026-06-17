import { Reveal } from "@/components/reveal";

type Project = {
  index: string;
  title: string;
  kicker?: string;
  summary: string;
  tags: string[];
  badge: string;
  featured?: boolean;
  upcoming?: boolean;
};

// ── 보존: Dexma Watch 케이스 (일단 내려둠 — 준비되면 featured 로 복원) ──
// {
//   index: "P-01",
//   title: "Dexma Watch",
//   kicker: "지능형 영상 관제 · 실시간 AI 서빙 파이프라인",
//   summary:
//     "영상(Fast Path)과 메타데이터(Smart Path)를 분리한 듀얼 파이프라인 아키텍처. WebRTC 저지연 스트림과 AI 추론 오버레이를 시간축(PTS) 기준으로 완벽하게 동기화하여 지연 없는 상용화 퍼포먼스를 구현했습니다.",
//   tags: ["FastAPI", "Hexagonal", "WebRTC / WHEP", "GStreamer", "Realtime"],
//   badge: "Architecture Case",
//   featured: true,
// },

const UPCOMING = {
  title: "Upcoming Architecture",
  summary: "새로운 시스템 설계 및 최적화 사례를 준비 중입니다.",
  tags: [] as string[],
  badge: "In Progress",
  upcoming: true,
};

const PROJECTS: Project[] = [
  { index: "P-01", ...UPCOMING },
  { index: "P-02", ...UPCOMING },
  { index: "P-03", ...UPCOMING },
];

export function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
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
              className={`surface group flex h-full flex-col rounded-2xl p-7 transition-transform duration-500 hover:-translate-y-1 ${
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

              <h3 className="mt-6 font-display text-3xl font-medium text-graphite">
                {p.title}
              </h3>
              {p.kicker ? (
                <p className="mt-1 text-sm text-silver">{p.kicker}</p>
              ) : null}
              <p className="mt-5 flex-1 text-sm leading-relaxed text-slate">
                {p.summary}
              </p>

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
