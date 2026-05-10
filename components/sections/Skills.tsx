"use client";
import { skills } from "@/lib/data";
import SkillBar from "@/components/ui/SkillBar";

const GRADIENTS: Record<string, string> = {
  // Light theme gradients
  Python:     "linear-gradient(90deg, #2563EB, #4F46E5)",
  TensorFlow: "linear-gradient(90deg, #4F46E5, #EA580C)",
  Keras:      "linear-gradient(90deg, #4F46E5, #EA580C)",
  PyTorch:    "linear-gradient(90deg, #4F46E5, #EA580C)",
  OpenCV:     "linear-gradient(90deg, #2563EB, #0EA5E9)",
};

export default function Skills() {
  return (
    <section id="skills" className="section grid-bg" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 50% 60% at 100% 100%, rgba(37,99,235,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-header">
        <div className="section-label">04 — Technical Stack</div>
        <h2 className="section-title">
          Tools of <span className="gradient-text">Innovation</span>
        </h2>
        <p className="section-sub" style={{ marginBottom: 0 }}>
          Specialized tools and technologies for Edge AI and Computer Vision research.
        </p>
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
        className="skills-grid"
      >
        {/* Skill bars */}
        <div className="glass-card" style={{ padding: "2rem" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Proficiency Levels
          </div>
          {[...skills.programming, ...skills.ml].map((skill, i) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              index={i}
              gradient={GRADIENTS[skill.name]}
            />
          ))}
        </div>

        {/* Domains + Tools + Languages */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {/* Domains */}
          <div className="glass-card" style={{ padding: "1.5rem" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.2em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "1rem" }}>
              Domains
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {skills.domains.map((d) => (
                <span key={d} className="domain-tag">{d}</span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="glass-card" style={{ padding: "1.5rem" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.2em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "1rem" }}>
              Tools & Platforms
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {skills.tools.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "0.32rem 0.75rem",
                    borderRadius: "6px",
                    background: "rgba(79,70,229,0.05)",
                    border: "1px solid rgba(79,70,229,0.2)",
                    color: "#4F46E5",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(79,70,229,0.1)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(79,70,229,0.05)";
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="glass-card" style={{ padding: "1.5rem" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.2em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "1rem" }}>
              Languages
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {skills.languages.map((lang) => (
                <div
                  key={lang}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.83rem",
                    color: "var(--text-muted)",
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", flexShrink: 0, boxShadow: "0 0 6px var(--accent)" }} />
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
