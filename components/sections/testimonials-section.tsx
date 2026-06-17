"use client";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/motion/fade-in";
import { testimonials } from "@/lib/site-content";

export function TestimonialsSection() {
  return (
    <SectionShell id="testimonials">
      <SectionHeader
        align="center"
        eyebrow="Client voices"
        title="Trusted by leaders who measure success in outcomes"
        description="Enterprise executives share how Apex Vector transformed their operating model and accelerated growth."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <FadeIn key={item.author} delay={index * 0.1}>
            <blockquote className="flex h-full flex-col rounded-2xl border border-[#0a1a2f]/8 bg-white p-8 shadow-[0_16px_50px_rgba(10,26,47,0.04)]">
              <p className="flex-1 text-lg leading-8 text-[#1A2332]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-8 border-t border-[#0a1a2f]/8 pt-6">
                <cite className="not-italic">
                  <p className="font-bold text-[#0a1a2f]">{item.author}</p>
                  <p className="mt-1 text-sm text-[#3D5A73]">
                    {item.role}, {item.company}
                  </p>
                </cite>
              </footer>
            </blockquote>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
