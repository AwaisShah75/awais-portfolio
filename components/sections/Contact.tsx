"use client";
import { useState } from "react";
import { personal } from "@/lib/data";
import { Mail, Smartphone, MapPin, Terminal, Fingerprint } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${personal.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} <${form.email}>`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const links = [
    { icon: <Mail size={22} />, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: <Smartphone size={22} />, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { icon: <MapPin size={22} />, label: "Location", value: "Haripur, Pakistan", href: "#" },
    { icon: <Terminal size={22} />, label: "GitHub", value: "AwaisShah75", href: personal.github },
    { icon: <Fingerprint size={22} />, label: "ORCID", value: "0009-0007-0928-0378", href: personal.orcid },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.8rem 1rem",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    color: "var(--text)",
    fontFamily: "var(--font-body)",
    fontSize: "0.92rem",
    outline: "none",
    transition: "border-color 0.2s ease",
    WebkitAppearance: "none",
  };

  return (
    <section id="contact" className="section" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,255,204,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div className="section-header">
          <div className="section-label">06 — Collaboration</div>
          <h2 className="section-title">
            Let's Build <span className="neon-text">Together</span>
          </h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Open to graduate research opportunities, MS/PhD programs, and research collaborations.
          </p>
        </div>

        {/* Availability banner */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
            padding: "1rem 1.25rem",
            borderRadius: "10px",
            background: "rgba(0,255,204,0.06)",
            border: "1px solid rgba(0,255,204,0.2)",
            marginBottom: "2.5rem",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 10px #22c55e",
              animation: "pulse-glow 2s ease-in-out infinite",
              flexShrink: 0,
              marginTop: "3px",
            }}
          />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "var(--text)", lineHeight: 1.5 }}>
            {personal.availability}
          </span>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}
          className="contact-grid"
        >
          {/* Contact links */}
          <div className="glass-card" style={{ padding: "1.75rem" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.2em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Contact Details
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {links.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    padding: "0.875rem 0",
                    borderBottom: i < links.length - 1 ? "1px solid var(--border)" : "none",
                    textDecoration: "none",
                    minHeight: "52px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget.querySelector(".link-value") as HTMLElement).style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget.querySelector(".link-value") as HTMLElement).style.color = "var(--text-muted)";
                  }}
                >
                  <span style={{ fontSize: "1.2rem", minWidth: "24px", textAlign: "center" }}>{link.icon}</span>
                  <div style={{ overflow: "hidden" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.63rem", color: "rgba(107,140,174,0.7)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.15rem" }}>
                      {link.label}
                    </div>
                    <div
                      className="link-value"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        transition: "color 0.2s ease",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-card" style={{ padding: "1.75rem" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.2em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Send a Message
            </div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.45rem" }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    value={form[field.id as "name" | "email"]}
                    onChange={(e) => setForm((f) => ({ ...f, [field.id]: e.target.value }))}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.45rem" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message..."
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                {sent ? "✓ Opening mail client..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: var(--text-muted); opacity: 0.6; }
        input, textarea, select { font-size: 16px !important; } /* prevent iOS zoom */
      `}</style>
    </section>
  );
}
