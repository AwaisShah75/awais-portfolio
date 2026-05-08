"use client";
import { skills } from "@/lib/data";
import SkillBar from "@/components/ui/SkillBar";

const allSkills = [...skills.programming, ...skills.ml];

export default function Skills() {
  return (
    <section id="skills" className="section grid-bg" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 50% 60% at 100% 100%, rgba(0,255,204,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-label">04 — Skills</div>
      <h2 className="section-title">
        Technical <span className="gradient-text">Arsenal</span>
      </h2>
      <p className="section-sub">
        Specialized tools and technologies for Edge AI and Computer Vision research.
      </p>

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
          {allSkills.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
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
                    background: "rgba(123,47,190,0.1)",
                    border: "1px solid rgba(123,47,190,0.25)",
                    color: "#c084fc",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(123,47,190,0.25)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(123,47,190,0.1)";
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
