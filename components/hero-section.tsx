import {
  ArrowRight,
  BrainCircuit,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import Image from "next/image";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

interface TrustMetric {
  value: string;
  label: string;
}

interface ProofPoint {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}

const trustMetrics: TrustMetric[] = [
  { value: "98%", label: "Client Retention" },
  { value: "72-Hour", label: "Talent Matching" },
  { value: "150+", label: "Specialists" },
  { value: "4.9/5", label: "Client Satisfaction" },
];

const proofPoints: ProofPoint[] = [
  { icon: ShieldCheck, label: "Vetted senior specialists" },
  { icon: Target, label: "Outcome-based delivery model" },
  { icon: BrainCircuit, label: "AI-assisted operational workflows" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B1F3A] text-[#F4F6F9]">
      <Image
        src="/hero-background-enterprise.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,31,58,0.35)_0%,rgba(11,31,58,0.08)_45%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <header className="relative z-10 flex items-center justify-between">
          <a
            href="#top"
            className="inline-flex items-center gap-3 rounded-full border border-[#F4F6F9]/15 bg-[#0B1F3A]/40 px-3 py-2 text-sm font-semibold tracking-tight text-[#F4F6F9] shadow-[0_16px_40px_rgba(11,31,58,0.24)] backdrop-blur"
            aria-label="Apex Vector home"
          >
            <Logo size={36} className="shrink-0" />
            Apex Vector
          </a>
          <div className="hidden items-center gap-2 rounded-full border border-[#F4F6F9]/15 bg-[#0B1F3A]/40 px-4 py-2 text-sm font-medium text-[#F4F6F9]/80 shadow-[0_16px_40px_rgba(11,31,58,0.2)] backdrop-blur md:flex">
            <Sparkles className="size-4 text-[#E85D4C]" aria-hidden="true" />
            Performance-backed growth partners
          </div>
        </header>

        <div className="relative z-10 flex flex-1 items-center justify-center py-14 lg:py-10">
          <div className="mx-auto max-w-4xl text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#F4F6F9]/15 bg-[#0B1F3A]/45 px-4 py-2 text-sm font-semibold text-[#F4F6F9] shadow-[0_18px_48px_rgba(11,31,58,0.24)] backdrop-blur">
              <ShieldCheck className="size-4 text-[#E85D4C]" aria-hidden="true" />
              Enterprise outsourcing built around accountability
            </div>

            <h1 className="text-balance text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-[#F4F6F9] sm:text-6xl lg:text-7xl">
              Built for{" "}
              <span className="relative inline-block text-[#E85D4C]">
                outcomes
                <span
                  className="absolute -bottom-1 left-1/2 h-2 w-[94%] -translate-x-1/2 rounded-full bg-[#E85D4C]/25"
                  aria-hidden="true"
                />
              </span>
              . Not hours.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-[#F4F6F9]/75 sm:text-xl">
              Apex Vector helps enterprise teams scale faster with vetted global
              specialists, measurable delivery targets, and AI-assisted
              workflows engineered to improve performance from day one.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {proofPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-[#F4F6F9]/12 bg-[#0B1F3A]/40 px-4 py-3 text-sm font-semibold text-[#F4F6F9] shadow-[0_16px_40px_rgba(11,31,58,0.2)] backdrop-blur"
                  >
                    <Icon className="size-4 text-[#E85D4C]" aria-hidden="true" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-full bg-[#E85D4C] px-7 text-base font-bold text-[#F4F6F9] shadow-[0_20px_46px_rgba(232,93,76,0.35)] hover:bg-[#F4F6F9] hover:text-[#0B1F3A] focus-visible:ring-[#E85D4C]/35 sm:w-auto"
              >
                <a href="#book-strategy-call" aria-label="Book a strategy call">
                  Book a Strategy Call
                  <ArrowRight className="size-5" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 w-full rounded-full border-[#F4F6F9]/25 bg-[#0B1F3A]/35 px-7 text-base font-bold text-[#F4F6F9] shadow-[0_18px_42px_rgba(11,31,58,0.2)] backdrop-blur hover:border-[#E85D4C] hover:bg-[#0B1F3A]/55 hover:text-[#F4F6F9] focus-visible:ring-[#E85D4C]/35 sm:w-auto"
              >
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative z-10 pb-8">
          <dl className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-[#F4F6F9]/12 bg-[#0B1F3A]/55 shadow-[0_30px_80px_rgba(11,31,58,0.32)] backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            {trustMetrics.map((metric) => (
              <div
                key={metric.label}
                className="border-b border-[#F4F6F9]/10 px-6 py-6 text-center last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
              >
                <dt className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F4F6F9]/65">
                  {metric.label}
                </dt>
                <dd className="mt-2 text-3xl font-bold tracking-[-0.04em] text-[#F4F6F9]">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
