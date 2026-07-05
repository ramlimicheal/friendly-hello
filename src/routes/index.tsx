import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

/**
 * Home = Nexus export in an iframe. Versioned so browsers request the latest
 * cleaned static export after publish instead of a cached iframe document.
 */
function Index() {
  return (
    <iframe
      src="/nexus/index_live.html?v=ramli-20260705-4"
      title="Ramli T. Michael portfolio"
      className="fixed inset-0 h-screen w-screen border-0"
    />
  );
}