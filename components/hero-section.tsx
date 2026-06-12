import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Globe2,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { Button } from "@/components/ui/button";

interface TrustMetric {
  value: string;
  label: string;
}

interface ProofPoint {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}

interface NetworkNode {
  label: string;
  className: string;
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

const networkNodes: NetworkNode[] = [
  { label: "NA", className: "left-[11%] top-[31%]" },
  { label: "LATAM", className: "left-[25%] top-[62%]" },
  { label: "EMEA", className: "left-[50%] top-[27%]" },
  { label: "APAC", className: "right-[14%] top-[52%]" },
];

export function HeroSection() {
  return (
    <section className="min-h-screen overflow-hidden bg-[#F4F6F9] text-[#1A2332]">
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <div
          className="absolute inset-x-0 top-0 z-0 h-80 bg-[radial-gradient(circle_at_18%_18%,rgba(61,90,115,0.18),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(11,31,58,0.14),transparent_30%)]"
          aria-hidden="true"
        />

        <header className="relative z-10 flex items-center justify-between">
          <a
            href="#top"
            className="inline-flex items-center gap-3 rounded-full border border-[#0B1F3A]/10 bg-[#F4F6F9]/80 px-3 py-2 text-sm font-semibold tracking-tight text-[#0B1F3A] shadow-[0_16px_40px_rgba(11,31,58,0.08)] backdrop-blur"
            aria-label="Apex Vector home"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-[#0B1F3A] text-[#F4F6F9]">
              AV
            </span>
            Apex Vector
          </a>
          <div className="hidden items-center gap-2 rounded-full border border-[#0B1F3A]/10 bg-[#F4F6F9]/70 px-4 py-2 text-sm font-medium text-[#3D5A73] shadow-[0_16px_40px_rgba(11,31,58,0.06)] backdrop-blur md:flex">
            <Sparkles className="size-4 text-[#E85D4C]" aria-hidden="true" />
            Performance-backed growth partners
          </div>
        </header>

        <div className="relative z-10 grid flex-1 items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-10">
          <div className="mx-auto max-w-3xl text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 lg:mx-0 lg:text-left">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#0B1F3A]/10 bg-[#F4F6F9]/90 px-4 py-2 text-sm font-semibold text-[#0B1F3A] shadow-[0_18px_48px_rgba(11,31,58,0.08)] backdrop-blur">
              <ShieldCheck className="size-4 text-[#E85D4C]" aria-hidden="true" />
              Enterprise outsourcing built around accountability
            </div>

            <h1 className="text-balance text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-[#0B1F3A] sm:text-6xl lg:text-7xl">
              Built for{" "}
              <span className="relative inline-block text-[#E85D4C]">
                outcomes
                <span
                  className="absolute -bottom-1 left-1/2 h-2 w-[94%] -translate-x-1/2 rounded-full bg-[#E85D4C]/20"
                  aria-hidden="true"
                />
              </span>
              . Not hours.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-[#3D5A73] sm:text-xl lg:mx-0">
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
                    className="flex items-center justify-center gap-2 rounded-2xl border border-[#0B1F3A]/10 bg-[#F4F6F9]/70 px-4 py-3 text-sm font-semibold text-[#1A2332] shadow-[0_16px_40px_rgba(11,31,58,0.06)] backdrop-blur lg:justify-start"
                  >
                    <Icon className="size-4 text-[#E85D4C]" aria-hidden="true" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-full bg-[#E85D4C] px-7 text-base font-bold text-[#F4F6F9] shadow-[0_20px_46px_rgba(232,93,76,0.28)] hover:bg-[#0B1F3A] hover:text-[#F4F6F9] focus-visible:ring-[#E85D4C]/35 sm:w-auto"
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
                className="h-14 w-full rounded-full border-[#0B1F3A]/20 bg-[#F4F6F9]/65 px-7 text-base font-bold text-[#0B1F3A] shadow-[0_18px_42px_rgba(11,31,58,0.08)] hover:border-[#E85D4C] hover:bg-[#F4F6F9] hover:text-[#0B1F3A] focus-visible:ring-[#E85D4C]/35 sm:w-auto"
              >
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
          </div>

          <HeroIllustration />
        </div>

        <div className="relative z-10 pb-8">
          <dl className="grid overflow-hidden rounded-[2rem] border border-[#0B1F3A]/10 bg-[#0B1F3A] shadow-[0_30px_80px_rgba(11,31,58,0.22)] sm:grid-cols-2 lg:grid-cols-4">
            {trustMetrics.map((metric) => (
              <div
                key={metric.label}
                className="border-b border-[#F4F6F9]/10 px-6 py-6 text-center last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
              >
                <dt className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F4F6F9]/70">
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

function HeroIllustration() {
  return (
    <figure
      className="relative mx-auto w-full max-w-[38rem] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-5 motion-safe:duration-1000 lg:mr-0"
      aria-label="Abstract illustration of Apex Vector's global talent network, AI-assisted workflows, and scalable delivery operations."
    >
      <div className="absolute -left-6 top-12 h-28 w-28 rounded-full bg-[#3D5A73]/20 blur-3xl" />
      <div className="absolute -right-8 bottom-16 h-36 w-36 rounded-full bg-[#0B1F3A]/15 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2.25rem] border border-[#0B1F3A]/10 bg-[#0B1F3A] p-4 shadow-[0_34px_100px_rgba(11,31,58,0.28)] sm:p-5">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_26%_18%,rgba(244,246,249,0.16),transparent_25%),radial-gradient(circle_at_84%_78%,rgba(61,90,115,0.4),transparent_28%)]"
          aria-hidden="true"
        />

        <div className="relative rounded-[1.75rem] border border-[#F4F6F9]/10 bg-[#F4F6F9]/10 p-4 backdrop-blur sm:p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F4F6F9]/60">
                Apex Operating System
              </p>
              <h2 className="mt-1 text-xl font-bold tracking-[-0.035em] text-[#F4F6F9]">
                Global capacity, governed by outcomes.
              </h2>
            </div>
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#E85D4C] text-[#F4F6F9] shadow-[0_16px_36px_rgba(232,93,76,0.28)]">
              <Network className="size-6" aria-hidden="true" />
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_0.78fr]">
            <div className="relative min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-[#F4F6F9]/10 bg-[#F4F6F9]/5">
              <div
                className="absolute inset-5 rounded-full border border-[#F4F6F9]/10"
                aria-hidden="true"
              />
              <div
                className="absolute inset-12 rounded-full border border-[#F4F6F9]/10"
                aria-hidden="true"
              />
              <div
                className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E85D4C]/40 bg-[#0B1F3A] shadow-[0_0_0_18px_rgba(244,246,249,0.04),0_28px_62px_rgba(11,31,58,0.36)]"
                aria-hidden="true"
              />
              <div className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#F4F6F9] text-[#0B1F3A] shadow-[0_20px_48px_rgba(11,31,58,0.28)]">
                <Globe2 className="size-9" aria-hidden="true" />
              </div>

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 420 360"
                role="presentation"
                aria-hidden="true"
              >
                <path
                  d="M82 112 C146 56 255 68 334 122"
                  fill="none"
                  stroke="#F4F6F9"
                  strokeOpacity="0.22"
                  strokeWidth="2"
                />
                <path
                  d="M103 232 C166 280 278 268 334 190"
                  fill="none"
                  stroke="#F4F6F9"
                  strokeOpacity="0.2"
                  strokeWidth="2"
                />
                <path
                  d="M106 112 C148 174 258 190 348 190"
                  fill="none"
                  stroke="#E85D4C"
                  strokeOpacity="0.62"
                  strokeWidth="2.4"
                />
                <path
                  d="M202 172 C190 116 226 88 286 86"
                  fill="none"
                  stroke="#3D5A73"
                  strokeOpacity="0.9"
                  strokeWidth="2"
                />
                <path
                  d="M202 172 C210 232 174 270 104 248"
                  fill="none"
                  stroke="#3D5A73"
                  strokeOpacity="0.82"
                  strokeWidth="2"
                />
              </svg>

              {networkNodes.map((node) => (
                <div
                  key={node.label}
                  className={`absolute ${node.className} flex size-16 items-center justify-center rounded-2xl border border-[#F4F6F9]/20 bg-[#F4F6F9]/10 text-sm font-bold text-[#F4F6F9] shadow-[0_18px_42px_rgba(11,31,58,0.2)] backdrop-blur`}
                >
                  {node.label}
                </div>
              ))}

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[#F4F6F9]/10 bg-[#0B1F3A]/80 p-4 backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4F6F9]/60">
                      Delivery velocity
                    </p>
                    <p className="mt-1 text-2xl font-bold text-[#F4F6F9]">
                      +42% capacity
                    </p>
                  </div>
                  <LineChart className="size-8 text-[#E85D4C]" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <InsightCard
                icon={BrainCircuit}
                label="AI workflow orchestration"
                value="Signal-based routing"
              />
              <InsightCard
                icon={UsersRound}
                label="Talent bench quality"
                value="Senior-vetted squads"
              />
              <InsightCard
                icon={CheckCircle2}
                label="Operational excellence"
                value="SLA-aligned execution"
              />
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

interface InsightCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
}

function InsightCard({ icon: Icon, label, value }: InsightCardProps) {
  return (
    <div className="rounded-[1.35rem] border border-[#F4F6F9]/10 bg-[#F4F6F9]/10 p-4 shadow-[0_18px_46px_rgba(11,31,58,0.2)] backdrop-blur">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-[#F4F6F9] text-[#0B1F3A]">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-bold leading-5 text-[#F4F6F9]">{value}</p>
          <p className="mt-1 text-xs font-medium leading-5 text-[#F4F6F9]/60">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
