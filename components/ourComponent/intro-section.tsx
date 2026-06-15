import { ChevronDown } from "lucide-react";

const features = [
  {
    title: "1. Your Dedicated Recruiting Department",
    description:
      "We become an extension of your organisation, serving as your dedicated recruiting department. Every aspect of the recruitment process is handled with precision and care.",
  },
  {
    title: "2. Full Responsibility for Results",
    description:
      "By choosing our outsourced service, you place the responsibility for results on our shoulders. We are committed to delivering top-tier talent and meeting your hiring goals.",
  },
  {
    title: "3. Milestone-Based Invoice Structure",
    description:
      "Transparency is at the core of our service. Track progress and align payments with key milestones throughout the recruitment process.",
  },
  {
    title: "4. Time-Saving Solution",
    description:
      "Focus on your core business while we handle the intricacies of recruitment, enabling you to invest time and resources where they matter most.",
  },
  {
    title: "5. Unique Model and Fee Structure",
    description:
      "Whether you are a startup building a team or an established enterprise seeking specialised talent, our model adapts to align seamlessly with your requirements.",
  },
];

export function IntroSection() {
  return (
    <section className="bg-[#f4f4f4] pb-20 pt-10 sm:pt-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-base leading-7 text-[#333333] sm:text-lg sm:leading-8">
            Apex Vector&apos;s Outsourced Recruitment Service is designed to take
            the reins of your entire recruitment function. Imagine having a
            dedicated recruiting department seamlessly integrated into your
            organisation, offering efficiency, expertise, and a tailored approach
            to meet your specific needs.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-[#1A2332]">
            Core Features of Our Outsourced Recruitment Service
          </h2>
        </div>

        <div className="mt-8 max-w-3xl space-y-3">
          {features.map((feature, index) => (
            <details
              key={feature.title}
              className="group overflow-hidden rounded-sm bg-white shadow-sm"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left text-lg font-bold text-[#0C71C3] marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{feature.title}</span>
                <ChevronDown
                  className="size-5 shrink-0 text-[#0C71C3] transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="border-t border-[#f4f4f4] px-5 pb-5 pt-4 text-base leading-7 text-[#333333]">
                {feature.description}
              </div>
            </details>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-base leading-7 text-[#333333]">
          Please contact us for further information or a confidential discussion.
        </p>
      </div>
    </section>
  );
}
