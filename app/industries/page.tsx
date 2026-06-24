import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { IndustriesSection } from "@/components/sections/industries-section";
import { CtaSection } from "@/components/sections/cta-section";
import { pageMeta } from "@/lib/site-content";

export const metadata: Metadata = {
  title: pageMeta.industries.title,
  description: pageMeta.industries.description,
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Deep domain expertise across high-growth sectors"
        description="We bring industry-specific knowledge, compliance awareness, and proven playbooks to every engagement — so your team hits the ground running."
      />
      <IndustriesSection showHeader={false} />
      <CtaSection />
    </>
  );
}
