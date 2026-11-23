import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./GlassCard.module.scss";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  lift?: boolean;
  glow?: boolean;
};

export function GlassCard({ children, lift = true, glow = false, className, ...rest }: GlassCardProps) {
  return (
    <div
      className={clsx(styles.card, lift && styles.lift, glow && styles.glow, className)}
      {...rest}
    >
      {children}
    </div>
  );
}
