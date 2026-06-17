"use client";

import { CheckCircle2 } from "lucide-react";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/motion/fade-in";
import { advantages } from "@/lib/site-content";

export function WhyChooseUsSection() {
  return (
    <SectionShell id="why-us">
      <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
        <SectionHeader
          eyebrow="Why Apex Vector"
          title="The outsourcing partner built for enterprises that demand more"
          description="We don't compete on price or headcount. We compete on outcomes — delivering the operational excellence, strategic depth, and performance accountability that high-growth organizations require."
          className="mb-0 lg:mb-0"
        />

        <div className="space-y-5">
          {advantages.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <article className="flex gap-5 rounded-2xl border border-[#0a1a2f]/8 bg-white p-6 transition hover:border-[#ee6352]/20 hover:shadow-[0_20px_50px_rgba(10,26,47,0.06)]">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#ee6352]/10 text-[#ee6352]">
                  <CheckCircle2 className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-[#0a1a2f]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#3D5A73]">
                    {item.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
