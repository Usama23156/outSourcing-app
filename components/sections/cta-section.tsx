"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function CtaSection() {
  return (
    <section
      id="book-strategy-call"
      className="relative overflow-hidden bg-[#0a1a2f] py-24 sm:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(238,99,82,0.2),transparent_45%),radial-gradient(circle_at_80%_50%,rgba(61,90,115,0.25),transparent_40%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ee6352]">
            Start your transformation
          </p>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Ready to reinvent how your organization scales?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/75">
            Book a strategy call with our team. We&apos;ll assess your goals,
            identify the highest-impact outsourcing opportunities, and design a
            delivery model built around your outcomes.
          </p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-[#ee6352] px-8 text-base font-semibold text-white hover:bg-white hover:text-[#0a1a2f]"
            >
              <a href="mailto:hello@apexvector.com">
                Book a Strategy Call
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
            </Button>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-base font-semibold text-white/80 transition hover:text-white"
            >
              View our services
              <ArrowRight className="size-4" />
            </a>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
