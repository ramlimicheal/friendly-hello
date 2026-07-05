import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Ramli T. Michael" },
      {
        name: "description",
        content:
          "Creative Technologist with 18+ years in brand strategy, art direction, UI/UX design, and AI-powered product development.",
      },
      { property: "og:title", content: "Resume — Ramli T. Michael" },
      {
        property: "og:description",
        content:
          "Creative Technologist with 18+ years in brand strategy, art direction, UI/UX design, and AI-powered product development.",
      },
    ],
  }),
  component: ResumePage,
});

const experience = [
  {
    period: "Mar 2022 — Present",
    role: "Founder & Creative Technologist",
    company: "The Branding Machans",
    location: "Bengaluru",
    points: [
      "Founded and scaled a branding consultancy serving 40+ SMEs, NGOs, and small businesses across India, the US, and Oman.",
      "Established brand identity systems from scratch for clients including KAYVION (US), IMS Intermodern Services (Oman), and CARRIER with Preeti — positioning, visual systems, collateral, and digital presence.",
      "Delivered 30–40 projects per year across brand identity, product UX/UI, campaign design, personalized websites, and full platform builds.",
      "Transitioned the studio into AI-powered product development — delivering functional websites, dashboards, and web apps beyond traditional brand mockups.",
      "Integrated MidJourney, Runway, and generative AI into client workflows, reducing average delivery time by 40%.",
      "Solo-designed and deployed two production web platforms (BibleDecoder.sbs, TradeForge.live) using prompt engineering, Lovable, Cursor, and Claude.",
    ],
  },
  {
    period: "Mar 2021 — Mar 2022",
    role: "Associate Creative Lead",
    company: "Indegene",
    location: "Bengaluru",
    points: [
      "Directed HCP engagement campaigns, patient education materials, and digital detailing assets for AstraZeneca's oncology portfolio, including Calquence (acalabrutinib) launch collateral across multiple markets.",
      "Produced regulatory-compliant creative for Mundipharma's therapy areas, balancing brand guidelines with medical-legal-regulatory (MLR) review requirements.",
      "Executed 12–15 digital campaigns per year across AstraZeneca, Mundipharma, and Calquence accounts, increasing client engagement by 15%.",
      "Managed 20–25 concurrent projects and supervised 5–7 designers, standardizing brand guidelines across global teams and reducing design inconsistencies by 22%.",
      "Launched a mentorship program that improved team creative quality by 12% and turnaround speed by 18%.",
    ],
  },
  {
    period: "Sep 2019 — Aug 2020",
    role: "Senior Art Director",
    company: "BEEHUB (acquired by InMobi)",
    location: "Bengaluru",
    points: [
      "Art-directed the complete in-house brand identity for a short-form news platform (later acquired by InMobi) — visual language, brand guidelines, and collateral across print and digital.",
      "Designed all marketing and communication assets including social media templates, app store creatives, internal decks, and promotional material for 5+ departments.",
      "Maintained 98% brand consistency across every touchpoint including app, website, social media, and print.",
      "Coordinated with cross-functional teams of 8+ including copywriters and motion designers to produce branded content across email, video, and digital channels.",
    ],
  },
  {
    period: "Mar 2016 — Jul 2017",
    role: "Creative Consultant",
    company: "64pxd",
    location: "Bengaluru",
    points: [
      "Developed corporate identity and brand systems for 10+ concurrent clients from concept to production.",
      "Delivered client presentations independently, managing merchandising, aftercare, and long-term product planning.",
      "Mentored junior designers on design thinking methodology, improving team output quality.",
    ],
  },
  {
    period: "Jul 2015 — Dec 2015",
    role: "Creative Director",
    company: "Zenoti",
    location: "Bengaluru",
    points: [
      "Directed the complete creative output for a B2B SaaS platform serving 30,000+ businesses in 50+ countries — layouts, newsletters, branding, letterheads, and workshop creatives.",
      "Designed 20+ marketing collateral pieces, landing pages, and sales decks used to pitch salon chains and enterprise spa groups.",
      "Led creative sessions for project kick-offs and supervised a creative team of 4+, enforcing quality control and brand consistency across all output.",
    ],
  },
  {
    period: "Jul 2014 — Feb 2015",
    role: "Senior Creative Designer / Team Lead",
    company: "Trivone Content Services",
    location: "Bengaluru",
    points: [
      "Led a design team of 6+ across Bangalore and Mumbai offices for a content marketing agency serving IT/ITeS, BFSI, Telecom, Media, and Government clients.",
      "Designed 15+ corporate presentations, white papers, and microsites for Vodafone and Airtel.",
      "Produced social media content and campaign collateral for Star Network, Kaya Skin Clinic, Power2SME, and contributed creative assets for Satyamev Jayate, Digital India, and MyGov.in campaigns.",
      "Managed client relationships, project schedules, and quality sign-off across both offices.",
    ],
  },
  {
    period: "Aug 2013 — Jun 2014",
    role: "Founder & Creative Director",
    company: "Creating Concepts & Developing Designs",
    location: "Bengaluru",
    points: [
      "Founded a design agency delivering customized branding and digital solutions for hospitals, hotels, and Indian SMEs.",
      "Developed brand identities, marketing collateral, websites, and customized applications for 15+ clients across healthcare and hospitality.",
      "Presented design concepts to clients, trained designers on e-commerce development, and ensured all artwork met brand values and project requirements.",
    ],
  },
  {
    period: "Apr 2011 — Jul 2013",
    role: "Assistant Media Head",
    company: "ONEIC (Oman National Engineering & Investment Co.)",
    location: "Muscat, Oman",
    points: [
      "Founded and built the ONEIC Media department from scratch, reporting directly to the CEO — overseeing digital signage, in-house creatives, brochures, print, and digital media production.",
      "Produced 10+ video advertisements for Nawras, Omantel, and BankMuscat, deployed on digital signage screens at electricity bill payment counters, malls, and public spaces across Oman.",
      "Established a digital signage network across 50+ locations that became a significant revenue stream for the organization.",
      "Redesigned the brand identity for Oman National Training and rebuilt the ONEIC website and all internal platforms.",
      "Trained a team of 5+ marketing and sales professionals on latest design software, and managed all in-house print and digital media output.",
    ],
  },
  {
    period: "Jan 2009 — Jan 2011",
    role: "Senior Visual Designer",
    company: "Ladder Design Studio",
    location: "Bengaluru",
    points: [
      "Built 15+ brand identities from scratch including logos, color systems, typography, and guidelines — delivered across branding, web, print, and digital channels.",
      "Designed websites, brochures, flyers, posters, and packaging for 10+ concurrent clients.",
      "Mentored junior designers on UX principles and presented design concepts to clients directly.",
    ],
  },
  {
    period: "Feb 2008 — Jan 2009",
    role: "Visual Designer",
    company: "Oxelon Studios",
    location: "Bengaluru",
    points: [
      "Managed a 3-person creative team handling art direction, press checks, photography shoots, production schedules, and budgets.",
      "Delivered print, identity, packaging, web design, web apps, online ads, rich media, and CD-ROM projects.",
      "Led creative conception for online advertising and website development.",
      "Won Best UI Designer at the Madurai District Web Designing Competition.",
    ],
  },
];

const education = [
  {
    year: "2007",
    degree: "B.B.A., Marketing Management",
    school: "SS International University, Tamil Nadu",
  },
  {
    year: "2005 — 2007",
    degree: "Graphic Design (AGD), Web Design (AWD), Certified Programme (ACP)",
    school: "Animaster College of Animation & Design",
  },
];

const certifications = [
  { year: "2026", label: "Vibe Coding L4: Platinum — Lovable" },
  { year: "2025", label: "Generative AI for Educators — Google" },
  { year: "2025", label: "Design Sprint Professional (DSPC) — Certiprof" },
  { year: "2023", label: "UX Design Foundations — Uxcel" },
  { year: "—", label: "Project Management Essentials (PMEC) — MSI" },
  { year: "—", label: "Fundamentals of Digital Marketing — Google" },
];

const skillGroups = [
  {
    title: "Design & UX",
    items:
      "UI/UX Design, Figma, Adobe Photoshop, Illustrator, XD, After Effects, InDesign, Premiere Pro, Sketch, InVision, Axure, Proto.io, Wireframing, Prototyping, Information Architecture",
  },
  {
    title: "AI & Vibe Coding",
    items:
      "Vibe Coding, Prompt Engineering, AI Platform Design, Generative AI Workflows, LLM-Assisted Development, Cursor, Windsurf, Claude, ChatGPT, Lovable",
  },
  {
    title: "Motion & Production",
    items:
      "Motion Graphics, Sound Design, Print Production, Digital Signage, MidJourney, Runway",
  },
  {
    title: "Brand & Strategy",
    items:
      "Brand Strategy, Art Direction, Visual Identity Systems, Campaign Design, Typography, Color Theory, CRO, Layout Design",
  },
  {
    title: "Leadership",
    items:
      "Team Leadership, Client Strategy, Cross-Functional Collaboration, Agile, Budget Management, Vendor Negotiation",
  },
];

function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground animate-fade-in [animation-duration:600ms]">
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <div className="flex items-center justify-between animate-fade-in">
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            data-magnetic
          >
            ← Back
          </Link>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Resume — 2026
          </p>
        </div>

        <header className="mt-16 animate-fade-in">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
            Ramli T. Michael
          </h1>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            Creative Technologist · Bengaluru, India
          </p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            18+ years in brand strategy, art direction, UI/UX design, and AI-powered product development.
            Led creative teams across Bengaluru, Mumbai, and Muscat for AstraZeneca, Vodafone, Airtel, and Zenoti.
            Founded two creative studios. Designed and deployed two production web platforms using prompt
            engineering and AI-assisted development. Lovable L4 Platinum certified.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="mailto:hiremike.lee@gmail.com"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
              data-magnetic
            >
              hiremike.lee@gmail.com
            </a>
            <a
              href="tel:+919731345524"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              +91 9731345524
            </a>
            <a
              href="https://linkedin.com/in/ramli-michael-6662b133"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              linkedin.com/in/ramli-michael-6662b133
            </a>
            <a
              href="https://bibledecoder.sbs"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              bibledecoder.sbs
            </a>
            <a
              href="https://tradeforge.live"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              tradeforge.live
            </a>
          </div>
        </header>

        <Section title="Experience">
          <div className="grid gap-16">
            {experience.map((job) => (
              <article
                key={job.role + job.company}
                className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-10"
              >
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
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

        <Section title="Education">
          <div className="grid gap-4">
            {education.map((e) => (
              <div
                key={e.degree}
                className="grid grid-cols-[110px_1fr] items-baseline gap-6 border-t border-border py-4"
              >
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {e.year}
                </span>
                <div>
                  <p className="text-sm sm:text-base">{e.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Certifications">
          <div className="grid gap-4">
            {certifications.map((r) => (
              <div
                key={r.label}
                className="grid grid-cols-[80px_1fr] items-baseline gap-6 border-t border-border py-4"
              >
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {r.year}
                </span>
                <span className="text-sm sm:text-base">{r.label}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Skills">
          <div className="grid gap-6">
            {skillGroups.map((g) => (
              <div
                key={g.title}
                className="grid gap-2 border-t border-border py-4 md:grid-cols-[180px_1fr] md:gap-10"
              >
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {g.title}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {g.items}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Contact">
          <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base">
            <a
              href="mailto:hiremike.lee@gmail.com"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
              data-magnetic
            >
              hiremike.lee@gmail.com
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
      <h2 className="mb-10 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}
