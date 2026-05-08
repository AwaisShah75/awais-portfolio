"use client";
import { useState } from "react";
import { publications } from "@/lib/data";

export default function Research() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="research" className="section" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 100% 30%, rgba(0,255,204,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div className="section-label">02 — Research</div>
        <h2 className="section-title">
          Publications &{" "}
          <span className="gradient-text">Research</span>
        </h2>
        <p className="section-sub">
          Peer-reviewed and preprint research at the intersection of Edge AI, embedded systems,
          and medical technology.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {publications.map((pub, i) => (
            <div
              key={pub.id}
              className="glass-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: "2rem",
                cursor: "default",
                transform: hovered === i ? "translateY(-6px) scale(1.01)" : "translateY(0)",
                boxShadow:
                  hovered === i
                    ? `0 20px 60px rgba(0,255,204,0.1), 0 0 0 1px ${pub.statusColor}33`
                    : "none",
                borderColor:
                  hovered === i ? `${pub.statusColor}44` : "var(--border)",
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{pub.icon}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {pub.venue}
                  </span>
                </div>
                <span
                  className="badge"
                  style={{
                    background: `${pub.statusColor}15`,
                    border: `1px solid ${pub.statusColor}40`,
                    color: pub.statusColor,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: pub.statusColor,
                      display: "inline-block",
                      boxShadow: `0 0 6px ${pub.statusColor}`,
                    }}
                  />
                  {pub.status}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1.15rem",
                  color: "var(--text)",
                  lineHeight: 1.4,
                  marginBottom: "0.75rem",
                }}
              >
                {pub.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  marginBottom: pub.doi || pub.link ? "1.25rem" : "0",
                  lineHeight: 1.6,
                }}
              >
                {pub.journal}
                {pub.doi && (
                  <span style={{ display: "block", marginTop: "0.3rem" }}>
                    DOI:{" "}
                    <span style={{ color: "var(--accent)" }}>{pub.doi}</span>
                  </span>
                )}
              </p>

              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: "0.45rem 1.25rem", fontSize: "0.78rem" }}
                >
                  {pub.status === "Published" ? "Read Paper →" : "View Preprint →"}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
