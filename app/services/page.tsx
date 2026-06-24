import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { IndustriesSection } from "@/components/sections/industries-section";
import { ServicesSection } from "@/components/sections/services-section";
import { pageMeta } from "@/lib/site-content";

export const metadata: Metadata = {
  title: pageMeta.services.title,
  description: pageMeta.services.description,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Strategic outsourcing capabilities for modern enterprises"
        description="Every service is delivered through dedicated teams, outcome-based accountability, and the operational rigor your organization demands."
      />
      <ServicesSection showHeader={false} />
      <IndustriesSection showHeader={false} />
    </>
  );
}
