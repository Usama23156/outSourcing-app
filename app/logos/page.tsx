import Image from "next/image";

const originalEnhancedLogos = [
  {
    id: "original-enhanced-1",
    name: "Original 1 — Node H",
    meaning: "Your sketch: two slanted coral bars with a central node (white ring, navy core, bisect line).",
    feeling: "Same H-shape. Cleaner bar heights, centered node, even spacing.",
  },
  {
    id: "original-enhanced-2",
    name: "Original 2 — Staggered Slash",
    meaning: "Your sketch: shorter coral bar lower left, taller navy bar upper right.",
    feeling: "Same stagger. Matched bar width, parallel slant, balanced offset.",
  },
  {
    id: "original-enhanced-3",
    name: "Original 3 — Slash Dot",
    meaning: "Your sketch: two parallel coral slashes with a navy dot ring bottom-right.",
    feeling: "Same layout. Sharper slant rhythm, dot anchored to the right bar.",
  },
  {
    id: "original-enhanced-4",
    name: "Original 4 — Arrow M",
    meaning: "Your sketch: thick coral M legs with arrow tips, thin navy inner V and base.",
    feeling: "Same M form. Symmetric peaks, crisp arrow tips, level base line.",
  },
  {
    id: "original-enhanced-5",
    name: "Original 5 — Twin Peaks",
    meaning: "Your sketch: two overlapping open triangles — coral left edge, navy right and base.",
    feeling: "Same twin peaks. Consistent stroke weights, offset preserved.",
  },
  {
    id: "original-enhanced-6",
    name: "Original 6 — Node Network",
    meaning: "Your sketch: two node-capped coral bars with navy diagonals and base.",
    feeling: "Same network. Nodes aligned, diagonals from node centers, clean base.",
  },
  {
    id: "original-enhanced-7",
    name: "Original 7 — Mountain Node",
    meaning: "Your sketch: two node-capped coral bars with one navy diagonal and base.",
    feeling: "Same ascent shape. One diagonal anchor, milestone nodes preserved.",
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
            Original concepts — enhanced only
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#0B1F3A] sm:text-5xl">
            Your 7 logos, professionally refined
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#3D5A73]">
            Same ideas you attached. No new concepts. Only spacing, proportions,
            geometry, balance, and scalability improvements for navbar, favicon,
            and SVG branding.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {originalEnhancedLogos.map((logo) => (
            <LogoCard key={logo.id} {...logo} />
          ))}
        </div>
      </div>
    </main>
  );
}
