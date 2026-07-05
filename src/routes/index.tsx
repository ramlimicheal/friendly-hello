import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

/**
 * Pixel-exact Nexus homepage using the preserved dark minimal template.
 *
 * The full static HTML with inlined CSS + local assets lives in
 * `public/nexus/`. We mount it in a full-viewport iframe so it renders
 * byte-identical to the original, fully isolated from this app's own styles.
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
