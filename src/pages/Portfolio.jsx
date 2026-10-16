import { useState } from "react";
import Icon from "../components/Icons.jsx";
import { projects } from "../data.js";

const filters = ["All", ...new Set(projects.map((p) => p.category))];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section className="page">
      <div className="portfolio-header">
        <h1 className="title">
          My <span className="accent">Portfolio</span>
        </h1>
        <p className="lead" style={{ marginBottom: 24 }}>
          A showcase of full-stack web applications, educational platforms, and digital solutions I have designed and built.
        </p>
      </div>

      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter ${f === filter ? "is-active" : ""}`}
            onClick={() => setFilter(f)}
            aria-pressed={f === filter}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="card-grid projects">
        {shown.map((p) => (
          <article
            key={p.title}
            className={`card project ${p.featured ? "project-featured" : ""}`}
          >
            <div className="project-topbar">
              <span className="tag-cat">{p.category}</span>
              {p.featured && (
                <span className="featured-pill">
                  <Icon name="star" /> Featured Project
                </span>
              )}
            </div>

            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.text}</p>

            {p.highlights && (
              <div className="project-highlights-box">
                <span className="highlights-title">Key Capabilities & Admissions:</span>
                <ul className="project-highlights-list">
                  {p.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            <ul className="chips small">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className="links">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link primary"
                  title="Open live website"
                >
                  <Icon name="link" /> Live site
                </a>
              )}
              {p.admissionsUrl && (
                <a
                  href={p.admissionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link admissions-link"
                  title="Direct link to school admissions section"
                >
                  <Icon name="school" /> Admissions Portal
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link"
                  title="View source code on GitHub"
                >
                  <Icon name="github" /> Code
                </a>
              )}
              <button
                type="button"
                className="btn-link details-trigger"
                onClick={() => setSelectedProject(p)}
                title="View full project architecture & details"
              >
                <Icon name="doc" /> Details
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className="tag-cat">{selectedProject.category}</span>
                <h2 id="modal-title">{selectedProject.title}</h2>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
              >
                <Icon name="close" />
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedProject.text}</p>

              {selectedProject.highlights && (
                <div className="modal-section">
                  <h3>Highlights & System Features</h3>
                  <ul className="modal-features-list">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-section">
                <h3>Technologies & Tools</h3>
                <ul className="chips">
                  {selectedProject.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-actions">
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <Icon name="link" style={{ marginRight: 8 }} /> Open Live Website
                  </a>
                )}
                {selectedProject.admissionsUrl && (
                  <a
                    href={selectedProject.admissionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary-modal"
                  >
                    <Icon name="school" style={{ marginRight: 8 }} /> Jump to #admissions
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-modal"
                  >
                    <Icon name="github" style={{ marginRight: 8 }} /> View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
