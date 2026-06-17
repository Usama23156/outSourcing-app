import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionShellProps {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  dark?: boolean;
}

export function SectionShell({
  id,
  children,
  className,
  innerClassName,
  dark = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-24 sm:py-28 lg:py-32",
        dark ? "bg-[#0a1a2f] text-white" : "bg-[#F4F6F9] text-[#1A2332]",
        className,
      )}
    >
      <div
        className={cn(
          "relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-10",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
