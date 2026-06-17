export const brand = {
  name: "Apex Vector",
  tagline: "Technology outsourcing engineered for measurable growth.",
  email: "hello@apexvector.com",
  phone: "+1 (888) 482-7384",
  address: "1200 Enterprise Plaza, Austin, TX 78701",
} as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#insights", label: "Insights" },
  { href: "#book-strategy-call", label: "Contact" },
] as const;

export const strategicStats = [
  { value: 150, suffix: "+", label: "Specialists deployed" },
  { value: 98, suffix: "%", label: "Client retention rate" },
  { value: 72, suffix: "hr", label: "Average team activation" },
  { value: 4.9, suffix: "/5", label: "Delivery satisfaction", decimals: 1 },
] as const;

export const services = [
  {
    title: "Web Development",
    description:
      "Enterprise-grade product engineering with scalable architecture, modern stacks, and continuous delivery pipelines built for long-term performance.",
    icon: "code",
  },
  {
    title: "Performance Marketing",
    description:
      "Full-funnel acquisition systems with attribution clarity, creative testing frameworks, and ROI accountability across every channel.",
    icon: "chart",
  },
  {
    title: "Lead Generation",
    description:
      "Precision outbound and inbound engines that deliver qualified pipeline — not vanity metrics — aligned to your revenue targets.",
    icon: "target",
  },
  {
    title: "Dedicated Teams",
    description:
      "Embedded squads of vetted specialists who operate as an extension of your organization with clear ownership and SLAs.",
    icon: "users",
  },
  {
    title: "Business Process Outsourcing",
    description:
      "Operational workflows redesigned for efficiency, compliance, and scale — from customer operations to back-office execution.",
    icon: "workflow",
  },
  {
    title: "Digital Transformation",
    description:
      "End-to-end modernization programs that connect strategy, technology, and change management into one coherent reinvention roadmap.",
    icon: "sparkles",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We map your operating model, growth constraints, and success metrics to define a precise outsourcing blueprint.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "A tailored delivery architecture — team structure, tooling, KPIs, and governance — designed for enterprise accountability.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "Dedicated specialists activate within 72 hours, integrated into your workflows with transparent reporting from day one.",
  },
  {
    step: "04",
    title: "Optimization",
    description:
      "Continuous performance reviews, process refinement, and capability expansion to compound results quarter over quarter.",
  },
] as const;

export const industries = [
  {
    name: "Healthcare",
    description: "HIPAA-aware operations, patient acquisition, and digital care platforms.",
  },
  {
    name: "Real Estate",
    description: "Lead engines, CRM automation, and high-converting property marketing systems.",
  },
  {
    name: "SaaS",
    description: "Product velocity, growth marketing, and customer success at scale.",
  },
  {
    name: "Finance",
    description: "Compliance-ready workflows, demand generation, and secure digital experiences.",
  },
  {
    name: "E-commerce",
    description: "Conversion optimization, retention programs, and omnichannel performance.",
  },
] as const;

export const caseStudies = [
  {
    client: "Northline Health Systems",
    industry: "Healthcare",
    headline: "Reduced patient acquisition cost by 38% in six months",
    metrics: [
      { label: "CAC reduction", value: "38%" },
      { label: "Pipeline growth", value: "2.4×" },
      { label: "Time to launch", value: "21 days" },
    ],
    summary:
      "A dedicated growth squad rebuilt acquisition workflows, implemented attribution modeling, and deployed AI-assisted campaign optimization across paid and organic channels.",
  },
  {
    client: "Meridian SaaS Group",
    industry: "SaaS",
    headline: "Scaled product delivery from 2 to 6 release cycles per quarter",
    metrics: [
      { label: "Release velocity", value: "3×" },
      { label: "Defect rate", value: "-47%" },
      { label: "Team ramp", value: "72 hrs" },
    ],
    summary:
      "Embedded engineering and QA specialists integrated with internal product teams, establishing CI/CD discipline and a performance-driven delivery framework.",
  },
  {
    client: "Atlas Property Partners",
    industry: "Real Estate",
    headline: "Generated 1,200 qualified leads monthly with 31% conversion lift",
    metrics: [
      { label: "Monthly leads", value: "1.2K" },
      { label: "Conversion lift", value: "31%" },
      { label: "ROI", value: "4.8×" },
    ],
    summary:
      "Performance marketing and lead generation teams built a multi-market acquisition engine with CRM automation and real-time pipeline analytics.",
  },
] as const;

export const advantages = [
  {
    title: "Enterprise-grade delivery",
    description:
      "Governance, security practices, and SLA-backed execution designed for organizations that cannot afford operational variance.",
  },
  {
    title: "Dedicated teams, not freelancers",
    description:
      "Long-term embedded squads with domain expertise, cultural alignment, and direct accountability to your business outcomes.",
  },
  {
    title: "Performance-driven model",
    description:
      "We measure success by revenue impact, cost efficiency, and operational KPIs — not hours billed or tickets closed.",
  },
  {
    title: "AI-assisted operations",
    description:
      "Intelligent automation woven into workflows to accelerate delivery, improve decision quality, and reduce manual overhead.",
  },
] as const;

export const insights = [
  {
    category: "Research Report",
    title: "The outsourcing maturity model for high-growth enterprises",
    readTime: "8 min read",
    date: "Jun 2026",
  },
  {
    category: "Perspective",
    title: "Why dedicated teams outperform project-based outsourcing",
    readTime: "6 min read",
    date: "May 2026",
  },
  {
    category: "Case Study",
    title: "How a SaaS company tripled release velocity in 90 days",
    readTime: "10 min read",
    date: "Apr 2026",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Apex Vector didn't just staff our team — they rebuilt how we measure delivery. Within one quarter, our cost per acquisition dropped and our engineering throughput doubled.",
    author: "Sarah Chen",
    role: "Chief Operating Officer",
    company: "Northline Health Systems",
  },
  {
    quote:
      "The level of strategic rigor is what sets them apart. Every engagement comes with clear KPIs, executive reporting, and specialists who actually understand our industry.",
    author: "Marcus Webb",
    role: "VP of Growth",
    company: "Meridian SaaS Group",
  },
  {
    quote:
      "We evaluated five outsourcing partners. Apex Vector was the only one that proposed a performance-based model tied to our revenue targets, not their headcount.",
    author: "Elena Rodriguez",
    role: "Managing Director",
    company: "Atlas Property Partners",
  },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "YouTube", href: "https://youtube.com" },
] as const;
