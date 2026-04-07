"use client";

const JOBS = [
  {
    company: "Last Energy",
    role: "Simulation Engineer",
    period: "2024 - Present",
    current: true,
    bullets: [
      "Leading real-time simulation and digital twin development for SMRs",
      "Working toward full nuclear power plant simulation capability",
      "FEA and computational structural and thermal analysis",
      "Fast-paced startup at the frontier of clean nuclear energy",
    ],
  },
  {
    company: "CERN",
    role: "Summer Intern",
    period: "Jun - Sep 2024",
    current: false,
    bullets: [
      "FEA in ANSYS for vacuum chamber components",
      "CATIA design of flexible support structures",
      "C++ data analysis using the CERN ROOT framework",
    ],
  },
  {
    company: "MacTaggart Scott",
    role: "Developing Engineer",
    period: "Jan - Aug 2023",
    current: false,
    bullets: [
      "Noise and vibration analysis on naval defence systems",
      "NDT scanner design for critical components",
      "Offered extension beyond the original placement term",
    ],
  },
  {
    company: "PAACS Software",
    role: "Personal Project",
    period: "Sep 2024 - Present",
    current: false,
    bullets: [
      "Modular multiphysics solver toolkit in C++ with CMake",
      "Desktop app with ImGui and OpenCASCADE",
      "Web platform built with Next.js and Supabase",
    ],
  },
];

const EDU = [
  {
    degree: "MEng Mechanical Engineering",
    school: "University of Edinburgh · 2019 - 2024",
    note: "Fluid dynamics, PDEs, computational methods. Thesis published in Edinburgh Research Archive.",
  },
  {
    degree: "International Exchange",
    school: "UT Austin · 2021 - 2022",
    note: "Nominated for exchange year. Awarded the Turing Grant.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="sec sec-alt">
      <div className="sec-inner">
        <div className="sh">
          <div className="sh-num">02 · Experience</div>
          <h2>Where I&apos;ve Worked</h2>
        </div>

        <h3 className="subsection-label">Work</h3>
        <div className="exp-grid">
          {JOBS.map((job) => (
            <div className="exp-card" key={job.company + job.period}>
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
                  <li key={i}>
                    <span className="d">›</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="subsection-label" style={{ marginTop: "2.25rem" }}>
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
