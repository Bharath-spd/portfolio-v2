import { useCountUp } from "../../../hooks/useCountUp";

type CountUpProps = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function CountUp({ value, suffix = "", duration = 1500, className }: CountUpProps) {
  const { ref, value: current } = useCountUp(value, duration);

  return (
    <span className={className} ref={ref as React.RefObject<HTMLSpanElement>}>
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}
