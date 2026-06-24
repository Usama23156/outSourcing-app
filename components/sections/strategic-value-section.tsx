"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { AnimatedStat } from "@/components/motion/animated-stat";
import { FadeIn } from "@/components/motion/fade-in";
import { strategicStats } from "@/lib/site-content";

interface StrategicValueSectionProps {
  showHeader?: boolean;
}

export function StrategicValueSection({ showHeader = true }: StrategicValueSectionProps) {
  return (
    <SectionShell className="bg-white">
      <div
        className={
          showHeader
            ? "grid items-end gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20"
            : "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        }
      >
        {showHeader ? (
          <SectionHeader
            eyebrow="360° Value"
            title="Built to help enterprises scale with precision, not overhead"
            description="Apex Vector embeds high-performance outsourcing into your operating model — combining dedicated talent, measurable targets, and AI-assisted workflows so growth compounds instead of stalls."
          />
        ) : null}

        <FadeIn delay={0.15} className={showHeader ? "grid gap-6 sm:grid-cols-2" : "contents"}>
          {strategicStats.map((stat, index) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-[#0a1a2f]/8 bg-[#F4F6F9]/60 p-6 transition hover:border-[#ee6352]/30 hover:bg-[#F4F6F9]"
            >
              <p className="text-4xl font-bold tracking-[-0.04em] text-[#0a1a2f] sm:text-5xl">
                <AnimatedStat
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={"decimals" in stat ? stat.decimals : 0}
                />
              </p>
              <p className="mt-2 text-sm font-medium text-[#3D5A73]">{stat.label}</p>
              <div className="mt-4 h-px w-full bg-[#0a1a2f]/8">
                <div
                  className="h-px bg-[#ee6352] transition-all duration-700 group-hover:w-full"
                  style={{ width: `${55 + index * 10}%` }}
                />
              </div>
            </div>
          ))}
        </FadeIn>
      </div>

      {showHeader ? (
        <FadeIn delay={0.2} className="mt-16 lg:mt-20">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-base font-semibold text-[#0a1a2f] transition hover:text-[#ee6352]"
          >
            Explore our capabilities
            <ArrowUpRight className="size-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </FadeIn>
      ) : null}
    </SectionShell>
  );
}
