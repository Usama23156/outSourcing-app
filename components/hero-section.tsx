import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

function HeroWaveDivider() {
  return (
    <div
      className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-[100px] w-full overflow-hidden leading-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1280 140"
        preserveAspectRatio="none"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#F4F6F9">
          <path
            d="M1280 0 1014 91.52a72.59 72.59 0 0 1-30.76 3.71L0 0v140h1280z"
            fillOpacity="0.5"
          />
          <path d="M1280 0 1017.9 116.26a73.29 73.29 0 0 1-39.09 6L0 0v140h1280z" />
        </g>
      </svg>
    </div>
  );
}

export function HeroSection() {
  return (
    <>
      <section
        id="top"
        className="relative min-h-[min(100vh,920px)] overflow-hidden text-white"
      >
        <Image
          src="/hero-outsourced-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.82)_0%,rgba(61,90,115,0.74)_99%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex min-h-[min(100vh,920px)] w-full max-w-[1200px] flex-col px-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between py-8 lg:py-10">
            <a
              href="#top"
              className="inline-flex items-center gap-3"
              aria-label="Apex Vector home"
            >
              <Logo
                size={34}
                concept="hero-mountain-node"
                className="brightness-0 invert"
              />
              <span className="text-sm font-semibold tracking-[0.12em] uppercase text-white">
                Apex Vector
              </span>
            </a>
            <nav
              className="hidden items-center gap-10 text-sm font-medium text-white/85 md:flex"
              aria-label="Primary"
            >
              <a href="#how-it-works" className="transition hover:text-white">
                How it works
              </a>
              <a href="#book-strategy-call" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </header>

          <div className="flex flex-1 items-center pb-36 pt-8 sm:pb-40 lg:pt-4">
            <div className="max-w-3xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700">
              <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.25rem]">
                Outsourced
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-base leading-8 text-white/88 sm:text-lg">
                Apex Vector&apos;s outsourced delivery model becomes an extension
                of your organisation — a dedicated execution layer with vetted
                specialists, measurable outcomes, and enterprise-grade
                accountability built in.
              </p>
              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-sm border-2 border-white bg-transparent px-7 text-sm font-semibold tracking-[0.08em] uppercase text-white hover:bg-white hover:text-[#0B1F3A]"
                >
                  <a href="#book-strategy-call" aria-label="Book a strategy call">
                    Get in touch
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <HeroWaveDivider />
      </section>

      <section className="bg-[#F4F6F9] px-6 py-16 text-[#1A2332] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <p className="max-w-3xl text-base leading-8 text-[#3D5A73] sm:text-lg">
            Imagine a recruiting and delivery department seamlessly integrated
            into your team — offering efficiency, expertise, and a tailored
            approach designed around your operating model. That is the standard
            Apex Vector holds for every outsourced engagement.
          </p>
        </div>
      </section>
    </>
  );
}
