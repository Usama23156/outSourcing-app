import Image from "next/image";

const concepts = [
  {
    id: "concept-1-bridge",
    name: "The Bridge",
    meaning: "Connecting businesses with elite global talent.",
    feeling: "Premium, human-centered, strategic.",
  },
  {
    id: "concept-2-engine",
    name: "The Engine",
    meaning: "Business growth, momentum, and execution.",
    feeling: "Bold, energetic, performance-driven.",
  },
  {
    id: "concept-3-nexus",
    name: "The Nexus",
    meaning: "Global operations and distributed teams.",
    feeling: "Enterprise-grade, sophisticated, global.",
  },
  {
    id: "concept-4-architect",
    name: "The Architect",
    meaning: "Structure, reliability, process, and operational excellence.",
    feeling: "Trustworthy, precise, executive-level.",
  },
  {
    id: "concept-5-vector",
    name: "The Vector",
    meaning: "Direction, transformation, and future growth.",
    feeling: "Innovative, premium, future-focused.",
  },
] as const;

export default function LogosPage() {
  return (
    <main className="min-h-screen bg-[#F4F6F9] px-6 py-16 text-[#1A2332] sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3D5A73]">
            Brand exploration
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#0B1F3A] sm:text-5xl">
            Five unique icon-only logo concepts
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#3D5A73]">
            Radically distinct marks for a premium outsourcing and
            performance-based services company. SVG and transparent PNG
            exports included for navbar, favicon, and enterprise branding.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {concepts.map((concept) => (
            <article
              key={concept.id}
              className="overflow-hidden rounded-[2rem] border border-[#0B1F3A]/10 bg-white shadow-[0_24px_60px_rgba(11,31,58,0.08)]"
            >
              <div className="grid grid-cols-2">
                <div className="flex items-center justify-center bg-[#F4F6F9] p-10">
                  <Image
                    src={`/logos/${concept.id}-512.png`}
                    alt={`${concept.name} logo on light background`}
                    width={160}
                    height={160}
                  />
                </div>
                <div className="flex items-center justify-center bg-[#0B1F3A] p-10">
                  <Image
                    src={`/logos/${concept.id}-512.png`}
                    alt={`${concept.name} logo on dark background`}
                    width={160}
                    height={160}
                  />
                </div>
              </div>

              <div className="border-t border-[#0B1F3A]/8 p-8">
                <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#0B1F3A]">
                  {concept.name}
                </h2>
                <p className="mt-3 text-base leading-7 text-[#3D5A73]">
                  {concept.meaning}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#E85D4C]">
                  {concept.feeling}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-[#0B1F3A]">
                  <a
                    href={`/logos/${concept.id}.svg`}
                    className="rounded-full border border-[#0B1F3A]/12 px-4 py-2 hover:border-[#E85D4C]"
                  >
                    SVG
                  </a>
                  <a
                    href={`/logos/${concept.id}-512.png`}
                    className="rounded-full border border-[#0B1F3A]/12 px-4 py-2 hover:border-[#E85D4C]"
                  >
                    PNG 512
                  </a>
                  <a
                    href={`/logos/${concept.id}-1024.png`}
                    className="rounded-full border border-[#0B1F3A]/12 px-4 py-2 hover:border-[#E85D4C]"
                  >
                    PNG 1024
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
