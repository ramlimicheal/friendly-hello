import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Quattro Studio" },
      { name: "description", content: "Start a conversation. We reply within 24 hours." },
      { property: "og:title", content: "Contact — Quattro Studio" },
      { property: "og:description", content: "Start a conversation. We reply within 24 hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-['Inter',sans-serif] antialiased">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0f0f0f]/70 border-b border-white/5">
        <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="text-sm font-semibold tracking-tight">Quattro<span className="text-white/40">.</span></Link>
          <div className="flex items-center gap-8 text-sm text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Work</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="text-white">Contact</Link>
          </div>
          <div className="hidden md:block w-24" />
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-6 md:px-10 pt-32 pb-24">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-8">Contact</p>
        <h1 className="text-5xl md:text-8xl font-black leading-[0.95] tracking-tight">
          Let's make<br />something good.
        </h1>

        <div className="mt-20 grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Email</div>
            <a href="mailto:hello@quattro.studio" className="text-2xl md:text-3xl font-semibold inline-flex items-center gap-2 hover:text-white/70 transition-colors">
              hello@quattro.studio <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Studio</div>
            <p className="text-lg text-white/70 leading-relaxed">
              Ostbahnhof 12<br />
              10243 Berlin, Germany
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Social</div>
            <div className="flex flex-col gap-2 text-lg">
              <a href="#" className="hover:text-white/70 transition-colors">Instagram ↗</a>
              <a href="#" className="hover:text-white/70 transition-colors">Twitter ↗</a>
              <a href="#" className="hover:text-white/70 transition-colors">Dribbble ↗</a>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Response time</div>
            <p className="text-lg text-white/70">Within 24 hours, Mon — Fri.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
