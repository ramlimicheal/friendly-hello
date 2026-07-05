import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Nexus" },
      { name: "description", content: "Experience, capabilities, and selected recognition." },
      { property: "og:title", content: "Resume — Nexus" },
      { property: "og:description", content: "Experience, capabilities, and selected recognition." },
    ],
  }),
  component: ResumePage,
});

const experience = [
  {
    period: "2023 — Present",
    role: "Independent Design Partner",
    company: "Nexus Studio",
    location: "Remote",
    points: [
      "Lead brand and product design for early-stage fintech and SaaS teams.",
      "Ship end-to-end systems: identity, product UI, marketing site, motion spec.",
      "Retainers with 3 seed–Series A companies; 2 acquired in 2025.",
    ],
  },
  {
    period: "2020 — 2023",
    role: "Senior Product Designer",
    company: "North Studio",
    location: "London, UK",
    points: [
      "Owned design for a 4-market challenger bank rollout.",
      "Raised onboarding completion from 41% → 78% inside one quarter.",
      "Built the studio's shared component library in Figma + code.",
    ],
  },
  {
    period: "2017 — 2020",
    role: "Product Designer",
    company: "Hearth",
    location: "Berlin, DE",
    points: [
      "Redesigned the core wellness loop; day-30 retention tripled.",
      "Shipped in fortnightly releases with in-product experiments.",
      "Partnered with research to run 40+ moderated usability studies.",
    ],
  },
];

const capabilities = [
  "Brand & Identity Systems",
  "Product & Interaction Design",
  "Design Systems in Figma + Code",
  "Motion & Prototyping",
  "Research & Usability Testing",
  "Editorial Web Design",
];

const recognition = [
  { year: "2025", label: "Awwwards — Site of the Day, Atlas Financial" },
  { year: "2024", label: "FWA — Best Portfolio, North Studio" },
  { year: "2024", label: "CSS Design Awards — UI/UX, Hearth" },
  { year: "2022", label: "Fast Company — Innovation by Design, finalist" },
];

function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <div className="flex items-center justify-between animate-fade-in">
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            data-magnetic
          >
            ← Back
          </Link>
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Resume — 2026
          </p>
        </div>

        <header className="mt-16 animate-fade-in">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
            Designer building quiet products that move numbers.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nine years designing brand and product systems for fintech, wellness, and studio-scale teams.
            Currently taking on two projects per quarter.
          </p>
        </header>

        <Section title="Experience">
          <div className="grid gap-16">
            {experience.map((job) => (
              <article
                key={job.role + job.company}
                className="grid gap-4 md:grid-cols-[160px_1fr] md:gap-10"
              >
                <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  {job.period}
                </span>
                <div>
                  <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                    {job.role} <span className="text-muted-foreground">· {job.company}</span>
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>
                  <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 h-px w-3 shrink-0 bg-border" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Capabilities">
          <ul className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((c) => (
              <li
                key={c}
                className="border-t border-border py-3 text-sm tracking-tight text-muted-foreground transition-colors hover:text-foreground sm:text-base"
              >
                {c}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Recognition">
          <div className="grid gap-4">
            {recognition.map((r) => (
              <div
                key={r.label}
                className="grid grid-cols-[80px_1fr] items-baseline gap-6 border-t border-border py-4"
              >
                <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  {r.year}
                </span>
                <span className="text-sm sm:text-base">{r.label}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Contact">
          <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base">
            <a
              href="mailto:hello@nexus.studio"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
              data-magnetic
            >
              hello@nexus.studio
            </a>
            <span className="text-muted-foreground">·</span>
            <Link
              to="/work"
              className="text-muted-foreground transition-colors hover:text-foreground"
              data-magnetic
            >
              Selected work →
            </Link>
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-24 animate-fade-in">
      <h2 className="mb-10 text-xs uppercase tracking-[0.24em] text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}
