import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Quattro Studio" },
      { name: "description", content: "An independent studio designing quiet interfaces and bold brand identities." },
      { property: "og:title", content: "About — Quattro Studio" },
      { property: "og:description", content: "An independent studio designing quiet interfaces and bold brand identities." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="text-sm font-semibold tracking-tight">Quattro<span className="text-muted-foreground">.</span></Link>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/work" className="hover:text-foreground transition-colors">Work</Link>
            <Link to="/about" className="text-foreground">About</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
          <div className="hidden md:block w-24" />
        </nav>
      </header>

      <section className="mx-auto max-w-4xl px-6 md:px-10 pt-32 pb-24">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">About</p>
        <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
          A small studio<br />
          <span className="text-muted-foreground">with big obsessions.</span>
        </h1>
        <div className="mt-16 grid md:grid-cols-2 gap-12 text-muted-foreground leading-relaxed">
          <p>
            Quattro is a design studio working at the intersection of brand and product.
            We partner with founders and teams who believe that thoughtful design is a
            competitive advantage — not a decoration.
          </p>
          <p>
            Every project begins with a conversation and ends with something we're proud
            to sign our name to. Fast, simple, cool. That's the whole brief.
          </p>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12">
          {[
            ["12+", "Years designing"],
            ["80+", "Projects shipped"],
            ["24", "Awards & features"],
            ["4", "Team members"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-4xl md:text-5xl font-semibold text-foreground">{n}</div>
              <div className="text-sm text-muted-foreground mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
