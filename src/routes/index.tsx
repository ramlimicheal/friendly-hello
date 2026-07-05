import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

/**
 * Home = Framer/Nexus export (iframe, pixel-exact) + native sections below
 * (client logos, testimonials) built with the same grayscale QUATTRO tokens.
 * Dummy content for now — swap in real logos/quotes when ready.
 */
function Index() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Framer export — untouched */}
      <iframe
        src="/nexus/index_live.html"
        title="Nexus"
        className="block h-screen w-full border-0"
      />

      {/* Client logos */}
      <section className="border-t border-white/10 px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-xs uppercase tracking-[0.2em] text-white/40">
            Selected clients
          </p>
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-3 md:grid-cols-6">
            {[
              "Acme Corp",
              "Northwind",
              "Globex",
              "Initech",
              "Umbrella",
              "Soylent",
              "Hooli",
              "Stark Ind.",
              "Wayne Ent.",
              "Wonka",
              "Cyberdyne",
              "Tyrell",
            ].map((name) => (
              <div
                key={name}
                className="flex h-12 items-center justify-center text-sm font-medium tracking-tight text-white/40 transition-colors duration-300 hover:text-white"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/10 px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-16 text-xs uppercase tracking-[0.2em] text-white/40">
            Testimonials
          </p>
          <div className="grid gap-16 md:grid-cols-2 md:gap-x-20 md:gap-y-24">
            {[
              {
                quote:
                  "One of the sharpest minds I've worked with — turns ambiguity into clarity, and clarity into shipped product.",
                name: "Jane Doe",
                role: "VP of Design",
                company: "Northwind",
              },
              {
                quote:
                  "Rare blend of strategic thinking and hands-on craft. Elevated every project he touched on our team.",
                name: "John Smith",
                role: "Head of Product",
                company: "Acme Corp",
              },
              {
                quote:
                  "Consistently raised the bar. His frameworks are still how we run design reviews two years later.",
                name: "Priya Rao",
                role: "Director, UX",
                company: "Globex",
              },
              {
                quote:
                  "A trusted partner. Thoughtful, decisive, and unusually generous with his time and craft.",
                name: "Marcus Chen",
                role: "Founder",
                company: "Initech",
              },
            ].map((t) => (
              <figure key={t.name} className="flex flex-col gap-6">
                <blockquote className="text-xl leading-relaxed text-white/90 md:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex flex-col gap-1 text-sm">
                  <span className="font-medium text-white">{t.name}</span>
                  <span className="text-white/50">
                    {t.role}, {t.company}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
