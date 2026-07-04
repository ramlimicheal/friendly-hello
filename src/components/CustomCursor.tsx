import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let rx = tx;
    let ry = ty;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const magnet = (e.target as HTMLElement)?.closest?.("[data-magnetic]");
      if (magnet && ringRef.current) {
        const r = magnet.getBoundingClientRect();
        tx = r.left + r.width / 2;
        ty = r.top + r.height / 2;
        ringRef.current.style.width = `${Math.max(r.width, r.height) + 16}px`;
        ringRef.current.style.height = `${Math.max(r.width, r.height) + 16}px`;
        ringRef.current.style.borderRadius = "12px";
      } else if (ringRef.current) {
        ringRef.current.style.width = "32px";
        ringRef.current.style.height = "32px";
        ringRef.current.style.borderRadius = "9999px";
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`;
      }
    };

    const tick = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      if (ringRef.current) {
        const w = parseFloat(ringRef.current.style.width || "32");
        const h = parseFloat(ringRef.current.style.height || "32");
        ringRef.current.style.transform = `translate3d(${rx - w / 2}px, ${ry - h / 2}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-primary/70 transition-[width,height,border-radius] duration-150 ease-out mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-primary mix-blend-difference"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
