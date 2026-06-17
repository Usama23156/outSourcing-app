"use client";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/motion/fade-in";
import { processSteps } from "@/lib/site-content";

export function ProcessSection() {
  return (
    <SectionShell id="process" dark>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(238,99,82,0.12),transparent_40%)]"
        aria-hidden="true"
      />

      <SectionHeader
        dark
        eyebrow="How we deliver"
        title="A four-stage framework for enterprise-grade execution"
        description="From initial discovery to continuous optimization, every engagement follows a proven methodology designed for transparency and compounding results."
      />

      <div className="relative">
        <div
          className="absolute top-8 right-0 left-0 hidden h-px bg-white/15 lg:block"
          aria-hidden="true"
        />

        <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.1}>
              <div className="relative">
                <div className="mb-6 flex items-center gap-4 lg:flex-col lg:items-start">
                  <div className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#0a1a2f] text-sm font-bold tracking-[0.2em] text-[#ee6352]">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 ? (
                    <div
                      className="hidden h-px flex-1 bg-white/15 lg:hidden"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <h3 className="text-xl font-bold tracking-[-0.02em] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/70">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
