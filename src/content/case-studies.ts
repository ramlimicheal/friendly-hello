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
    slug: "bibledecoder",
    index: "01",
    title: "A production Bible study platform, solo-built with AI",
    client: "BibleDecoder.sbs",
    year: "2025",
    role: "Design, Prompt Engineering, Deployment",
    cover:
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Solo-designed and deployed a live web platform for Bible study using Lovable, Cursor, and Claude — no engineering team.",
    problem:
      "Traditional Bible study tools bury context behind heavy UI. I wanted a quiet, single-column reading surface where verse-level decoding sits one tap away — and I wanted to ship it alone.",
    process: [
      "Wrote the product spec as a prompt pack — narrative, screens, edge cases, tone.",
      "Built the front end in Lovable, wired auth and storage, then extended in Cursor with Claude.",
      "Iterated on the reading typography until long sessions felt unbroken — one grid, one type scale.",
      "Deployed to a live domain and onboarded first readers within the same sprint.",
    ],
    outcome:
      "Went from empty repo to a running production platform in weeks, without hiring engineers. Proved the AI-assisted studio model I now run for clients.",
    metrics: [
      { label: "Team size", value: "1" },
      { label: "Time to production", value: "Weeks" },
      { label: "Live domain", value: "bibledecoder.sbs" },
    ],
  },
  {
    slug: "tradeforge",
    index: "02",
    title: "A trader's cockpit built on prompt engineering",
    client: "TradeForge.live",
    year: "2025",
    role: "Product Design & AI-Assisted Build",
    cover:
      "https://images.unsplash.com/photo-1642790551116-18e150f248e3?auto=format&fit=crop&w=1600&q=80",
    summary:
      "A live trading dashboard designed and shipped solo using Lovable, Cursor, and Claude — dense data, calm interface.",
    problem:
      "Retail trading tools throw every indicator on screen at once. I wanted an opinionated, glanceable cockpit where the next action is obvious and the noise is filtered out.",
    process: [
      "Mapped the trader's daily loop into three surfaces: watch, plan, review.",
      "Prompted Lovable to scaffold the app, then hand-tuned data density and spacing in Cursor.",
      "Layered generative AI into the workflow for pattern summaries and journal prompts.",
      "Cut delivery time roughly 40% versus a traditional design-then-dev pipeline.",
    ],
    outcome:
      "Deployed to a live domain as a working platform, not a mock. Second proof point for the AI-assisted studio model behind The Branding Machans.",
    metrics: [
      { label: "Delivery time", value: "−40%" },
      { label: "Team size", value: "1" },
      { label: "Live domain", value: "tradeforge.live" },
    ],
  },
  {
    slug: "astrazeneca-calquence",
    index: "03",
    title: "Launch collateral for an oncology drug across markets",
    client: "AstraZeneca — Calquence (via Indegene)",
    year: "2021 — 2022",
    role: "Associate Creative Lead",
    cover:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Directed HCP engagement, patient education, and digital detailing for AstraZeneca's oncology portfolio — including the Calquence (acalabrutinib) launch.",
    problem:
      "Multi-market pharma launches have to move fast, land clean, and clear medical-legal-regulatory review every step of the way. Design inconsistencies were slowing MLR cycles and diluting the brand.",
    process: [
      "Directed HCP engagement campaigns and patient-education assets across markets.",
      "Standardised brand guidelines across global teams to reduce MLR rework.",
      "Managed 20–25 concurrent projects and supervised 5–7 designers.",
      "Launched a mentorship program to lift creative quality and turnaround.",
    ],
    outcome:
      "Executed 12–15 digital campaigns per year, lifted engagement 15%, cut design inconsistencies 22%, and improved team quality 12% / turnaround 18%.",
    metrics: [
      { label: "Client engagement", value: "+15%" },
      { label: "Design inconsistencies", value: "−22%" },
      { label: "Turnaround speed", value: "+18%" },
    ],
  },
  {
    slug: "beehub-inmobi",
    index: "04",
    title: "A short-form news brand, later acquired by InMobi",
    client: "BEEHUB",
    year: "2019 — 2020",
    role: "Senior Art Director",
    cover:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Built the in-house visual language for a short-form news platform — every touchpoint, every department — through to acquisition.",
    problem:
      "A young news product with no established identity, shipping across app, web, social, and print with 5+ departments pulling in different directions.",
    process: [
      "Set the brand's visual language, guidelines, and collateral system.",
      "Designed marketing and comms assets across social, app store, decks, and print.",
      "Coordinated with an 8+ person cross-functional team of copywriters and motion designers.",
      "Enforced brand consistency across every surface through to the InMobi acquisition.",
    ],
    outcome:
      "Held 98% brand consistency across app, website, social, and print — through acquisition by InMobi.",
    metrics: [
      { label: "Brand consistency", value: "98%" },
      { label: "Departments served", value: "5+" },
      { label: "Exit", value: "Acquired by InMobi" },
    ],
  },
  {
    slug: "zenoti",
    index: "05",
    title: "Creative direction for a global B2B SaaS platform",
    client: "Zenoti",
    year: "2015",
    role: "Creative Director",
    cover:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Directed the full creative output for a SaaS platform serving 30,000+ businesses across 50+ countries.",
    problem:
      "A fast-scaling B2B SaaS with enterprise ambitions needed sharper sales collateral and a consistent creative bar across landing pages, decks, and campaigns.",
    process: [
      "Owned layouts, newsletters, branding, letterheads, and workshop creatives.",
      "Designed 20+ marketing pieces, landing pages, and sales decks for enterprise pitches.",
      "Led kick-off sessions and supervised a 4+ person creative team.",
      "Enforced quality control and brand consistency across every output.",
    ],
    outcome:
      "Sales and marketing shipped with a unified creative voice, used to pitch salon chains and enterprise spa groups worldwide.",
    metrics: [
      { label: "Businesses served", value: "30,000+" },
      { label: "Countries", value: "50+" },
      { label: "Sales assets shipped", value: "20+" },
    ],
  },
  {
    slug: "oneic-oman",
    index: "06",
    title: "Building a media department from zero, inside Oman",
    client: "ONEIC — Oman National Engineering & Investment Co.",
    year: "2011 — 2013",
    role: "Assistant Media Head",
    cover:
      "https://images.unsplash.com/photo-1517940310602-26535839fe84?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Founded and ran ONEIC's Media department — digital signage, video, print, and web — reporting to the CEO.",
    problem:
      "A national engineering group with no in-house media capability, and a real commercial opportunity in digital signage across public spaces.",
    process: [
      "Set up the Media department from scratch, reporting to the CEO.",
      "Produced 10+ video ads for Nawras, Omantel, and BankMuscat.",
      "Deployed a digital signage network across 50+ public locations.",
      "Rebuilt Oman National Training's identity and ONEIC's own web platforms.",
    ],
    outcome:
      "The signage network became a significant revenue stream. A 5+ person marketing and sales team was trained up on the tooling and creative pipeline.",
    metrics: [
      { label: "Signage locations", value: "50+" },
      { label: "Video ads produced", value: "10+" },
      { label: "Team trained", value: "5+" },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
