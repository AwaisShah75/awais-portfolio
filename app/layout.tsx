import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Awais Shah — Edge AI Researcher & Computer Vision Engineer",
  description:
    "Published researcher in real-time deep learning for embedded systems. Specializing in Edge Intelligence, Lightweight Models, and Embedded Computer Vision.",
  keywords: [
    "Edge AI",
    "Computer Vision",
    "Object Detection",
    "SSD MobileNet",
    "Embedded Systems",
    "Pakistan",
    "Awais Shah",
  ],
  openGraph: {
    title: "Awais Shah — AI Researcher Portfolio",
    description: "Edge AI · Computer Vision · Embedded Systems",
    url: "https://awaisshah.dev",
    images: [{ url: "/og-image.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Orbitron:wght@400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Fira+Code:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
