"use client";

import { cn } from "@/lib/utils";

interface HeroLogoVisualProps {
  className?: string;
}

export function HeroLogoVisual({ className }: HeroLogoVisualProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className="absolute left-1/2 top-1/2 size-[min(72vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E85D4C]/18 blur-[100px]"
      />

      <div className="relative size-full [perspective:1400px]">
        <div className="hero-logo-tilt relative size-full [transform-style:preserve-3d]">
          <div
            className="absolute inset-[8%] rounded-full bg-[#0B1F3A]/[0.04] blur-3xl"
            style={{ transform: "translateZ(-80px) scale(0.92)" }}
          />

          <svg
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative size-full drop-shadow-[0_48px_96px_rgba(11,31,58,0.14)] drop-shadow-[0_20px_40px_rgba(232,93,76,0.12)]"
            style={{ transform: "translateZ(40px)" }}
          >
            <path
              d="M128 384H384"
              stroke="#0B1F3A"
              strokeWidth="11"
              strokeLinecap="round"
            />
            <path
              d="M220 176L128 384"
              stroke="#0B1F3A"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M345 120L384 384"
              stroke="#0B1F3A"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M172 384L220 176"
              stroke="#E85D4C"
              strokeWidth="40"
              strokeLinecap="round"
            />
            <path
              d="M284 384L345 120"
              stroke="#E85D4C"
              strokeWidth="40"
              strokeLinecap="round"
            />
            <circle cx="220" cy="176" r="16" fill="#E85D4C" />
            <circle cx="345" cy="120" r="16" fill="#E85D4C" />
          </svg>
        </div>
      </div>
    </div>
  );
}
