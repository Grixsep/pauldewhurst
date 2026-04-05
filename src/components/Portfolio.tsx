"use client";
import { useState } from "react";

const CATS = [
  { id: "all", label: "All" },
  { id: "sw", label: "Software" },
  { id: "sim", label: "Simulation" },
  { id: "cfd", label: "CFD" },
  { id: "eng", label: "Engineering" },
  { id: "hw", label: "Hardware" },
];

const PROJECTS = [
  {
    id: "paacs-1", cat: "sw", title: "PAACS Software",
    desc: "Modular multiphysics simulation platform with web dashboard.",
    image: "/images/portfolio/Recording website best.gif",
    link: "https://paacs.pro", linkLabel: "paacs.pro", status: "Active",
  },
  {
    id: "meng-1", cat: "sim", title: "Hyperloop Levitation",
    desc: "MEng thesis — electromagnetic levitation system using FEMM.",
    image: "/images/portfolio/portfolio-10.gif",
    link: "https://era.ed.ac.uk/handle/1842/42594", linkLabel: "Research Archive", status: "Published",
  },
  {
    id: "cfd-1", cat: "cfd", title: "CFD Gas Dispersion",
    desc: "StarCCM+ chlorine gas simulation on university HPC.",
    image: "/images/portfolio/portfolio-2.gif",
    status: "Complete",
  },
  {
    id: "fs-1", cat: "eng", title: "Formula Student CAD",
    desc: "Component design with FEA validation and 3D printing.",
    image: "/images/portfolio/portfolio-1.jpg",
    status: "Complete",
  },
  {
    id: "pc-1", cat: "hw", title: "Water-Cooled PC",
    desc: "Custom hardline water cooling loop build.",
    image: "/images/portfolio/portfolio-4.jpg",
    status: "Complete",
  },
  {
    id: "paacs-2", cat: "sw", title: "PAACS Desktop App",
    desc: "C++ desktop simulation with ImGui and OpenCASCADE.",
    image: "/images/portfolio/PAACS-early-screenshot.png",
    link: "https://paacs.pro", linkLabel: "paacs.pro", status: "Active",
  },
  {
    id: "meng-2", cat: "sim", title: "Reluctance Network Model",
    desc: "Electromagnetic reluctance network for levitation analysis.",
    image: "/images/portfolio/reluctance-network.png",
    link: "https://era.ed.ac.uk/handle/1842/42594", linkLabel: "Research Archive", status: "Published",
  },
  {
    id: "cfd-2", cat: "cfd", title: "CFD Visualization",
    desc: "Gas concentration results from the campus dispersion study.",
    image: "/images/portfolio/portfolio-5.jpg",
    status: "Complete",
  },
  {
    id: "pc-2", cat: "hw", title: "PC Build Detail",
    desc: "Finished custom water-cooled build with hardline tubing.",
    image: "/images/portfolio/PC-build.jpg",
    status: "Complete",
  },
];

const ST: Record<string, string> = {
  Active: "st-active",
  Published: "st-published",
  Complete: "st-complete",
};

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const visible = PROJECTS.filter((p) => active === "all" || p.cat === active);

  return (
    <section id="portfolio" className="sec sec-alt">
      <div className="sec-inner">
        <div className="sh">
          <div className="sh-num">04 — Portfolio</div>
          <h2>What I&apos;ve Built</h2>
        </div>

        <div className="filters">
          {CATS.map((c) => (
            <button
              key={c.id}
              className={`filter-btn${active === c.id ? " active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="pgrid">
          {visible.map((p) => (
            <article className="pcard" key={p.id}>
              <div className="pcard-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <span className={`pcard-status ${ST[p.status]}`}>{p.status}</span>
                {p.link && (
                  <div className="pcard-overlay">
                    <a href={p.link} target="_blank" rel="noopener noreferrer">↗</a>
                  </div>
                )}
              </div>
              <div className="pcard-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="pcard-link">
                    {p.linkLabel} ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.75rem", marginTop: "2rem", fontStyle: "italic" }}>
          More projects in progress — check back soon.
        </p>
      </div>
    </section>
  );
}
