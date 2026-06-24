import type { Metadata } from "next";

import { AccentureHero } from "@/components/ourComponent/accenture-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { StrategicValueSection } from "@/components/sections/strategic-value-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { pageMeta } from "@/lib/site-content";

export const metadata: Metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description,
};

export default function HomePage() {
  return (
    <>
      <AccentureHero />
      <StrategicValueSection />
      <TestimonialsSection showHeader={false} />
      <CtaSection />
    </>
  );
}
