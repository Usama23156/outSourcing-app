"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/motion/fade-in";
import { insights } from "@/lib/site-content";

export function InsightsSection({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <SectionShell className="bg-white">
      {showHeader ? (
        <SectionHeader
        eyebrow="Insights"
        title="Perspectives on outsourcing, growth, and enterprise transformation"
        description="Research, case studies, and strategic viewpoints from the team helping organizations reinvent how they scale."
        />
      ) : null}

      <div className="grid gap-6 lg:grid-cols-3">
        {insights.map((article, index) => (
          <FadeIn key={article.title} delay={index * 0.1}>
            <Link
              href="/contact"
              className="group flex h-full flex-col rounded-2xl border border-[#0a1a2f]/8 bg-[#F4F6F9]/40 p-7 transition hover:-translate-y-1 hover:border-[#0a1a2f]/15 hover:bg-[#F4F6F9]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee6352]">
                {article.category}
              </p>
              <h3 className="mt-4 flex-1 text-xl font-bold leading-8 tracking-[-0.02em] text-[#0a1a2f] transition group-hover:text-[#ee6352]">
                {article.title}
              </h3>
              <div className="mt-6 flex items-center justify-between border-t border-[#0a1a2f]/8 pt-5">
                <span className="text-sm text-[#3D5A73]">
                  {article.date} · {article.readTime}
                </span>
                <ArrowUpRight className="size-4 text-[#0a1a2f] transition group-hover:text-[#ee6352]" />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
