import { useEffect, useRef, useState } from "react";
import styles from "./CursorSpotlight.module.scss";

export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled] = useState(() => window.matchMedia("(pointer: fine)").matches);

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    let x = -500;
    let y = -500;

    function paint() {
      frame = 0;
      if (ref.current) ref.current.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
    }
    function handleMove(e: MouseEvent) {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      className={styles.spotlight}
      style={{ transform: "translate3d(-500px, -500px, 0)" }}
      aria-hidden="true"
    />
  );
}
