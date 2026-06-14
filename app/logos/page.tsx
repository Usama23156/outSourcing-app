import Image from "next/image";

const refinedConcepts = [
  {
    id: "refined-concept-1-node-h",
    name: "Concept 1 — Node Bridge",
    meaning: "Parallel execution paths connected through a central intelligence node.",
    feeling: "Strongest overall. Enterprise, connected, precise.",
  },
  {
    id: "refined-concept-2-staggered-slash",
    name: "Concept 2 — Staggered Slash",
    meaning: "Human creativity and technical depth in forward-leaning partnership.",
    feeling: "Bold, modern, developer-native.",
  },
  {
    id: "refined-concept-3-slash-dot",
    name: "Concept 3 — Slash Dot",
    meaning: "Code syntax abstraction signaling digital delivery and completion.",
    feeling: "Minimal, confident, highly scalable.",
  },
  {
    id: "refined-concept-4-arrow-m",
    name: "Concept 4 — Arrow M",
    meaning: "Dual growth vectors converging into measurable momentum.",
    feeling: "Performance-driven, dynamic, ambitious.",
  },
  {
    id: "refined-concept-5-twin-peaks",
    name: "Concept 5 — Twin Peaks",
    meaning: "Layered capability stacks building toward shared outcomes.",
    feeling: "Structural, premium, partnership-led.",
  },
  {
    id: "refined-concept-6-node-network",
    name: "Concept 6 — Node Network",
    meaning: "Distributed endpoints linked through operational infrastructure.",
    feeling: "Networked, technical, system-oriented.",
  },
  {
    id: "refined-concept-7-mountain-node",
    name: "Concept 7 — Mountain Node",
    meaning: "Guided ascent with anchored milestones and strategic direction.",
    feeling: "Aspirational, balanced, leadership-focused.",
  },
] as const;

const vectorCoreConcepts = [
  {
    id: "vector-core-1-hex",
    name: "Vector Core Hex",
    meaning: "Six interlocking segments with a precision hex void.",
    feeling: "Precision, structure, enterprise execution.",
  },
  {
    id: "vector-core-2-square",
    name: "Vector Core Square",
    meaning: "Four interlocking L-brackets around a square core.",
    feeling: "Stable, modular, systematic.",
  },
  {
    id: "vector-core-3-chevron",
    name: "Vector Core Chevron",
    meaning: "Radial chevrons converging on a central command core.",
    feeling: "Directional, coordinated, decisive.",
  },
  {
    id: "vector-core-4-nested",
    name: "Vector Core Nested",
    meaning: "Layered hex frames representing scalable systems.",
    feeling: "Executive, structured, enterprise-grade.",
  },
  {
    id: "vector-core-5-diamond",
    name: "Vector Core Diamond",
    meaning: "Faceted diamond with a focused growth center.",
    feeling: "Premium, sharp, future-focused.",
  },
] as const;

const coreConcepts = [
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

const vectorConcepts = [
  {
    id: "concept-5-vector",
    name: "Vector Original",
    meaning: "Diagonal trajectory with momentum trail.",
    feeling: "Direct, confident, forward.",
  },
  {
    id: "concept-6-vector-chevron",
    name: "Vector Chevron",
    meaning: "Stacked upward chevrons signaling acceleration.",
    feeling: "Bold, climbing, performance-driven.",
  },
  {
    id: "concept-7-vector-arc",
    name: "Vector Arc",
    meaning: "Curved trajectory path toward a target.",
    feeling: "Strategic, guided, precise.",
  },
  {
    id: "concept-8-vector-converge",
    name: "Vector Converge",
    meaning: "Multiple paths aligning into one direction.",
    feeling: "Focused, unified, executive.",
  },
  {
    id: "concept-9-vector-flow",
    name: "Vector Flow",
    meaning: "Continuous forward curve through transformation.",
    feeling: "Fluid, adaptive, modern.",
  },
  {
    id: "concept-10-vector-compass",
    name: "Vector Compass",
    meaning: "True north direction and strategic orientation.",
    feeling: "Authoritative, calibrated, premium.",
  },
  {
    id: "concept-11-vector-momentum",
    name: "Vector Momentum",
    meaning: "Escalating blocks showing scale and speed.",
    feeling: "Dynamic, scaling, energetic.",
  },
] as const;

const allLogos = [
  ...refinedConcepts.map((c) => ({ ...c, group: "Refined slash" })),
  ...vectorCoreConcepts.map((c) => ({ ...c, group: "Vector Core" })),
  ...coreConcepts.map((c) => ({ ...c, group: "Core concepts" })),
  ...vectorConcepts
    .filter((c) => c.id !== "concept-5-vector")
    .map((c) => ({ ...c, group: "Vector explorations" })),
] as const;

function CompactLogoTile({
  id,
  name,
  group,
}: {
  id: string;
  name: string;
  group: string;
}) {
  return (
    <a
      href={`#${id}`}
      className="group flex flex-col items-center rounded-2xl border border-[#0B1F3A]/10 bg-white p-4 shadow-[0_12px_32px_rgba(11,31,58,0.06)] transition hover:border-[#E85D4C]/40 hover:shadow-[0_16px_40px_rgba(11,31,58,0.1)]"
    >
      <div className="flex size-24 items-center justify-center rounded-xl bg-[#F4F6F9] p-3">
        <Image
          src={`/logos/${id}-512.png`}
          alt={name}
          width={80}
          height={80}
          className="size-20 object-contain"
        />
      </div>
      <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#3D5A73]">
        {group}
      </p>
      <p className="mt-1 text-center text-sm font-bold leading-5 text-[#0B1F3A]">
        {name}
      </p>
    </a>
  );
}

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
      className="overflow-hidden rounded-[2rem] border border-[#0B1F3A]/10 bg-white shadow-[0_24px_60px_rgba(11,31,58,0.08)] scroll-mt-24"
    >
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center bg-[#F4F6F9] p-10">
          <Image
            src={`/logos/${id}-512.png`}
            alt={`${name} logo on light background`}
            width={160}
            height={160}
          />
        </div>
        <div className="flex items-center justify-center bg-[#0B1F3A] p-10">
          <Image
            src={`/logos/${id}-512.png`}
            alt={`${name} logo on dark background`}
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
            Brand exploration
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#0B1F3A] sm:text-5xl">
            All logo concepts
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#3D5A73]">
            {allLogos.length} marks across four collections. SVG and
            transparent PNG exports for every concept.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#0B1F3A]">
            Complete gallery
          </h2>
          <p className="mt-2 text-base leading-7 text-[#3D5A73]">
            Click any logo to jump to its full preview and download links.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {allLogos.map((logo) => (
              <CompactLogoTile key={logo.id} {...logo} />
            ))}
          </div>
        </section>

        <section className="mt-10 overflow-hidden rounded-[2rem] border border-[#0B1F3A]/10 bg-white p-6 shadow-[0_24px_60px_rgba(11,31,58,0.08)] sm:p-8">
          <Image
            src="/vector-core-logos-sheet.png"
            alt="Vector Core logo collection preview"
            width={1600}
            height={500}
            className="h-auto w-full"
          />
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#0B1F3A]">
            Refined slash concepts
          </h2>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#3D5A73]">
            Professional refinements of your attached concepts — preserved
            ideas with corrected geometry, spacing, and favicon-ready stroke
            weights.
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {refinedConcepts.map((concept) => (
              <LogoCard key={concept.id} {...concept} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#0B1F3A]">
            Vector Core collection
          </h2>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#3D5A73]">
            Five flat geometric logos in the same style as your reference —
            interlocking angular segments, navy and slate palette, white center
            voids.
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {vectorCoreConcepts.map((concept) => (
              <LogoCard key={concept.id} {...concept} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#0B1F3A]">
            Vector explorations
          </h2>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#3D5A73]">
            Additional forward-motion marks — direction, momentum, and strategic
            progress. Each uses a different visual language.
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {vectorConcepts.map((concept) => (
              <LogoCard key={concept.id} {...concept} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#0B1F3A]">
            All five core concepts
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {coreConcepts.map((concept) => (
              <LogoCard key={concept.id} {...concept} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
