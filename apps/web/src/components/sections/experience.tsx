import { Reveal } from "@/components/reveal";

type Role = {
  period: string;
  company: string;
  title: string;
  highlights: string[];
};

// TODO(사용자 입력): 준비되면 실제 경력으로 교체하세요. (회사·직책·기간·핵심 성과 1~2줄, 최신순)
const ROLES: Role[] = [];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28"
    >
      <Reveal>
        <div className="flex items-baseline justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-silver">
            03 — Experience
          </p>
          {ROLES.length > 0 ? (
            <span className="font-mono text-xs text-silver">/{ROLES.length}</span>
          ) : null}
        </div>
        <div className="divider mt-6" />
      </Reveal>

      {ROLES.length === 0 ? (
        <Reveal delay={80}>
          <div className="mt-12 surface rounded-2xl p-8 opacity-60">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-silver">
              In Progress
            </span>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              경력 타임라인을 정리하고 있습니다. 회사·직무·핵심 성과를 곧
              공개합니다.
            </p>
          </div>
        </Reveal>
      ) : (
        <div className="mt-12 space-y-px">
          {ROLES.map((r, i) => (
            <Reveal key={`${r.company}-${i}`} delay={i * 90}>
              <article className="grid gap-3 py-7 sm:grid-cols-12 sm:gap-6">
                <div className="sm:col-span-3">
                  <p className="font-mono text-xs tracking-[0.15em] text-silver">
                    {r.period}
                  </p>
                </div>
                <div className="sm:col-span-9">
                  <h3 className="font-display text-2xl font-medium text-graphite">
                    {r.company}
                  </h3>
                  <p className="mt-1 text-sm text-silver">{r.title}</p>
                  <ul className="mt-4 space-y-2">
                    {r.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-sm leading-relaxed text-slate before:mr-2 before:text-silver before:content-['—']"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
              {i < ROLES.length - 1 ? <div className="divider" /> : null}
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
