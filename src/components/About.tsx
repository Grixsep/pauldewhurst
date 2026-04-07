"use client";

const META = [
  { label: "Degree", value: "MEng Mechanical Eng." },
  { label: "Location", value: "Austin, TX" },
  { label: "Email", value: "paul.dewhurst@alumni.cern" },
  { label: "University", value: "Edinburgh, 2019 - 2024" },
  { label: "Focus", value: "Real-time simulation" },
  { label: "Side Project", value: "PAACS Software", href: "https://paacs.pro" },
];

export default function About() {
  return (
    <section id="about" className="sec">
      <div className="sec-inner">
        <div className="sh">
          <div className="sh-num">01 · About</div>
          <h2>Who I Am</h2>
        </div>
        <div className="about-grid">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="about-img">
            <img
              src="/images/paul_dewhurst.jpg"
              alt="Paul Dewhurst"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div className="about-body">
            <h3>Mechanical Engineer specialising in simulation</h3>
            <div className="about-meta">
              {META.map((m) => (
                <div className="am" key={m.label}>
                  <span className="arr">›</span>
                  <b>{m.label}:</b>&nbsp;
                  {m.href ? (
                    <a href={m.href} target="_blank" rel="noopener noreferrer">
                      {m.value}
                    </a>
                  ) : (
                    m.value
                  )}
                </div>
              ))}
            </div>
            <p>
              I&apos;m a mechanical engineer focused on real-time simulation and
              digital twin technology for nuclear energy systems. At{" "}
              <strong>Last Energy</strong> I lead development of real-time
              simulation tools for small modular reactors, working toward full
              plant-level simulation capability that can operate alongside live
              plant systems.
            </p>
            <p>
              My background covers fluid dynamics, structural and thermal
              analysis, and electromagnetic simulation, built through academic
              work at Edinburgh, a summer internship at <strong>CERN</strong>,
              and roles in naval defence and nuclear energy.
            </p>
            <p>
              In my spare time I&apos;m developing{" "}
              <a
                href="https://paacs.pro"
                target="_blank"
                rel="noopener noreferrer"
              >
                PAACS Software
              </a>
              , a personal C++ project exploring modular multiphysics solver
              design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
