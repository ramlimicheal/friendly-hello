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
    <iframe
      src="/nexus/index_live.html"
      title="Nexus"
      className="fixed inset-0 h-screen w-screen border-0"
    />
  );
}
