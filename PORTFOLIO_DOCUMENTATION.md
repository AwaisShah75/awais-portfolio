# Portfolio Development Documentation

This document serves as a comprehensive log of the architecture, design system, technical optimizations, and content structure implemented for Awais Shah's Edge AI & Computer Vision Portfolio.

## 1. Tech Stack & Architecture
* **Framework:** Next.js 14 (App Router)
* **Library:** React 18
* **Styling:** Vanilla CSS (via `globals.css`) + Inline React Styles (Tailwind CSS was configured but heavily overridden for precise custom glassmorphism)
* **Animation:** Framer Motion (for page transitions and scroll reveals) & native CSS transitions
* **Icons:** `lucide-react` (Sleek, minimalist SVG icons to maintain a professional, non-AI-generated look)

## 2. Design System & Aesthetics
The aesthetic is designed to resemble an elite "Research Lab" or "Cyberpunk Terminal"—focused, high-tech, and academic.

### Color Palette
Defined globally in `globals.css`:
* **Background (`--bg`):** `#050A14` (Deep void blue/black)
* **Card Background (`--bg-card`):** `#0D1B2A` (Slightly elevated dark blue)
* **Primary Accent (`--accent`):** `#00FFCC` (Neon Cyan/Teal) - Used for highlights, borders, and glowing text.
* **Secondary Accent (`--purple`):** `#7B2FBE` (Deep Purple) - Used for background radial gradients.
* **Text (`--text`):** `#E8F4FD` (Crisp icy white)
* **Muted Text (`--text-muted`):** `#6B8CAE` (Slate blue/gray for paragraphs)

### Typography
Imported via Google Fonts in `layout.tsx`:
* **Display/Headings:** `Space Grotesk` (Geometric, tech-focused)
* **Body Text:** `Inter` (Highly readable, neutral)
* **Monospace/Labels:** `JetBrains Mono` (Used for code snippets, section numbers like `01 —`, and metrics)

### UI/UX Elements
* **Glassmorphism:** Cards (`.glass-card`) use `backdrop-filter: blur(12px)` with subtle semi-transparent borders.
* **Custom Cursor:** A glowing cyan dot and outer ring (`.cursor-dot`, `.cursor-ring`) that follows the mouse on desktop screens.
* **Animations:** 
  - `animate-pulse-slow`, `animate-float`, and custom `hover` states that lift cards (`translateY(-6px)`) and increase box-shadow.
  - Interactive HTML5 Canvas particle network in the Hero section.
* **Section Headers:** Perfectly centered with a consistent structure:
  1. Monospace label (e.g., `01 — Core Identity`)
  2. Grotesk Title (e.g., `Decoding My Journey`)
  3. Muted Inter subtitle.

## 3. Section Breakdown & Content
All section headings were specifically rewritten to sound catchy, professional, and aligned with Edge AI/Computer Vision.

1. **Hero (`Hero.tsx`)**
   * **Visuals:** HTML5 Canvas particle background, radial purple/cyan gradients.
   * **Content:** Typing effect for titles ("Computer Vision Researcher", "Edge AI Engineer").
   * **Optimizations:** Removed bouncy scroll indicator for a cleaner look. Used `100svh` for perfect mobile viewport sizing.

2. **About (`About.tsx`)**
   * **Heading:** `01 — Core Identity | Decoding My Journey`
   * **Layout:** Centered header above a 2-column grid.
   * **Image:** Uses `pic 1.png` integrated via `next/image`. Masked edges perfectly into the dark background using a CSS `radial-gradient(circle at center, black 45%, transparent 70%)` to avoid looking washed out by heavy filters.

3. **Research (`Research.tsx`)**
   * **Heading:** `02 — Academic Research | Pushing the Boundaries`
   * **Content:** Cards displaying publications, venues, DOI links, and colored status badges (e.g., "Published", "Under Review").

4. **Projects (`Projects.tsx`)**
   * **Heading:** `03 — Applied AI | Intelligent Systems`
   * **Content:** Real-world Edge AI systems featuring tech stack badges, GitHub terminal links, and custom horizontal performance metric bars (e.g., "Inference Speed").

5. **Skills (`Skills.tsx`)**
   * **Heading:** `04 — Technical Stack | Tools of Innovation`
   * **Layout:** Categorized into domains (Edge AI, Vision, Embedded, ML) with custom animated progress bars.

6. **Achievements (`Achievements.tsx`)**
   * **Heading:** `05 — Milestones | Impact & Recognition`
   * **Layout:** Vertical timeline with glowing connection lines detailing academic and professional growth.

7. **Contact (`Contact.tsx`)**
   * **Heading:** `06 — Collaboration | Let's Build Together`
   * **Content:** Interactive contact form and quick-link grid (Email, GitHub, ORCID).
   * **Fixes:** Replaced `Github` icon with `Terminal` to resolve `lucide-react` build errors. Forced `16px` font size on inputs to prevent iOS auto-zoom.

## 4. Mobile & Performance Optimizations
* **Responsive Grids:** All `grid-template-columns: 1fr 1fr` layouts break down to `1fr` on screens `<=768px`.
* **Fluid Typography:** Used CSS `clamp()` (e.g., `font-size: clamp(1.8rem, 5vw, 3.5rem)`) so headings scale smoothly between mobile and 4K desktop screens.
* **Canvas Performance:** The particle network in the Hero section is optimized to render fewer particles and disable interactive hover effects on mobile/touch devices to save battery.
* **Build Stability:** Fixed React hydration mismatches and corrected Git LF/CRLF line-ending warnings.

## 5. Data Architecture
* **Centralization:** All dynamic text, statistics (e.g., "2 Projects", "2+ Years Experience"), and arrays (projects, publications, timeline) are exported from `lib/data.tsx`. This allows for instant content updates without hunting through component files.

## 6. Deployment
* **Version Control:** Initialized, committed, and pushed to `https://github.com/AwaisShah75/awais-portfolio`.
* **Hosting:** Ready for seamless CI/CD deployment on Vercel.
* **Assets:** CV securely linked to `/public/Awais_CV.pdf`.
