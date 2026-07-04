import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Download, Linkedin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Johnny Quattro — Website Designer & Brand Strategist" },
      {
        name: "description",
        content:
          "Johnny Quattro helps startups and enterprises create meaningful connections between their products and customers through ethical, thoughtful design.",
      },
      { property: "og:title", content: "Johnny Quattro — Website Designer & Brand Strategist" },
      {
        property: "og:description",
        content:
          "Independent designer based in London. 11 years of experience across Google, Meta, PayPal.",
      },
    ],
  }),
  component: Index,
});

const projects = [
  { title: "Remix Supply", tags: ["UI/UX", "SEO", "BRA"], year: "'24" },
  { title: "Nitro", tags: ["UI/UX", "SEO"], year: "'24" },
  { title: "Bravo", tags: ["UI/UX", "SEO", "UX"], year: "2024" },
  { title: "Hanzo", tags: ["BRA"], year: "2024" },
  { title: "Haze", tags: ["UI/UX", "SEO"], year: "2024" },
];

const experience = [
  { company: "Quattro Inc.", role: "Founder", period: "2011 → Now" },
  { company: "Google", role: "Design Lead", period: "2011 → 2016" },
  { company: "Meta", role: "Product Designer", period: "2016 → 2018" },
  { company: "PayPal", role: "Senior Designer", period: "2018 → 2024" },
  { company: "Hanzo Co.", role: "Founder", period: "2020 → Now" },
];

const services = [
  {
    n: "01",
    title: "Web Design",
    body: "We'll find the best visual way to export your story into a fine digital experience.",
    tags: ["4 000+", "1 → 3d"],
  },
  {
    n: "02",
    title: "Framer Development",
    body: "Your website is built, optimized, ran by CMS, and one click away from being published.",
    tags: ["2 000+", "1 → 5d"],
  },
  {
    n: "03",
    title: "Brand Identity",
    body: "A distinct visual language — logo, type, color, and system — for teams that care.",
    tags: ["6 000+", "2 → 4w"],
  },
  {
    n: "04",
    title: "Art Direction",
    body: "Guidance across campaigns, photography and motion so every touchpoint feels intentional.",
    tags: ["3 000+", "1 → 2w"],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70">
        <nav className="mx-auto max-w-6xl px-6 md:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="text-sm font-semibold tracking-tight">
            Johnny Quattro
          </Link>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 pt-16 md:pt-24 pb-20">
        <div className="flex items-start gap-4 mb-16">
          <div className="h-10 w-10 rounded-full bg-muted shrink-0" aria-hidden />
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            I connect with creators and builders to design new stunning Framer websites,
            creating goals and delivering the message.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
              Website Designer
              <br />
              <span className="text-muted-foreground">and </span>
              <span>Brand Strategist</span>
            </h1>

            <div className="mt-10 flex flex-wrap gap-x-14 gap-y-2 text-sm text-muted-foreground">
              <div>
                <div className="uppercase tracking-widest text-xs mb-1">Location</div>
                <div className="text-foreground">London, UK</div>
              </div>
              <div>
                <div className="uppercase tracking-widest text-xs mb-1">EST</div>
                <div className="text-foreground">(GMT +1)</div>
              </div>
            </div>

            <p className="mt-10 text-base text-muted-foreground leading-relaxed max-w-md">
              Johnny helps startups and enterprises create meaningful connections between
              their products and customers. With a focus on ethical practices, he streamlines
              publishing workflows and empowers businesses to achieve their goals while
              fostering lasting customer engagement.
            </p>

            <div className="mt-14 flex items-center gap-8 text-sm">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-b border-border pb-1 hover:border-foreground transition-colors uppercase tracking-widest text-xs"
              >
                Book a Call <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="X (Twitter)"
              >
                X
              </a>
            </div>
          </div>

          <div className="relative w-full md:w-[320px]">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80"
                alt="Johnny Quattro portrait"
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end text-[10px]">
              <div className="flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur px-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                <span className="uppercase tracking-widest">Available</span>
              </div>
              <div className="rounded-full bg-background/80 backdrop-blur px-2 py-1 uppercase tracking-widest">
                Remix for free
              </div>
              <div className="rounded-full bg-background/80 backdrop-blur px-2 py-1 uppercase tracking-widest">
                Made in Framer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work list */}
      <section id="work" className="mx-auto max-w-6xl px-6 md:px-8 pb-24">
        <ul className="divide-y divide-border border-y border-border">
          {projects.map((p) => (
            <li key={p.title}>
              <a
                href="#"
                className="group grid grid-cols-[1fr_auto_120px] items-center gap-6 py-6 hover:bg-card/30 transition-colors px-2 -mx-2 rounded-lg"
              >
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                  <div className="mt-2 flex gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{p.year}</div>
                <div className="h-16 w-[120px] rounded-md bg-muted overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-muted to-card" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              I have <span className="text-foreground">11 years of experience</span>{" "}
              <span className="text-muted-foreground">
                running successful design practices together with startups and top brands.
              </span>
            </h2>

            <div className="mt-16 flex flex-col gap-3 text-sm">
              <a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Download className="h-4 w-4" /> Download CV
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-4 w-4" /> Connect with LinkedIn
              </a>
            </div>
          </div>

          <div>
            <ul className="divide-y divide-border border-y border-border">
              {experience.map((e) => (
                <li key={e.company} className="grid grid-cols-3 items-center py-4 text-sm">
                  <span className="font-medium">{e.company}</span>
                  <span className="text-muted-foreground">{e.role}</span>
                  <span className="text-muted-foreground text-right">{e.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-24">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">
          Services <span className="text-muted-foreground">and Capabilities</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl bg-card p-6 h-64 flex flex-col justify-between overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-5xl font-semibold text-muted-foreground/40 tabular-nums">
                  {s.n}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Let's connect */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 pt-32 pb-16">
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-[0.95]">
          Let's <span className="text-muted-foreground">Connect</span>
        </h2>
        <p className="mt-10 text-muted-foreground max-w-md">
          Feel free to contact me if having any questions.
          <br />
          I'm available for new projects or just for chatting.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
          <Link
            to="/contact"
            className="rounded-full border border-border py-3 text-center text-sm hover:bg-card transition-colors"
          >
            Book a Call
          </Link>
          <a
            href="mailto:hello@quattro.studio"
            className="rounded-full border border-border py-3 text-center text-sm hover:bg-card transition-colors"
          >
            Send an Email
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-foreground text-background py-3 text-center text-sm hover:bg-foreground/90 transition-colors"
          >
            Follow on X
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 md:px-8 py-8 flex items-center justify-between text-xs text-muted-foreground">
        <span>Quattro Inc. 2026</span>
        <span>Made with care in London</span>
      </footer>
    </div>
  );
}
