import { AccentureHero } from "@/components/ourComponent/accenture-hero";
import { SiteFooter } from "@/components/layout/site-footer";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { CtaSection } from "@/components/sections/cta-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { InsightsSection } from "@/components/sections/insights-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StrategicValueSection } from "@/components/sections/strategic-value-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";

export function HomePage() {
  return (
    <>
      <AccentureHero />
      <StrategicValueSection />
      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <WhyChooseUsSection />
      <InsightsSection />
      <TestimonialsSection />
      <CtaSection />
      <SiteFooter />
    </>
  );
}
