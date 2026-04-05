"use client";

const LANGS = [
  { name: "Python", pct: 100 },
  { name: "C++", pct: 85 },
  { name: "MATLAB", pct: 90 },
  { name: "TypeScript", pct: 75 },
  { name: "SQL", pct: 55 },
];

const DOMAINS = [
  "Computational Fluid Dynamics",
  "Finite Element Analysis",
  "Electromagnetic Simulation",
  "Thermal Analysis",
  "Noise & Vibration",
  "Non-Destructive Testing",
];

const ENG_TOOLS = ["ANSYS", "StarCCM+", "FEMM", "CATIA", "SolidWorks", "OpenCASCADE", "ImGui", "CMake"];
const SW_TOOLS = ["Next.js", "Supabase", "Git / GitLab", "Linux", "ROOT (CERN)", "LaTeX", "Docker"];

export default function Skills() {
  return (
    <section id="skills" className="sec">
      <div className="sec-inner">
        <div className="sh">
          <div className="sh-num">03 — Skills</div>
          <h2>What I Know</h2>
        </div>

        <div className="bento">
          {/* Languages */}
          <div className="bento-card">
            <h4><span>⟨/⟩</span> Languages</h4>
            <div className="lang-list">
              {LANGS.map((l) => (
                <div className="lang-row" key={l.name}>
                  <span className="lang-name">{l.name}</span>
                  <div className="lang-bar">
                    <div className="lang-fill" style={{ width: `${l.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Domains */}
          <div className="bento-card">
            <h4><span>◈</span> Domains</h4>
            <div className="domain-list">
              {DOMAINS.map((d) => (
                <div className="domain" key={d}>
                  <span className="dot" />
                  {d}
                </div>
              ))}
            </div>
          </div>

          {/* Engineering tools */}
          <div className="bento-card span2">
            <h4><span>⚙</span> Engineering Tools</h4>
            <div className="tags">
              {ENG_TOOLS.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>

          {/* Software */}
          <div className="bento-card span2">
            <h4><span>◻</span> Software &amp; Platforms</h4>
            <div className="tags">
              {SW_TOOLS.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
