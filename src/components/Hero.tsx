"use client";
import { useState, useEffect } from "react";
import { useTyped } from "@/hooks/useTyped";

const STRINGS = [
  "a Simulation Engineer",
  "a Problem Solver",
  "a Multiphysics Builder",
  "a Math Nerd",
];

// ─── Hero background images ───────────────────────────────────────────────
// 5 slots — currently all pointing to the same image.
// To swap a slot, just change the filename:  e.g. '/images/hero-bg-2.jpg'
const HERO_IMAGES = [
  { src: "/images/hero-bg.jpg", mobileFocus: "75% center" },
  { src: "/images/hero-bg.jpg", mobileFocus: "75% center" },
  { src: "/images/hero-bg.jpg", mobileFocus: "75% center" },
  { src: "/images/hero-bg.jpg", mobileFocus: "75% center" },
  { src: "/images/hero-bg.jpg", mobileFocus: "75% center" },
];

const CYCLE_MS = 6000; // time per image (ms)
const FADE_MS = 800; // cross-fade duration (ms)

export default function Hero() {
  const { text: typedText } = useTyped(STRINGS);

  const [imgIdx, setImgIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const CYCLE_ENABLED = false; // set true once you have multiple images

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!CYCLE_ENABLED) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setImgIdx((i) => (i + 1) % HERO_IMAGES.length);
        setVisible(true);
      }, FADE_MS);
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Background image layer with Ken Burns + cross-fade */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${HERO_IMAGES[imgIdx].src})`,
          backgroundPosition: isMobile
            ? HERO_IMAGES[imgIdx].mobileFocus
            : "top center",
          opacity: visible ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease`,
        }}
      />

      {/* Subtle dark overlay — fixed, no JS colour cycling */}
      <div className="hero-overlay" />

      <div className="hero-grid" />

      <div className="hero-content">
        <h1 className="fade-in d1">
          Paul
          <br />
          <span className="dim">Dewhurst</span>
        </h1>
        <div className="typed-line fade-in d2">
          I&apos;m <span className="tw">{typedText}</span>
          <span className="typed-cursor" />
        </div>
        <div className="hero-socials fade-in d3">
          <a
            href="https://www.linkedin.com/in/paul-dewhurst"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://paacs.pro"
            target="_blank"
            rel="noopener noreferrer"
            title="PAACS Software"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <span className="scroll-label">Scroll</span>
      </div>
    </section>
  );
}
