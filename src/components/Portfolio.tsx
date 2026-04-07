"use client";
import { useState } from "react";
import Link from "next/link";
import { PROJECTS, STATUS_CLASS } from "@/data/projects";

const CATS = [
  { id: "all", label: "All" },
  { id: "sw", label: "Software" },
  { id: "sim", label: "Simulation" },
  { id: "cfd", label: "CFD" },
  { id: "eng", label: "Engineering" },
  { id: "hw", label: "Hardware" },
];

function ProjectCard({ p }: { p: (typeof PROJECTS)[number] }) {
  const [imgIdx, setImgIdx] = useState(0);
  const multi = p.images.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setImgIdx((i) => (i - 1 + p.images.length) % p.images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setImgIdx((i) => (i + 1) % p.images.length);
  };

  const current = p.images[imgIdx];

  return (
    <article className="pcard">
      <div className="pcard-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.src}
          alt={p.title}
          loading="lazy"
          style={{ objectPosition: current.focus ?? "center" }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />

        <span className={`pcard-status ${STATUS_CLASS[p.status]}`}>
          {p.status}
        </span>

        {multi && (
          <>
            <button
              className="carousel-btn carousel-btn-prev"
              onClick={prev}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="carousel-btn carousel-btn-next"
              onClick={next}
              aria-label="Next image"
            >
              ›
            </button>
            <div className="carousel-dots">
              {p.images.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === imgIdx ? " active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setImgIdx(i);
                  }}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="pcard-overlay">
          <Link
            href={`/projects/${p.slug}`}
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--primary)",
              fontSize: "0.7rem",
              textDecoration: "none",
            }}
          >
            ↗
          </Link>
        </div>
      </div>

      <div className="pcard-body">
        <h3>
          <Link
            href={`/projects/${p.slug}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {p.title}
          </Link>
        </h3>
        <p>{p.short}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginTop: "0.35rem",
          }}
        >
          <Link href={`/projects/${p.slug}`} className="pcard-link">
            View project ↗
          </Link>
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="pcard-link"
              style={{ opacity: 0.65 }}
            >
              {p.linkLabel} ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const visible = PROJECTS.filter((p) => active === "all" || p.cat === active);

  return (
    <section id="portfolio" className="sec sec-alt">
      <div className="sec-inner">
        <div className="sh">
          <div className="sh-num">04 · Portfolio</div>
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
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            color: "var(--text-muted)",
            fontSize: "0.75rem",
            marginTop: "2rem",
            fontStyle: "italic",
          }}
        >
          More projects in progress.
        </p>
      </div>
    </section>
  );
}
