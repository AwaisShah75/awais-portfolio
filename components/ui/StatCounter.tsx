"use client";
import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export default function StatCounter({ value, label, suffix = "" }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const stepValue = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += stepValue;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          color: "var(--accent)",
          textShadow: "0 0 20px rgba(0,255,204,0.4)",
          lineHeight: 1,
        }}
      >
        {value >= 1000 ? count.toLocaleString() : count}
        {suffix}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          marginTop: "0.5rem",
        }}
      >
        {label}
      </div>
    </div>
  );
}
