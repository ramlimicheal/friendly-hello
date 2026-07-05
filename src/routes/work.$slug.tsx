import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/content/case-studies";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const c = getCaseStudy(params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.title} — Quattro Studio` },
            { name: "description", content: loaderData.summary },
            { property: "og:title", content: `${loaderData.title} — Quattro Studio` },
            { property: "og:description", content: loaderData.summary },
            { property: "og:image", content: loaderData.cover },
            { name: "twitter:image", content: loaderData.cover },
          ],
        }
      : { meta: [{ title: "Case study — Quattro Studio" }, { name: "robots", content: "noindex" }] },
  component: CaseStudyPage,
  notFoundComponent: CaseStudyNotFound,
  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <p className="text-sm text-muted-foreground">Couldn't load: {error.message}</p>
    </div>
  ),
});

function CaseStudyNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Case study</p>
        <h1 className="mt-4 text-3xl font-semibold">Not found</h1>
        <Link to="/work" className="mt-6 inline-block text-sm text-primary hover:underline">
          Back to all work →
        </Link>
      </div>
    </div>
  );
}

function CaseStudyPage() {
  const c = Route.useLoaderData();
  const heroRef = useReveal<HTMLDivElement>();
  const problemRef = useReveal<HTMLDivElement>();
  const processRef = useReveal<HTMLDivElement>();
  const outcomeRef = useReveal<HTMLDivElement>();

  const next = caseStudies[(caseStudies.findIndex((x) => x.slug === c.slug) + 1) % caseStudies.length];

  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-4xl px-6 pt-32">
          <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground" data-magnetic>
            ← All work
          </Link>

          <div ref={heroRef} className="reveal mt-12">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              {c.index} — {c.client} · {c.year}
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              {c.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{c.summary}</p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl px-6">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
            <img src={c.cover} alt={c.title} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-4xl space-y-24 px-6 pb-24">
          <section ref={problemRef} className="reveal grid gap-6 md:grid-cols-[160px_1fr]">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Problem</p>
            <p className="text-xl leading-relaxed">{c.problem}</p>
          </section>

          <section ref={processRef} className="reveal grid gap-6 md:grid-cols-[160px_1fr]">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Process</p>
            <ol className="space-y-4">
              {c.process.map((step: string, i: number) => (
                <li key={i} className="flex gap-4 border-b border-border pb-4 last:border-0">
                  <span className="text-sm tabular-nums text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section ref={outcomeRef} className="reveal grid gap-6 md:grid-cols-[160px_1fr]">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Outcome</p>
            <div>
              <p className="text-xl leading-relaxed">{c.outcome}</p>
              <dl className="mt-10 grid gap-6 sm:grid-cols-3">
                {c.metrics.map((m: CaseStudy["metrics"][number]) => (
                  <div key={m.label} className="rounded-xl border border-border p-5">
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {m.label}
                    </dt>
                    <dd className="mt-2 text-3xl font-semibold text-primary">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="border-t border-border pt-10">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Up next</p>
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              data-magnetic
              className="mt-4 block text-3xl font-semibold tracking-tight transition-colors hover:text-primary sm:text-5xl"
            >
              {next.title} →
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
