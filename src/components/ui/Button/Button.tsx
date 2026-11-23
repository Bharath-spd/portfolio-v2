import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "gradient" | "glass" | "outline";
  icon?: ReactNode;
  as?: "button";
};

export function Button({ variant = "gradient", icon, className, children, ...rest }: ButtonProps) {
  return (
    <button className={clsx(styles.button, styles[variant], className)} {...rest}>
      <span>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}

type LinkButtonProps = {
  href: string;
  variant?: "gradient" | "glass" | "outline";
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
};

export function LinkButton({ href, variant = "gradient", icon, className, children, ...rest }: LinkButtonProps) {
  return (
    <a href={href} className={clsx(styles.button, styles[variant], className)} {...rest}>
      <span>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </a>
  );
}
