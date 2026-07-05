import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

/**
 * Home = Framer/Nexus export (iframe, pixel-exact) + native sections below
 * (client logos, testimonials) built with the same grayscale QUATTRO tokens.
 * Cache-busted so published/preview browsers request the latest HTML export.
 */
function Index() {
  return (
    <iframe
      src="/nexus/index_live.html?v=ramli-20260705-2"
      title="Ramli T. Michael portfolio"
      className="fixed inset-0 h-screen w-screen border-0"
    />
  );
}
