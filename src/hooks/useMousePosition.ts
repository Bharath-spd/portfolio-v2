import { useEffect, useState } from "react";

export function useMousePosition() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}
