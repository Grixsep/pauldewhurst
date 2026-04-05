"use client";

const JOBS = [
  {
    company: "Last Energy", role: "Junior Simulation Engineer", period: "2024 – Present", current: true,
    bullets: [
      "Simulation for nuclear microreactor development",
      "FEA and computational structural & thermal analysis",
      "Fast-paced startup at the frontier of clean energy",
    ],
  },
  {
    company: "PAACS Software", role: "Founder & Software Engineer", period: "Sep 2024 – Present", current: true,
    bullets: [
      "Modular multiphysics tools in C++ with CMake",
      "Desktop app with ImGui & OpenCASCADE",
      "Full-stack web platform (Next.js + Supabase)",
    ],
  },
  {
    company: "CERN", role: "Summer Intern", period: "Jun – Sep 2024", current: false,
    bullets: [
      "FEA using ANSYS for vacuum chamber components",
      "CATIA design of flexible supports",
      "ROOT data analysis workshops in C++",
    ],
  },
  {
    company: "MacTaggart Scott", role: "Developing Engineer", period: "Jan – Aug 2023", current: false,
    bullets: [
      "N&V analysis on naval defence systems",
      "NDT scanner design for critical components",
      "Offered additional month beyond placement",
    ],
  },
];

const EDU = [
  {
    degree: "MEng Mechanical Engineering",
    school: "University of Edinburgh · 2019–2024",
    note: "Fluid dynamics, PDEs, computational methods. Thesis published in Edinburgh Research Archive.",
  },
  {
    degree: "International Exchange",
    school: "UT Austin · 2021–2022",
    note: "Nominated for exchange year. Awarded the Turing Grant.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="sec sec-alt">
      <div className="sec-inner">
        <div className="sh">
          <div className="sh-num">02 — Experience</div>
          <h2>Where I&apos;ve Worked</h2>
        </div>

        {/* ── Work ── */}
        <h3 style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-heading)", marginBottom: "1rem", fontWeight: 600 }}>
          Work
        </h3>
        <div className="exp-grid">
          {JOBS.map((job) => (
            <div className="exp-card" key={job.company}>
              <div className="exp-top">
                <h4>
                  {job.company}
                  {job.current && <span className="exp-current">Current</span>}
                </h4>
                <span className="exp-period">{job.period}</span>
              </div>
              <div className="exp-role">{job.role}</div>
              <ul>
                {job.bullets.map((b, i) => (
                  <li key={i}><span className="d">—</span>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Education ── */}
        <h3 style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-heading)", marginBottom: "1rem", marginTop: "2.25rem", fontWeight: 600 }}>
          Education
        </h3>
        <div className="edu-row">
          {EDU.map((edu) => (
            <div className="edu-card" key={edu.degree}>
              <h4>{edu.degree}</h4>
              <div className="edu-sub">{edu.school}</div>
              <p>{edu.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
