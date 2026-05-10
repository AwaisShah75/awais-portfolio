"use client";
import { useState } from "react";
import { projects } from "@/lib/data";

export default function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="projects" className="section" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 50% 50% at 0% 70%, rgba(123,47,190,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-header">
        <div className="section-label">03 — Applied AI</div>
        <h2 className="section-title">
          Intelligent <span className="neon-text">Systems</span>
        </h2>
        <p className="section-sub" style={{ marginBottom: 0 }}>
          Real-world edge AI systems built for efficiency, accuracy, and deployment on constrained hardware.
        </p>
      </div>

      {/* Tab selector */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActive(i)}
            style={{
              padding: "0.6rem 1.25rem",
              borderRadius: "10px",
              border: `1px solid ${active === i ? p.color : "rgba(15,23,42,0.08)"}`,
              background: active === i ? `${p.color}08` : "rgba(255,255,255,0.6)",
              color: active === i ? p.color : "var(--text-muted)",
              boxShadow: active === i ? `0 4px 14px ${p.color}20` : "none",
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.25s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              minHeight: "44px",
            }}
          >
            <span>{p.icon}</span>
            <span className="tab-label">Project {p.id}</span>
          </button>
        ))}
      </div>

      {/* Project card */}
      <div
        style={{
          padding: "2.5rem",
          background: "rgba(255,255,255,0.7)",
          border: `1px solid ${project.color}20`,
          borderRadius: "24px",
          backdropFilter: "blur(12px)",
          boxShadow: `0 12px 40px rgba(15, 23, 42, 0.05), 0 0 0 1px ${project.color}05`,
          transition: "all 0.4s ease",
        }}
        key={project.id}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "2.5rem",
            alignItems: "start",
          }}
          className="project-inner"
        >
          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "2rem", filter: `drop-shadow(0 0 12px ${project.color})`, flexShrink: 0 }}>
                {project.icon}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                  color: "var(--text)",
                  lineHeight: 1.35,
                  flex: 1,
                }}
              >
                {project.title}
              </h3>
            </div>

            {/* Stack */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
              {project.stack.map((s) => (
                <span
                  key={s}
                  style={{
                    padding: "0.25rem 0.75rem",
                    borderRadius: "8px",
                    background: `${project.color}08`,
                    border: `1px solid ${project.color}20`,
                    color: project.color,
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    fontWeight: 500,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem", marginBottom: "1.5rem" }}>
              {project.highlights.map((h) => (
                <li
                  key={h}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    color: "var(--text-muted)",
                    fontSize: "0.88rem",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: project.color, fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>▸</span>
                  {h}
                </li>
              ))}
            </ul>

            {/* Use cases */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.75rem" }}>
              {project.useCases.map((uc) => (
                <span
                  key={uc}
                  style={{
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    background: "rgba(15,23,42,0.03)",
                    border: "1px solid rgba(15,23,42,0.08)",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                  }}
                >
                  {uc}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1.5rem",
                background: project.color,
                color: "#FFFFFF",
                borderRadius: "8px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: `0 6px 20px ${project.color}35`,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              GitHub →
            </a>
          </div>

          {/* Right — metrics */}
          {project.metrics && (
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.15em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                Model Performance
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.4rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                      }}
                    >
                      <span style={{ color: "var(--text)" }}>{m.label}</span>
                      <span style={{ color: project.color }}>{m.value.toFixed(1)}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{
                          background: `linear-gradient(90deg, ${project.color}, ${project.color}88)`,
                          boxShadow: `0 0 10px ${project.color}60`,
                          transform: `scaleX(${m.value / 100})`,
                          transition: "transform 1.2s cubic-bezier(0.4,0,0.2,1)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-inner { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .tab-label { display: none; }
        }
        @media (max-width: 480px) {
          .tab-label { display: inline; }
        }
      `}</style>
    </section>
  );
}
