import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

/**
 * Pixel-exact port of the ripped Quattro site.
 *
 * The full static rip (Framer HTML with inlined CSS + local assets) lives in
 * `public/quattro/`. We mount it in a full-viewport iframe so it renders
 * byte-identical to the original, fully isolated from this app's own styles.
 */
function Index() {
  return (
    <iframe
      src="/quattro/index_live.html"
      title="Quattro"
      className="fixed inset-0 h-screen w-screen border-0"
    />
  );
}
