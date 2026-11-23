import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Badge.module.scss";

export function Badge({ children, active, onClick }: { children: ReactNode; active?: boolean; onClick?: () => void }) {
  const Tag = onClick ? "button" : "span";
  return (
    <Tag className={clsx(styles.badge, active && styles.active)} onClick={onClick}>
      {children}
    </Tag>
  );
}
