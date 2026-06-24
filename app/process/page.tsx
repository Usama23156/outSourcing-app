import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ProcessSection } from "@/components/sections/process-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { pageMeta } from "@/lib/site-content";

export const metadata: Metadata = {
  title: pageMeta.process.title,
  description: pageMeta.process.description,
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How we deliver"
        title="A four-stage framework for enterprise-grade execution"
        description="From initial discovery to continuous optimization, every engagement follows a proven methodology designed for transparency and compounding results."
      />
      <ProcessSection showHeader={false} />
      <WhyChooseUsSection showHeader={false} />
    </>
  );
}
