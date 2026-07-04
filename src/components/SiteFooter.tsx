import { Link } from "@tanstack/react-router";
import { toast } from "sonner";

const EMAIL = "hello@quattro.studio";

export function SiteFooter() {
  const copy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      toast.success("Email copied", { description: EMAIL });
    });
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
          Available for select projects — 2026
        </p>
        <button
          data-magnetic
          onClick={copy}
          className="mt-6 block text-left text-5xl font-semibold leading-[0.95] tracking-tight text-foreground transition-colors hover:text-primary sm:text-7xl md:text-8xl"
        >
          {EMAIL}
        </button>
        <p className="mt-4 text-sm text-muted-foreground">
          Click to copy. Or press ⌘K anywhere.
        </p>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/work" className="hover:text-foreground">Work</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </div>
          <p>© {new Date().getFullYear()} Quattro Studio</p>
        </div>
      </div>
    </footer>
  );
}
