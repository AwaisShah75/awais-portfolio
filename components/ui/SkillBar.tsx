"use client";
import { useEffect, useRef } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  index?: number;
  gradient?: string;
}

export default function SkillBar({ name, level, index = 0, gradient = "linear-gradient(90deg, #00FFCC, #7B2FBE)" }: SkillBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const fill = fillRef.current;
    if (!container || !fill) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small timeout so the element is painted before animating
          setTimeout(() => {
            fill.style.transform = `scaleX(${level / 100})`;
          }, index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [level, index]);

  return (
    <div ref={containerRef} style={{ marginBottom: "1.25rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.85rem",
        }}
      >
        <span style={{ color: "var(--text)" }}>{name}</span>
        <span style={{ color: "var(--accent)" }}>{level}%</span>
      </div>
      {/* Track */}
      <div
        style={{
          width: "100%",
          height: "5px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "3px",
          overflow: "hidden",
        }}
      >
        {/* Fill */}
        <div
          ref={fillRef}
          style={{
            height: "100%",
            borderRadius: "3px",
            background: gradient,
            boxShadow: "0 0 10px rgba(0,255,204,0.5)",
            transformOrigin: "left center",
            transform: "scaleX(0)",
            transition: `transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)`,
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}
