import { createFileRoute, Link } from "@tanstack/react-router";
import { caseStudies } from "@/content/case-studies";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Quattro Studio" },
      { name: "description", content: "Selected case studies: brand, product, and web design that ships." },
      { property: "og:title", content: "Work — Quattro Studio" },
      { property: "og:description", content: "Selected case studies: brand, product, and web design that ships." },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-32">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground" data-magnetic>
              ← Back
            </Link>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Selected work — 2024/25
            </p>
          </div>

          <h1 className="mt-16 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
            Work that had to <span className="text-primary">move numbers</span>, not just look good.
          </h1>

          <div className="mt-20 grid gap-16">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                to="/work/$slug"
                params={{ slug: c.slug }}
                data-magnetic
                className="group grid gap-6 md:grid-cols-[120px_1fr_auto] md:items-center"
              >
                <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  {c.index} — {c.year}
                </span>
                <div>
                  <h2 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-primary sm:text-3xl">
                    {c.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {c.client} · {c.role}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
