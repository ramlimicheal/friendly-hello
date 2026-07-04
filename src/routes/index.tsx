import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  {
    title: "Aperture",
    tag: "Brand Identity — 2025",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Northline",
    tag: "Product Design — 2025",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Monolith",
    tag: "Art Direction — 2024",
    image:
      "https://images.unsplash.com/photo-1554147090-e1221a04a025?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Halide Studio",
    tag: "Web Experience — 2024",
    image:
      "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=1600&q=80",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="text-sm font-semibold tracking-tight">
            Quattro<span className="text-muted-foreground">.</span>
          </Link>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-24 md:pt-40 pb-24 md:pb-32">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Available for new projects — 2026
        </div>
        <h1 className="text-[13vw] md:text-[9vw] leading-[0.9] font-black tracking-tight">
          Designing<br />
          <span className="text-muted-foreground">quiet interfaces</span><br />
          that speak loud.
        </h1>
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl">
          <p className="md:col-span-2 text-lg text-muted-foreground leading-relaxed">
            Quattro is an independent studio building brand identities and digital
            products for teams who care about the details. Fast, simple, cool.
          </p>
          <div className="flex md:justify-end items-end">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-sm border-b border-border pb-1 hover:border-foreground transition-colors"
            >
              Selected work
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Work grid */}
      <section id="work" className="mx-auto max-w-7xl px-6 md:px-10 pb-32">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Selected Work</h2>
          <span className="text-sm text-muted-foreground">2024 — 2026</span>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl bg-muted aspect-[4/3]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{p.tag}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Marquee tagline */}
      <section className="border-y border-border py-8 overflow-hidden">
        <div className="whitespace-nowrap animate-[marquee_30s_linear_infinite] text-5xl md:text-7xl font-black tracking-tight text-muted/50">
          Fast · Simple · Cool · Fast · Simple · Cool · Fast · Simple · Cool ·
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-32 text-center">
        <h2 className="text-5xl md:text-7xl font-black tracking-tight">
          Have a project<br />in mind?
        </h2>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Start a conversation <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-muted-foreground">
          <div>© 2026 Quattro Studio. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">Dribbble</a>
            <a href="mailto:hello@quattro.studio" className="hover:text-foreground transition-colors">hello@quattro.studio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
