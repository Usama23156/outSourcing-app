import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { brand, pageMeta } from "@/lib/site-content";

export const metadata: Metadata = {
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's design your outsourcing strategy"
        description="Book a strategy call with our team. We'll assess your goals, identify the highest-impact opportunities, and design a delivery model built around your outcomes."
      />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#0a1a2f]">
              Get in touch
            </h2>
            <p className="mt-4 text-base leading-7 text-[#3D5A73]">
              Our enterprise advisors respond within one business day. Share your
              goals and we&apos;ll prepare a tailored outsourcing roadmap for your
              review.
            </p>
            <dl className="mt-8 space-y-5 text-[#0a1a2f]">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3D5A73]">
                  Email
                </dt>
                <dd className="mt-1 text-lg">
                  <a href={`mailto:${brand.email}`} className="hover:text-[#ee6352]">
                    {brand.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3D5A73]">
                  Phone
                </dt>
                <dd className="mt-1 text-lg">{brand.phone}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3D5A73]">
                  Office
                </dt>
                <dd className="mt-1 text-lg">{brand.address}</dd>
              </div>
            </dl>
          </div>

          <form className="rounded-2xl border border-[#0a1a2f]/10 bg-[#F4F6F9]/60 p-8">
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-medium text-[#0a1a2f]">
                Full name
                <input
                  type="text"
                  name="name"
                  className="h-12 rounded-xl border border-[#0a1a2f]/12 bg-white px-4 outline-none focus:border-[#ee6352]"
                  placeholder="Jane Smith"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#0a1a2f]">
                Work email
                <input
                  type="email"
                  name="email"
                  className="h-12 rounded-xl border border-[#0a1a2f]/12 bg-white px-4 outline-none focus:border-[#ee6352]"
                  placeholder="jane@company.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#0a1a2f]">
                Company
                <input
                  type="text"
                  name="company"
                  className="h-12 rounded-xl border border-[#0a1a2f]/12 bg-white px-4 outline-none focus:border-[#ee6352]"
                  placeholder="Your organization"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#0a1a2f]">
                How can we help?
                <textarea
                  name="message"
                  rows={4}
                  className="rounded-xl border border-[#0a1a2f]/12 bg-white px-4 py-3 outline-none focus:border-[#ee6352]"
                  placeholder="Tell us about your goals..."
                />
              </label>
              <button
                type="submit"
                className="mt-2 h-12 rounded-full bg-[#ee6352] text-base font-semibold text-white transition hover:bg-[#0a1a2f]"
              >
                Book a Strategy Call
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
