import { createFileRoute, Link } from "@tanstack/react-router";

const clients = [
  "AstraZeneca",
  "Vodafone",
  "Airtel",
  "Zenoti",
  "InMobi",
  "Mundipharma",
  "Omantel",
  "BankMuscat",
  "Nawras",
  "Star Network",
  "Kaya",
  "Power2SME",
];

const projects = [
  {
    name: "Bible Decoder",
    year: "2024",
    tags: ["AI platform", "Product design", "Vibe coding"],
    copy: "An AI-assisted scripture exploration product shaped from concept, prompting flows, interface direction, and live platform execution.",
  },
  {
    name: "TradeForge",
    year: "2024",
    tags: ["Trading UX", "AI workflows", "Frontend"],
    copy: "A market-facing product experience for strategy, signals, and workflow clarity across fast-moving trading decisions.",
  },
  {
    name: "Enterprise Brand Systems",
    year: "2008 → Now",
    tags: ["Brand strategy", "Art direction", "Campaigns"],
    copy: "Identity systems, digital campaigns, print production, motion, and conversion-led visual design for global and regional brands.",
  },
];

const capabilities = [
  "Brand strategy",
  "Art direction",
  "UI/UX design",
  "AI platform design",
  "Generative workflows",
  "Prompt engineering",
  "Campaign design",
  "Motion graphics",
  "Creative leadership",
  "CRO",
  "Typography",
  "Product development",
];

const timeline = [
  ["Independent Studio", "Founder / Creative Technologist", "2008 → Now"],
  ["Iris Interactive", "Creative Lead", "2011 → 2016"],
  ["Maverick", "Creative Technologist", "2016 → 2019"],
  ["TradeForge", "Creative Director", "2019 → 2024"],
  ["AI Product Studio", "Founder", "2024 → Now"],
];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a className="text-sm font-semibold tracking-normal" href="#top">
            Ramli T. Michael
          </a>
          <div className="hidden items-center gap-6 text-xs font-medium uppercase tracking-normal text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#work">
              Work
            </a>
            <a className="transition-colors hover:text-foreground" href="#capabilities">
              Capabilities
            </a>
            <Link className="transition-colors hover:text-foreground" to="/resume">
              Resume
            </Link>
            <a className="transition-colors hover:text-foreground" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="mb-5 text-sm font-medium text-primary">Bengaluru, India · Available for AI + brand systems</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-none tracking-normal md:text-7xl lg:text-8xl">
            Creative Technologist and Brand Strategist
          </h1>
        </div>
        <div className="space-y-8 lg:pb-2">
          <p className="text-xl leading-8 text-muted-foreground md:text-2xl md:leading-9">
            I partner with founders, enterprises, and NGOs to turn brand strategy, art direction, UI/UX design, and AI-powered workflows into market-ready digital products.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90" href="mailto:hiremike.lee@gmail.com">
              Start a project
            </a>
            <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:bg-accent" to="/resume">
              View resume
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-8">
          <Stat label="Experience" value="18+ years" />
          <Stat label="Cities" value="BLR · BOM · Muscat" />
          <Stat label="Focus" value="Brand + AI" />
          <Stat label="Mode" value="Strategy to ship" />
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium text-primary">Selected work</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal md:text-6xl">
              Platforms, campaigns, and systems built for clarity.
            </h2>
          </div>
          <Link className="text-sm font-semibold text-primary underline-offset-4 hover:underline" to="/work">
            Browse case studies
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {projects.map((project) => (
            <article className="bg-background p-6 md:p-8" key={project.name}>
              <div className="mb-10 flex items-center justify-between text-sm text-muted-foreground">
                <span>{project.year}</span>
                <span>{project.tags[0]}</span>
              </div>
              <h3 className="text-2xl font-semibold tracking-normal">{project.name}</h3>
              <p className="mt-4 min-h-28 text-sm leading-6 text-muted-foreground">{project.copy}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="border-y border-border/60 bg-muted/20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-medium text-primary">Capabilities</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-normal md:text-5xl">
              A creative operator across brand, product, and AI execution.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {capabilities.map((capability) => (
              <div className="bg-background p-4 text-sm font-medium md:p-5" key={capability}>
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="mb-3 text-sm font-medium text-primary">Experience</p>
          <h2 className="text-4xl font-semibold leading-tight tracking-normal md:text-5xl">
            Led creative and product work across Bengaluru, Mumbai, and Muscat.
          </h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {timeline.map(([company, role, years]) => (
            <div className="grid gap-2 py-5 md:grid-cols-[1fr_1fr_auto] md:items-center" key={`${company}-${years}`}>
              <p className="font-semibold">{company}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
              <p className="text-sm text-muted-foreground">{years}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <p className="mb-8 text-sm font-medium text-primary">Selected clients</p>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4 lg:grid-cols-6">
            {clients.map((client) => (
              <div className="bg-background p-4 text-sm font-semibold text-muted-foreground md:p-5" key={client}>
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-medium text-primary">Contact</p>
          <h2 className="text-4xl font-semibold leading-tight tracking-normal md:text-6xl">
            Let’s build a brand, interface, or AI-powered product that can ship.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90" href="mailto:hiremike.lee@gmail.com">
              hiremike.lee@gmail.com
            </a>
            <a className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:bg-accent" href="https://linkedin.com/in/ramli-michael-6662b133" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:bg-accent" href="https://bibledecoder.sbs" rel="noreferrer" target="_blank">
              Bible Decoder
            </a>
            <a className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:bg-accent" href="https://tradeforge.live" rel="noreferrer" target="_blank">
              TradeForge
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-normal text-muted-foreground">{label}</p>
      <p className="mt-2 text-xl font-semibold tracking-normal md:text-2xl">{value}</p>
    </div>
  );
}