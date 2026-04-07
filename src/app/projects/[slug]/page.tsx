import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS, STATUS_CLASS } from "@/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

// Next.js 15+ — params is now a Promise and must be awaited
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="proj-page">
      <header className="proj-header">
        <Link href="/#portfolio" className="proj-back">
          ← Back to portfolio
        </Link>
      </header>

      <main className="proj-main">
        {/* Hero image */}
        {project.images[0] && (
          <div className="proj-hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.images[0].src} alt={project.title} />
          </div>
        )}

        {/* Meta */}
        <div className="proj-cat-label">{project.cat.toUpperCase()}</div>
        <h1 className="proj-title">{project.title}</h1>
        <p className="proj-tagline">{project.tagline}</p>

        <span
          className={`pcard-status ${STATUS_CLASS[project.status]}`}
          style={{
            position: "static",
            marginBottom: "1.5rem",
            display: "inline-block",
          }}
        >
          {project.status}
        </span>

        {/* Detail text */}
        <p className="proj-detail">{project.detail}</p>

        {/* Additional images gallery */}
        {project.images.length > 1 && (
          <div className="proj-gallery">
            {project.images.slice(1).map((img, i) => (
              <div className="proj-gallery-item" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt="" />
              </div>
            ))}
          </div>
        )}

        {/* Tools */}
        <div style={{ marginBottom: "2rem" }}>
          <div className="proj-tools-label">Tools Used</div>
          <div className="tags">
            {project.tools.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* External link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-link"
          >
            {project.linkLabel} ↗
          </a>
        )}
      </main>
    </div>
  );
}
