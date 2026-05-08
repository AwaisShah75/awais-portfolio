"use client";
import { personal, stats } from "@/lib/data";
import StatCounter from "@/components/ui/StatCounter";
import Image from "next/image";
import { MapPin, GraduationCap, Microscope } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section grid-bg" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(ellipse 50% 60% at 0% 50%, rgba(123,47,190,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Centered Heading */}
      <div className="section-header">
        <div className="section-label">01 — Core Identity</div>
        <h2 className="section-title">
          Decoding My <span className="neon-text">Journey</span>
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left — Hologram card */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div
            className="animate-float avatar-card"
            style={{
              width: "280px",
              height: "360px",
              background: "linear-gradient(135deg, rgba(13,27,42,0.9) 0%, rgba(0,255,204,0.04) 100%)",
              border: "1px solid rgba(0,255,204,0.25)",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 40px rgba(0,255,204,0.08), inset 0 0 40px rgba(0,255,204,0.02)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Corner accents */}
            {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos) => (
              <div
                key={pos}
                style={{
                  position: "absolute",
                  [pos.includes("top") ? "top" : "bottom"]: "12px",
                  [pos.includes("left") ? "left" : "right"]: "12px",
                  width: "18px",
                  height: "18px",
                  borderTop: pos.includes("top") ? "2px solid var(--accent)" : "none",
                  borderBottom: pos.includes("bottom") ? "2px solid var(--accent)" : "none",
                  borderLeft: pos.includes("left") ? "2px solid var(--accent)" : "none",
                  borderRight: pos.includes("right") ? "2px solid var(--accent)" : "none",
                }}
              />
            ))}

            {/* Avatar */}
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(13,27,42,0.8) 0%, rgba(0,255,204,0.05) 100%)",
                border: "2px solid rgba(0,255,204,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 30px rgba(0,255,204,0.2)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/awais-profile.jpg"
                alt="Awais Shah"
                fill
                style={{
                  objectFit: "cover",
                  WebkitMaskImage: "radial-gradient(circle at center, black 45%, transparent 70%)",
                  maskImage: "radial-gradient(circle at center, black 45%, transparent 70%)",
                  transform: "scale(1.1)", // Slight zoom to fill the circle better
                }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.15rem", color: "var(--text)" }}>
                Awais Shah
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.1em", marginTop: "0.25rem" }}>
                EDGE AI RESEARCHER
              </div>
            </div>

            {[
              { icon: <MapPin size={14} />, text: personal.location },
              { icon: <GraduationCap size={14} />, text: "B.Sc. CS · CGPA 3.14" },
              { icon: <Microscope size={14} />, text: "Edge Intelligence" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                }}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Text */}
        <div>

          <p style={{ color: "var(--text-muted)", lineHeight: 1.85, fontSize: "1rem", marginBottom: "1.5rem" }}>
            {personal.bio}
          </p>

          <div className="glow-divider" />

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
            {[
              { icon: <MapPin size={18} />, label: "Location", value: personal.location },
              { icon: <GraduationCap size={18} />, label: "Education", value: personal.education },
              { icon: <Microscope size={18} />, label: "Focus", value: personal.focus },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "1rem", minWidth: "20px" }}>{row.icon}</span>
                <span style={{ color: "var(--text-muted)", minWidth: "80px" }}>{row.label}:</span>
                <span style={{ color: "var(--text)", flex: 1 }}>{row.value}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary" style={{ display: "inline-flex" }}>
            Get In Touch →
          </a>
        </div>
      </div>

      {/* Stat counters */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
          marginTop: "4rem",
          padding: "2rem",
          background: "rgba(13,27,42,0.5)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          backdropFilter: "blur(12px)",
        }}
        className="stats-grid"
      >
        {stats.map((stat) => (
          <StatCounter key={stat.label} value={stat.value} label={stat.label} suffix={stat.suffix} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1rem !important; margin-top: 2rem !important; padding: 1.25rem !important; }
          .avatar-card { width: 220px !important; height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
