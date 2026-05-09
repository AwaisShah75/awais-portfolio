"use client";
import { useEffect, useRef, useState } from "react";
import { personal } from "@/lib/data";
import { Zap, ArrowDown, FileText } from "lucide-react";

const TYPEWRITER_TEXTS = personal.subtitles;

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect
  useEffect(() => {
    const current = TYPEWRITER_TEXTS[subtitleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setSubtitleIndex((i) => (i + 1) % TYPEWRITER_TEXTS.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? current.slice(0, displayText.length - 1)
              : current.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 45 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, subtitleIndex]);

  // Particle neural network canvas — fewer nodes on mobile
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const isMobile = window.innerWidth < 768;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodeCount = isMobile ? 25 : 55;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2.5 + 1,
      pulse: Math.random() * Math.PI * 2,
    }));

    const connectionDist = isMobile ? 100 : 140;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
        glow.addColorStop(0, `rgba(0,255,204,${0.7 + 0.3 * Math.sin(n.pulse)})`);
        glow.addColorStop(1, "rgba(0,255,204,0)");
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 2, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,204,${0.6 + 0.4 * Math.sin(n.pulse)})`;
        ctx.fill();
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0,255,204,${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.5 }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,255,204,0.05) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "6rem 1.25rem 2rem",
          width: "100%",
          maxWidth: "900px",
          animation: "fade-up 0.8s ease both",
        }}
      >
        {/* Label */}
        <div className="section-label" style={{ marginBottom: "1rem", fontSize: "0.65rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
          <Zap size={14} color="var(--accent)" /> Edge AI · Computer Vision · Embedded Systems
        </div>

        {/* Name */}
        <h1
          style={{
          fontFamily: "var(--font-hero, 'Orbitron', monospace)",
            fontSize: "clamp(2rem, 9vw, 6.5rem)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "0.04em",
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #E8F4FD 0%, #00FFCC 60%, #7B2FBE 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            wordBreak: "keep-all",
          }}
        >
          AWAIS SHAH
        </h1>

        {/* Divider */}
        <div
          style={{
            width: "60px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
            margin: "0 auto 1.25rem",
          }}
        />

        {/* Typewriter */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.82rem, 3vw, 1.3rem)",
            color: "var(--text-muted)",
            minHeight: "1.8rem",
            marginBottom: "2rem",
            padding: "0 0.5rem",
          }}
        >
          <span style={{ color: "var(--accent)" }}>&gt;</span>{" "}
          <span>{displayText}</span>
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1em",
              background: "var(--accent)",
              marginLeft: "3px",
              verticalAlign: "text-bottom",
              animation: "typewriter-blink 0.8s step-end infinite",
            }}
          />
        </div>

        {/* CTA buttons */}
        <div
          className="hero-btns"
          style={{
            display: "flex",
            gap: "0.875rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
            padding: "0 0.5rem",
          }}
        >
          <a href="#research" className="btn-primary">
            View Research ↓
          </a>
          <a
            href="/Awais_Shah_CV_.pdf"
            download="Awais_Shah_CV.pdf"
            className="btn-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.75rem",
              background: "#FF6B35",
              border: "1.5px solid #FF6B35",
              borderRadius: "8px",
              color: "#fff",
              fontFamily: "var(--font-mono, 'Fira Code', monospace)",
              fontSize: "0.88rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textDecoration: "none",
              cursor: "pointer",
              minHeight: "44px",
              whiteSpace: "nowrap",
            }}
          >
            ↓ Download CV
          </a>
        </div>

        {/* Badges */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "0 0.5rem",
          }}
        >
          {["3 Publications", "2 Projects", "2+ Years"].map((badge) => (
            <span
              key={badge}
              className="badge"
              style={{
                background: "rgba(0,255,204,0.06)",
                border: "1px solid rgba(0,255,204,0.2)",
                color: "var(--accent)",
                padding: "0.35rem 0.85rem",
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
