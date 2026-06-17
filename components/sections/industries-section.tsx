"use client";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/motion/fade-in";
import { industries } from "@/lib/site-content";

export function IndustriesSection() {
  return (
    <SectionShell id="industries" className="bg-white">
      <SectionHeader
        eyebrow="Industries"
        title="Deep domain expertise across high-growth sectors"
        description="We bring industry-specific knowledge, compliance awareness, and proven playbooks to every engagement — so your team hits the ground running."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => (
          <FadeIn key={industry.name} delay={index * 0.08}>
            <article className="group relative overflow-hidden rounded-2xl border border-[#0a1a2f]/8 bg-[#F4F6F9]/50 p-7 transition hover:border-[#0a1a2f]/15 hover:bg-[#F4F6F9]">
              <div
                className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[#ee6352]/8 transition group-hover:bg-[#ee6352]/15"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee6352]">
                Sector
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#0a1a2f]">
                {industry.name}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#3D5A73]">
                {industry.description}
              </p>
            </article>
          </FadeIn>
        ))}

        <FadeIn delay={0.4}>
          <article className="flex h-full min-h-[200px] flex-col justify-center rounded-2xl border border-dashed border-[#0a1a2f]/15 bg-transparent p-7">
            <p className="text-lg font-semibold text-[#0a1a2f]">
              Your industry not listed?
            </p>
            <a
              href="#book-strategy-call"
              className="mt-3 text-base font-medium text-[#ee6352] transition hover:text-[#0a1a2f]"
            >
              Let&apos;s discuss your requirements →
            </a>
          </article>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
