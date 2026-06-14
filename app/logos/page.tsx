import Image from "next/image";

const slashConcepts = [
  {
    id: "slash-concept-01-connection",
    name: "01 — Connection",
    meaning:
      "Parallel slashes interlocked by a central bridge node — two lanes joined into one system.",
    feeling: "Partnership, integration, trusted handoff.",
  },
  {
    id: "slash-concept-02-growth",
    name: "02 — Growth",
    meaning:
      "Staggered // where the right slash rises higher — ascent built into the pair itself.",
    feeling: "Momentum, scaling teams, upward trajectory.",
  },
  {
    id: "slash-concept-03-talent-network",
    name: "03 — Talent Network",
    meaning:
      "Hub-centered slashes with endpoint nodes — distributed talent routed through a core.",
    feeling: "Global bench, networked expertise, human infrastructure.",
  },
  {
    id: "slash-concept-04-performance",
    name: "04 — Performance",
    meaning:
      "Forward-leaning // with the leading slash extended — velocity encoded in geometry.",
    feeling: "Speed, delivery, measurable output.",
  },
  {
    id: "slash-concept-05-direction",
    name: "05 — Direction",
    meaning:
      "Converging slashes meeting at a forward apex — perspective lines aimed at outcome.",
    feeling: "Strategic focus, clarity, decisive path.",
  },
  {
    id: "slash-concept-06-execution",
    name: "06 — Execution",
    meaning:
      "Parallel slashes pierced by a precision cut line — the moment work ships.",
    feeling: "Operational rigor, done-right delivery.",
  },
  {
    id: "slash-concept-07-scale",
    name: "07 — Scale",
    meaning:
      "Nested // pairs at two scales — outer frame, inner engine, same DNA.",
    feeling: "Enterprise capacity, repeatable systems.",
  },
  {
    id: "slash-concept-08-infrastructure",
    name: "08 — Digital Infrastructure",
    meaning:
      "Slashes as data lanes framing a modular core grid between them.",
    feeling: "Platform, architecture, reliable backbone.",
  },
  {
    id: "slash-concept-09-global",
    name: "09 — Global Operations",
    meaning:
      "Curved // meridians on a global ring — local execution, worldwide reach.",
    feeling: "Distributed ops, borderless delivery.",
  },
  {
    id: "slash-concept-10-future",
    name: "10 — Future Technology",
    meaning:
      "Slashes forming an open portal with a forward core — threshold to what is next.",
    feeling: "Innovation, transformation, premium tech.",
  },
] as const;

function LogoCard({
  id,
  name,
  meaning,
  feeling,
}: {
  id: string;
  name: string;
  meaning: string;
  feeling: string;
}) {
  return (
    <article
      id={id}
      className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-[#0B1F3A]/10 bg-white shadow-[0_24px_60px_rgba(11,31,58,0.08)]"
    >
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center bg-[#F4F6F9] p-10">
          <Image
            src={`/logos/${id}-512.png`}
            alt={`${name} on light background`}
            width={160}
            height={160}
          />
        </div>
        <div className="flex items-center justify-center bg-[#0B1F3A] p-10">
          <Image
            src={`/logos/${id}-512.png`}
            alt={`${name} on dark background`}
            width={160}
            height={160}
          />
        </div>
      </div>

      <div className="border-t border-[#0B1F3A]/8 p-8">
        <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#0B1F3A]">
          {name}
        </h2>
        <p className="mt-3 text-base leading-7 text-[#3D5A73]">{meaning}</p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#E85D4C]">
          {feeling}
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-[#0B1F3A]">
          <a
            href={`/logos/${id}.svg`}
            className="rounded-full border border-[#0B1F3A]/12 px-4 py-2 hover:border-[#E85D4C]"
          >
            SVG
          </a>
          <a
            href={`/logos/${id}-512.png`}
            className="rounded-full border border-[#0B1F3A]/12 px-4 py-2 hover:border-[#E85D4C]"
          >
            PNG 512
          </a>
          <a
            href={`/logos/${id}-1024.png`}
            className="rounded-full border border-[#0B1F3A]/12 px-4 py-2 hover:border-[#E85D4C]"
          >
            PNG 1024
          </a>
        </div>
      </div>
    </article>
  );
}

export default function LogosPage() {
  return (
    <main className="min-h-screen bg-[#F4F6F9] px-6 py-16 text-[#1A2332] sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3D5A73]">
            // symbol exploration
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#0B1F3A] sm:text-5xl">
            Ten original // logo concepts
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#3D5A73]">
            Each mark transforms the double-slash into a distinct enterprise
            symbol — connection, growth, network, performance, direction,
            execution, scale, infrastructure, global ops, and future tech.
            Icon-only. Premium geometry. No text, no initials.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-[#0B1F3A]">
            <span className="rounded-full bg-[#0B1F3A] px-4 py-2 text-white">
              Navy #0B1F3A
            </span>
            <span className="rounded-full bg-[#3D5A73] px-4 py-2 text-white">
              Slate #3D5A73
            </span>
            <span className="rounded-full bg-[#E85D4C] px-4 py-2 text-white">
              Coral #E85D4C
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {slashConcepts.map((logo) => (
            <LogoCard key={logo.id} {...logo} />
          ))}
        </div>
      </div>
    </main>
  );
}
