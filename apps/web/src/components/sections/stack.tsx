import { Reveal } from "@/components/reveal";

const GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend & AI",
    items: ["FastAPI", "Python 3.12+", "Hexagonal Architecture", "PostgreSQL", "Valkey"],
  },
  {
    label: "Realtime & Infra",
    items: ["WebRTC / WHEP", "GStreamer", "MediaMTX", "Docker", "Vercel"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-silver">
          03 — Stack
        </p>
        <div className="divider mt-6" />
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border hairline sm:grid-cols-3">
        {GROUPS.map((g, i) => (
          <Reveal key={g.label} delay={i * 90}>
            <div className="h-full bg-snow-0/50 p-7">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-graphite">
                {g.label}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-slate">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
