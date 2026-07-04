export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  client: string;
  year: string;
  role: string;
  cover: string;
  summary: string;
  problem: string;
  process: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "atlas-fintech",
    index: "01",
    title: "Rebuilding trust for a challenger bank",
    client: "Atlas Financial",
    year: "2025",
    role: "Brand & Product Design",
    cover:
      "https://images.unsplash.com/photo-1642132652803-01f9738d286a?auto=format&fit=crop&w=1600&q=80",
    summary:
      "A ground-up identity and product system for a mobile-first bank breaking into the European market.",
    problem:
      "Atlas was launching in seven markets with no coherent brand system. Their prototype felt like six different apps stitched together, and pilot users dropped off before completing KYC.",
    process: [
      "Interviewed 22 pilot users across three countries to map dropout points.",
      "Rebuilt the design language from typography up — one grid, one motion spec, one color story.",
      "Shipped a component library in Figma + code so engineering could move without asking design.",
      "Ran a two-week usability study on the redesigned onboarding before public launch.",
    ],
    outcome:
      "Launch onboarding completion rose from 41% to 78%. Atlas hit 100k verified accounts inside eight weeks of going live.",
    metrics: [
      { label: "Onboarding completion", value: "+37 pts" },
      { label: "Time to first transfer", value: "−52%" },
      { label: "App store rating", value: "4.8" },
    ],
  },
  {
    slug: "north-studio",
    index: "02",
    title: "A quiet portfolio for a loud studio",
    client: "North Studio",
    year: "2024",
    role: "Web Design & Direction",
    cover:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1600&q=80",
    summary:
      "An editorial site for an award-winning film studio that lets the work speak first.",
    problem:
      "North's old site buried award-winning work behind heavy chrome. Prospective clients bounced before reaching the reel.",
    process: [
      "Audited 8 competing studio sites and every North case study.",
      "Reduced the site to four pages with type-driven layouts and full-bleed reels.",
      "Wrote every page in the client's voice — no agency jargon.",
      "Optimised for shareable case-study URLs so posts on X and LinkedIn become entry points.",
    ],
    outcome:
      "Inbound qualified leads doubled in the first quarter after launch. Two of the new leads became six-figure retainers.",
    metrics: [
      { label: "Qualified inbound", value: "×2.1" },
      { label: "Avg. time on case study", value: "3m 40s" },
      { label: "Lighthouse performance", value: "99" },
    ],
  },
  {
    slug: "hearth-app",
    index: "03",
    title: "Turning a wellness app into a daily ritual",
    client: "Hearth",
    year: "2024",
    role: "Product Design",
    cover:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Redesigned Hearth's core loop to move users from occasional check-ins to daily practice.",
    problem:
      "Retention past week two was under 8%. The app had lots of content but no reason to come back on a Tuesday morning.",
    process: [
      "Built a Jobs-to-be-Done map of the first 14 days.",
      "Introduced a lightweight daily thread — 60 seconds, no streak pressure.",
      "Redesigned the home screen around the current day, not the content library.",
      "Shipped in three fortnightly releases with in-product experiments.",
    ],
    outcome:
      "Day-30 retention tripled. Hearth closed a Series A five months later on the strength of the new engagement curve.",
    metrics: [
      { label: "Day-30 retention", value: "×3.1" },
      { label: "Daily active sessions", value: "+180%" },
      { label: "NPS", value: "62" },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
