import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { CtaSection } from "@/components/sections/cta-section";
import { pageMeta } from "@/lib/site-content";

export const metadata: Metadata = {
  title: pageMeta.caseStudies.title,
  description: pageMeta.caseStudies.description,
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Client impact"
        title="Outcomes that redefine what outsourcing can deliver"
        description="Real engagements. Measurable business results. The kind of transformation that earns boardroom attention."
      />
      <CaseStudiesSection showHeader={false} />
      <CtaSection />
    </>
  );
}
