"use client";

const META = [
  { label: "Degree", value: "MEng Mechanical Eng." },
  { label: "Location", value: "Austin, TX" },
  { label: "Startup", value: "PAACS Software", href: "https://paacs.pro" },
  { label: "Interests", value: "Computational Physics" },
  { label: "Email", value: "paul.dewhurst@alumni.cern" },
  { label: "University", value: "Edinburgh, 2019–2024" },
];

export default function About() {
  return (
    <section id="about" className="sec">
      <div className="sec-inner">
        <div className="sh">
          <div className="sh-num">01 — About</div>
          <h2>Who I Am</h2>
        </div>
        <div className="about-grid">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="about-img">
            <img
              src="/images/paul_dewhurst.jpg"
              alt="Paul Dewhurst"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </div>
          <div className="about-body">
            <h3>Mechanical Engineer &amp; Programmer</h3>
            <div className="about-meta">
              {META.map((m) => (
                <div className="am" key={m.label}>
                  <span className="arr">›</span>
                  <b>{m.label}:</b>&nbsp;
                  {m.href ? (
                    <a href={m.href} target="_blank" rel="noopener noreferrer">{m.value}</a>
                  ) : m.value}
                </div>
              ))}
            </div>
            <p>
              I&apos;m a mechanical engineer with a deep passion for computational physics and
              simulation. My background spans fluid dynamics, finite element analysis, and
              electromagnetic simulation — developed through academic research, a summer at{" "}
              <strong>CERN</strong>, and industry roles in naval defence and energy.
            </p>
            <p>
              In my spare time I&apos;m building{" "}
              <a href="https://paacs.pro" target="_blank" rel="noopener noreferrer">PAACS Software</a>,
              a modular multiphysics simulation platform in C++.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
