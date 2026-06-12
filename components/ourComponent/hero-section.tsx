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
import Image from "next/image";
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
    <section className="min-h-screen overflow-hidden bg-[#F4F6F9] text-[#1A2332]  ">
       <Image
        src="/hero-background-enterprise.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <div
          className="absolute inset-x-0 top-0 z-0 h-80 bg-[radial-gradient(circle_at_18%_18%,rgba(61,90,115,0.18),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(11,31,58,0.14),transparent_30%)]"
          aria-hidden="true"
        />


        <div className="relative z-10 grid flex-1 items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-10">
          <div className="mx-auto max-w-3xl text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 lg:mx-0 lg:text-left pl-10">
           

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

         

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-full bg-[#E85D4C] px-7 text-base font-bold text-[#F4F6F9] shadow-[0_20px_46px_rgba(232,93,76,0.28)] hover:bg-[#0B1F3A] hover:text-[#F4F6F9] focus-visible:ring-[#E85D4C]/35 sm:w-auto"
              >
                <a href="#book-strategy-call" aria-label="Book a strategy call">
                  Book a Strategy Call
                  
                </a>
              </Button>
              <p
                className="h-14 w-full flex justify-center items-center px-7 text-base font-bold text-[#0B1F3A]   hover:text-[#0B1F3A] focus-visible:ring-[#E85D4C]/35 sm:w-auto"
              >
                <a href="#how-it-works">See How It Works
                </a>
                  <ArrowRight className="size-5" aria-hidden="true" />
              </p>
            </div>
          </div>

       
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
