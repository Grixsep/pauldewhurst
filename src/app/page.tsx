"use client";
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";

const SECTIONS = ["hero", "about", "experience", "skills", "portfolio"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Nav activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <footer className="sec" style={{ textAlign: "center", background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "2rem 4rem" }}>
          <h3 style={{ fontSize: "0.95rem", marginBottom: "0.3rem" }}>Paul Dewhurst</h3>
          <p style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>© {new Date().getFullYear()} Paul Dewhurst</p>
        </footer>
      </main>
    </div>
  );
}
