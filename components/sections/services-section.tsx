"use client";

import {
  BarChart3,
  Code2,
  GitBranch,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/motion/fade-in";
import { services } from "@/lib/site-content";

const iconMap = {
  code: Code2,
  chart: BarChart3,
  target: Target,
  users: UsersRound,
  workflow: GitBranch,
  sparkles: Sparkles,
} as const;

export function ServicesSection({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <SectionShell>
      {showHeader ? (
        <SectionHeader
        eyebrow="What we do"
        title="Strategic outsourcing capabilities for modern enterprises"
        description="Every service is delivered through dedicated teams, outcome-based accountability, and the operational rigor your organization demands."
        />
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];

          return (
            <FadeIn key={service.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col rounded-2xl border border-[#0a1a2f]/8 bg-white p-7 shadow-[0_20px_60px_rgba(10,26,47,0.04)] transition hover:border-[#ee6352]/25 hover:shadow-[0_28px_70px_rgba(10,26,47,0.08)]"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0a1a2f] text-white transition group-hover:bg-[#ee6352]">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-[#0a1a2f]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-7 text-[#3D5A73]">
                  {service.description}
                </p>
                <div className="mt-6 h-px w-0 bg-[#ee6352] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            </FadeIn>
          );
        })}
      </div>
    </SectionShell>
  );
}
