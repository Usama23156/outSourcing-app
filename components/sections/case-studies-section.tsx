"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/motion/fade-in";
import { caseStudies } from "@/lib/site-content";

export function CaseStudiesSection({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <SectionShell dark>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(238,99,82,0.06)_100%)]"
        aria-hidden="true"
      />

      {showHeader ? (
        <SectionHeader
          dark
          eyebrow="Client impact"
          title="Outcomes that redefine what outsourcing can deliver"
          description="Real engagements. Measurable business results. The kind of transformation that earns boardroom attention."
        />
      ) : null}

      <div className="space-y-6">
        {caseStudies.map((study, index) => (
          <FadeIn key={study.client} delay={index * 0.1}>
            <motion.article
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition hover:border-[#ee6352]/30"
            >
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                <div className="p-8 sm:p-10 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                      {study.industry}
                    </span>
                    <span className="text-sm font-medium text-white/50">
                      {study.client}
                    </span>
                  </div>
                  <h3 className="mt-6 text-balance text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                    {study.headline}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                    {study.summary}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#ee6352] transition group-hover:text-white"
                  >
                    Discuss a similar engagement
                    <ArrowRight className="size-4" />
                  </Link>
                </div>

                <div className="border-t border-white/10 bg-[#0a1a2f]/80 p-8 sm:p-10 lg:border-t-0 lg:border-l">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee6352]">
                    Key metrics
                  </p>
                  <dl className="mt-6 space-y-6">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt className="text-sm font-medium text-white/55">
                          {metric.label}
                        </dt>
                        <dd className="mt-1 text-3xl font-bold tracking-[-0.03em] text-white">
                          {metric.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </motion.article>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
