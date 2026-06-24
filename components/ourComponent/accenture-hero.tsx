"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { HeroVideoBackground } from "@/components/ourComponent/hero-video-background";

export function AccentureHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const headline = hero.querySelector<HTMLElement>("[data-hero-headline]");
    const body = hero.querySelector<HTMLElement>("[data-hero-body]");
    const background = hero.querySelector<HTMLElement>("[data-hero-bg]");

    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / rect.height));

      const fade = (1 - progress * 0.85).toFixed(3);
      const translateY = progress * rect.height * 0.18;
      const translateX = progress * rect.width * 0.08;

      if (headline) {
        headline.style.opacity = fade;
        headline.style.transform = `translateY(${-progress * 48}px)`;
      }

      if (body) {
        body.style.opacity = fade;
        body.style.transform = `translate(${translateX}px, ${-progress * 32}px)`;
      }

      if (background) {
        background.style.transform = `translateY(${translateY}px) scale(1.06)`;
        background.style.opacity = (1 - progress * 0.35).toFixed(3);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-[#0a1a2f] text-white">
      <div data-hero-bg className="absolute inset-0 will-change-transform">
        <HeroVideoBackground />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1240px] flex-col px-6 pt-24 sm:px-8 lg:px-10 lg:pt-28">
        <div className="flex flex-1 items-center py-12 lg:py-16">
          <div className="max-w-3xl">
            <p
              data-hero-body
              className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#ee6352] will-change-transform"
            >
              Shaping tomorrow, today
            </p>

            <h1
              data-hero-headline
              className="text-balance text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white will-change-transform sm:text-6xl lg:text-[5.25rem]"
            >
              Together we reinvented
            </h1>

            <p
              data-hero-body
              className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-white/82 will-change-transform sm:text-xl"
            >
              In a world of constant change, reinvention is a continuous strategy.
              Apex Vector helps enterprise teams rewrite the rules of growth,
              innovation, and resilience with vetted specialists and measurable
              delivery outcomes.
            </p>

            <div
              data-hero-body
              className="mt-10 flex flex-col gap-4 will-change-transform sm:flex-row sm:items-center"
            >
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full border-2 border-white bg-transparent px-8 text-base font-semibold text-white hover:bg-white hover:text-[#0a1a2f]"
              >
                <Link href="/contact">See what we do</Link>
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-base font-semibold text-white/88 transition hover:text-white"
              >
                Explore our model
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pb-10">
          <div className="grid gap-4 border-t border-white/12 pt-8 sm:grid-cols-3">
            {[
              {
                eyebrow: "Research Report",
                title: "AI agents are changing how enterprise teams scale",
                href: "/insights",
              },
              {
                eyebrow: "Perspective",
                title: "Outcome-based outsourcing built for continuous reinvention",
                href: "/services",
              },
              {
                eyebrow: "Case Study",
                title: "From pilot to production in 72 hours with vetted specialists",
                href: "/case-studies",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-[#ee6352]/40 hover:bg-white/8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee6352]">
                  {card.eyebrow}
                </p>
                <h2 className="mt-3 text-lg font-semibold leading-7 text-white transition group-hover:text-white">
                  {card.title}
                </h2>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition group-hover:text-white">
                  Read more
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
