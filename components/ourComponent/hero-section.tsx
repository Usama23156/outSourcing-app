import Image from "next/image";

import { SiteHeader } from "@/components/ourComponent/site-header";
import { WaveDivider } from "@/components/ourComponent/wave-divider";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0C71C3]">
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
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,39,53,0.66)_0%,rgba(0,55,150,0.66)_99%)]"
        aria-hidden="true"
      />

      <SiteHeader />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-36 sm:px-8 sm:pb-36 sm:pt-40 lg:px-10 lg:pb-44 lg:pt-44">
        <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-[65px] lg:leading-[1.05]">
          Outsourced
        </h1>
      </div>

      <WaveDivider className="absolute inset-x-0 bottom-0 z-10" />
    </section>
  );
}
