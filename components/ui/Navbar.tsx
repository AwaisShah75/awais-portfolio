"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "0.75rem 2rem" : "1.25rem 2rem",
        background: scrolled
          ? "rgba(5, 10, 20, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.2rem",
          color: "var(--accent)",
          textDecoration: "none",
          letterSpacing: "0.05em",
          textShadow: "0 0 20px rgba(0,255,204,0.4)",
        }}
      >
        AS<span style={{ color: "var(--text-muted)" }}>.dev</span>
      </Link>

      {/* Desktop links */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
        className="desktop-nav"
      >
        {navLinks.map((link) => {
          const id = link.href.replace("#", "");
          return (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                color: active === id ? "var(--accent)" : "var(--text-muted)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s ease",
                position: "relative",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  active === id ? "var(--accent)" : "var(--text-muted)")
              }
            >
              {link.label}
              {active === id && (
                <span
                  style={{
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "var(--accent)",
                    boxShadow: "0 0 8px var(--accent)",
                  }}
                />
              )}
            </a>
          );
        })}
        <a
          href="/Awais_Shah_CV_Revised.pdf"
          download="Awais_Shah_CV.pdf"
          className="btn-primary"
          style={{ padding: "0.4rem 1.2rem", fontSize: "0.75rem" }}
        >
          CV ↓
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "var(--accent)",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
        className="mobile-menu-btn"
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(5,10,20,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.9rem",
                color: "var(--text)",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
