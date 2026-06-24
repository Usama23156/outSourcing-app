import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { InsightsSection } from "@/components/sections/insights-section";
import { pageMeta } from "@/lib/site-content";

export const metadata: Metadata = {
  title: pageMeta.insights.title,
  description: pageMeta.insights.description,
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspectives on outsourcing, growth, and enterprise transformation"
        description="Research, case studies, and strategic viewpoints from the team helping organizations reinvent how they scale."
      />
      <InsightsSection showHeader={false} />
    </>
  );
}
