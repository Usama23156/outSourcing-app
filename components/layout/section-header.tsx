import { cn } from "@/lib/utils";

import { FadeIn } from "@/components/motion/fade-in";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <FadeIn
      className={cn(
        "mb-14 max-w-3xl lg:mb-16",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.28em]",
          dark ? "text-[#ee6352]" : "text-[#ee6352]",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-balance text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]",
          dark ? "text-white" : "text-[#0a1a2f]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-pretty text-lg leading-8",
            dark ? "text-white/75" : "text-[#3D5A73]",
          )}
        >
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
