import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#0a1a2f] pt-28 pb-20 text-white sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(238,99,82,0.15),transparent_42%),linear-gradient(180deg,rgba(10,26,47,1)_0%,rgba(16,39,66,1)_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ee6352]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/75">
              {description}
            </p>
          ) : null}
        </FadeIn>
      </div>
    </section>
  );
}
