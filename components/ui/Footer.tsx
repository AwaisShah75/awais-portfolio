export default function Footer() {
  return (
    <footer
      style={{
        padding: "2.5rem 2rem",
        borderTop: "1px solid var(--border)",
        textAlign: "center",
        background: "rgba(5,10,20,0.8)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--accent)",
          }}
        >
          AS<span style={{ color: "#94A3B8" }}>.dev</span>
        </div>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "#94A3B8",
            letterSpacing: "0.05em",
          }}
        >
          © {new Date().getFullYear()} Awais Shah · Edge AI Researcher · Haripur, Pakistan
        </p>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginTop: "0.25rem",
          }}
        >
          {[
            { label: "GitHub", href: "https://github.com/AwaisShah75" },
            { label: "ORCID", href: "https://orcid.org/0009-0007-0928-0378" },
            { label: "Email", href: "mailto:awais030380@gmail.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "#94A3B8",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#94A3B8")
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
