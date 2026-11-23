import { useCountUp } from "../../../hooks/useCountUp";
import styles from "./AnimatedCounter.module.scss";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export function AnimatedCounter({ value, suffix = "", label }: AnimatedCounterProps) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div className={styles.stat} ref={ref as React.RefObject<HTMLDivElement>}>
      <span className={styles.number}>
        {current.toLocaleString()}
        {suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
