import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./MagneticButton.module.scss";

type MagneticButtonProps = {
  children: ReactNode;
  /** Maximum travel in px on each axis, so neighbouring buttons never collide. */
  maxOffset?: number;
};

const clamp = (n: number, max: number) => Math.max(-max, Math.min(max, n));

export function MagneticButton({ children, maxOffset = Infinity }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: clamp(x * 0.25, maxOffset), y: clamp(y * 0.25, maxOffset) });
  }

  function handleLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      className={styles.wrapper}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
    >
      {children}
    </motion.div>
  );
}
