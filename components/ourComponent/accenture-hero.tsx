"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";

const heroLogoSrc = "/hero-logo.png";

const navLinks = [
  { href: "#how-it-works", label: "What we do" },
  { href: "#insights", label: "Insights" },
  { href: "#careers", label: "Careers" },
  { href: "#book-strategy-call", label: "Contact" },
];

export function AccentureHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const headline = hero.querySelector<HTMLElement>("[data-hero-headline]");
    const body = hero.querySelector<HTMLElement>("[data-hero-body]");
    const background = hero.querySelector<HTMLElement>("[data-hero-bg]");
    const watermark = hero.querySelector<HTMLElement>("[data-hero-watermark]");

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
        background.style.transform = `translateY(${translateY}px) scale(1.04)`;
        background.style.opacity = (1 - progress * 0.35).toFixed(3);
      }

      if (watermark) {
        watermark.style.transform = `translate(${translateX * 1.4}px, ${translateY * 0.6}px) scale(${1 + progress * 0.08})`;
        watermark.style.opacity = (0.3 - progress * 0.08).toFixed(3);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#0a1a2f] text-white"
    >
      <div
        data-hero-bg
        className="pointer-events-none absolute inset-0 will-change-transform"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(238,99,82,0.18),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(61,90,115,0.28),transparent_36%),linear-gradient(135deg,#0a1a2f_0%,#102742_48%,#0a1a2f_100%)]" />
        <Image
          src={heroLogoSrc}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-center opacity-[0.14]"
        />
      </div>

      <div
        data-hero-watermark
        className="pointer-events-none absolute top-[8%] right-[-8%] h-[min(78vw,920px)] w-[min(78vw,920px)] will-change-transform sm:right-[-4%] lg:top-[4%] lg:right-[-2%]"
        aria-hidden="true"
      >
        <Image
          src={heroLogoSrc}
          alt=""
          fill
          sizes="(max-width: 1024px) 78vw, 920px"
          priority
          className="object-contain opacity-90"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(10,26,47,0.94)_0%,rgba(10,26,47,0.82)_42%,rgba(10,26,47,0.35)_68%,rgba(10,26,47,0.12)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1240px] flex-col px-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between py-7 lg:py-9">
          <a
            href="#top"
            className="inline-flex items-center gap-3 text-white transition hover:opacity-90"
            aria-label="Apex Vector home"
          >
            <span className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
              <Image
                src={heroLogoSrc}
                alt=""
                fill
                sizes="40px"
                className="object-contain p-1.5"
              />
            </span>
            <span className="text-[1.05rem] font-semibold tracking-[-0.02em]">
              apex<span className="text-[#ee6352]">vector</span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="flex flex-1 items-center py-16 lg:py-20">
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
                <a href="#book-strategy-call">See what we do</a>
              </Button>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-base font-semibold text-white/88 transition hover:text-white"
              >
                Explore our model
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="pb-10">
          <div className="grid gap-4 border-t border-white/12 pt-8 sm:grid-cols-3">
            {[
              {
                eyebrow: "Research Report",
                title: "AI agents are changing how enterprise teams scale",
                href: "#insights",
              },
              {
                eyebrow: "Perspective",
                title: "Outcome-based outsourcing built for continuous reinvention",
                href: "#how-it-works",
              },
              {
                eyebrow: "Case Study",
                title: "From pilot to production in 72 hours with vetted specialists",
                href: "#book-strategy-call",
              },
            ].map((card) => (
              <a
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
