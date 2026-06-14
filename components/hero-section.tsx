import { ArrowRight } from "lucide-react";

import { HeroLogoVisual } from "@/components/hero-logo-visual";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const metrics = [
  { value: "98%", label: "retention" },
  { value: "72h", label: "matching" },
  { value: "150+", label: "specialists" },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#F4F6F9] text-[#1A2332]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_40%,rgba(232,93,76,0.06),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.03)_0%,transparent_32%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between py-8 lg:py-10">
          <a
            href="#top"
            className="inline-flex items-center gap-3 text-[#0B1F3A]"
            aria-label="Apex Vector home"
          >
            <Logo size={32} concept="hero-mountain-node" className="shrink-0" />
            <span className="text-sm font-semibold tracking-[0.08em] uppercase">
              Apex Vector
            </span>
          </a>
          <nav
            className="hidden items-center gap-10 text-sm font-medium text-[#3D5A73] md:flex"
            aria-label="Primary"
          >
            <a href="#how-it-works" className="transition hover:text-[#0B1F3A]">
              How it works
            </a>
            <a href="#book-strategy-call" className="transition hover:text-[#0B1F3A]">
              Contact
            </a>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-12 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8 lg:pb-20 xl:gap-16">
          <div className="max-w-xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700 lg:max-w-2xl lg:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#3D5A73]">
              Technology outsourcing
            </p>

            <h1 className="mt-8 text-balance text-5xl font-light leading-[1.02] tracking-[-0.045em] text-[#0B1F3A] sm:text-6xl lg:text-[4.5rem] lg:leading-[0.98]">
              Performance
              <span className="block font-semibold text-[#E85D4C]">
                at scale.
              </span>
            </h1>

            <p className="mt-10 max-w-lg text-pretty text-lg leading-[1.75] text-[#3D5A73] sm:text-xl sm:leading-[1.7]">
              We embed vetted global specialists into enterprise teams — with
              measurable targets, operational rigor, and the velocity to deliver
              from day one.
            </p>

            <div className="mt-14">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-none bg-[#0B1F3A] px-8 text-sm font-semibold tracking-[0.06em] uppercase text-[#F4F6F9] hover:bg-[#E85D4C] focus-visible:ring-[#E85D4C]/35"
              >
                <a href="#book-strategy-call" aria-label="Book a strategy call">
                  Book a strategy call
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>

            <dl className="mt-20 flex flex-wrap gap-x-12 gap-y-6 border-t border-[#0B1F3A]/10 pt-10">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-xs font-medium uppercase tracking-[0.22em] text-[#3D5A73]">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-light tracking-[-0.03em] text-[#0B1F3A]">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative flex min-h-[min(72vh,720px)] items-center justify-center lg:min-h-[78vh]">
            <HeroLogoVisual className="size-[min(88vw,640px)] lg:size-[min(42vw,680px)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
