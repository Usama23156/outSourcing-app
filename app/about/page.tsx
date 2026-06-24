import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { StrategicValueSection } from "@/components/sections/strategic-value-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { pageMeta } from "@/lib/site-content";

export const metadata: Metadata = {
  title: pageMeta.about.title,
  description: pageMeta.about.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Apex Vector"
        title="The outsourcing partner built for enterprises that demand more"
        description="We don't compete on price or headcount. We compete on outcomes — delivering operational excellence, strategic depth, and performance accountability."
      />
      <StrategicValueSection showHeader={false} />
      <WhyChooseUsSection showHeader={false} />
      <TestimonialsSection />
    </>
  );
}
