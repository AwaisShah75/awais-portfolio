"use client";
import { timeline, certifications, featuredAchievement } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(123,47,190,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-label">05 — Milestones</div>
      <h2 className="section-title">
        Impact & <span className="gradient-text">Recognition</span>
      </h2>
      <p className="section-sub">
        A timeline of academic and professional growth in AI research.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="achievements-grid"
      >
        {/* Left — Timeline */}
        <div>
          <div
            style={{
              position: "relative",
              paddingLeft: "60px",
            }}
          >
            <div className="timeline-line" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                style={{
                  position: "relative",
                  marginBottom: i < timeline.length - 1 ? "2.5rem" : "0",
                  animation: `fade-up 0.6s ease ${i * 0.12}s both`,
                }}
              >
                {/* Node */}
                <div
                  className="timeline-node"
                  style={{
                    position: "absolute",
                    left: "-51px",
                    top: "0",
                  }}
                >
                  {item.icon}
                </div>

                {/* Year */}
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    letterSpacing: "0.15em",
                    marginBottom: "0.4rem",
                    textShadow: "0 0 10px var(--accent-glow)",
                  }}
                >
                  {item.year}
                </div>

                {/* Event */}
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Certs + spotlight */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Featured achievement */}
          <div
            className="glass-card"
            style={{
              padding: "2rem",
              background:
                "linear-gradient(135deg, rgba(255,107,53,0.08) 0%, rgba(13,27,42,0.8) 100%)",
              borderColor: "rgba(255,107,53,0.25)",
              boxShadow: "0 0 30px rgba(255,107,53,0.08)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "0.75rem",
              }}
            >
              {featuredAchievement.icon}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "1rem",
                color: "var(--text)",
                marginBottom: "0.6rem",
                lineHeight: 1.4,
              }}
            >
              {featuredAchievement.title}
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.88rem",
                lineHeight: 1.6,
              }}
            >
              {featuredAchievement.description}
            </p>
            <div
              style={{
                marginTop: "1rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "#FF6B35",
                background: "rgba(255,107,53,0.1)",
                padding: "0.25rem 0.75rem",
                borderRadius: "999px",
                border: "1px solid rgba(255,107,53,0.3)",
              }}
            >
              ⭐ Featured Achievement
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-card" style={{ padding: "2rem" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Certifications
            </div>
            {certifications.map((cert) => (
              <div
                key={cert.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.85rem 0",
                  borderBottom: "1px solid var(--border)",
                  gap: "1rem",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                      color: "var(--text)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {cert.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {cert.issuer}
                  </div>
                </div>
                <span
                  className="badge"
                  style={{
                    background: "rgba(0,255,204,0.08)",
                    border: "1px solid rgba(0,255,204,0.2)",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .achievements-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
