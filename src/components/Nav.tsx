"use client";
import { useTheme } from "@/hooks/useTheme";

const NAV = [
  { id: "hero", label: "Home", d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10" },
  { id: "about", label: "About", d: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M20 21a8 8 0 1 0-16 0" },
  { id: "experience", label: "Experience", d: "M2 7h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" },
  { id: "skills", label: "Skills", d: "M22 12h-4l-3 9L9 3l-3 9H2" },
  { id: "portfolio", label: "Portfolio", d: "M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z" },
];

export default function Nav({ activeSection }: { activeSection: string }) {
  const { isDark, toggle, mounted } = useTheme();

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="sidebar">
      <div className="nav-items">
        {NAV.map((item) => (
          <button
            key={item.id}
            className={`nav-btn${activeSection === item.id ? " active" : ""}`}
            data-label={item.label}
            onClick={() => handleNav(item.id)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={item.d} />
            </svg>
          </button>
        ))}
      </div>
      <div style={{ flexShrink: 0 }}>
        {mounted && (
          <button className="theme-btn" onClick={toggle} aria-label="Toggle theme">
            {isDark ? "☀" : "☽"}
          </button>
        )}
      </div>
    </aside>
  );
}
