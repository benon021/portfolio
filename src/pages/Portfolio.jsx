import { useState, useEffect } from "react";
import Icon from "../components/Icons.jsx";
import { projects } from "../data.js";

const filters = ["All", ...new Set(projects.map((p) => p.category))];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [previewProject, setPreviewProject] = useState(null);
  const [deviceMode, setDeviceMode] = useState("desktop"); // "desktop" | "tablet" | "mobile"
  const [iframeKey, setIframeKey] = useState(0);

  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  // Close modal on Escape key press
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setPreviewProject(null);
      }
    }
    if (previewProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [previewProject]);

  return (
    <section className="page">
      <h1 className="title">
        My <span className="accent">Portfolio</span>
      </h1>

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
          <article key={p.title} className="card project">
            <span className="tag-cat">{p.category}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <ul className="chips small">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="links">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer">
                  <Icon name="github" /> Code
                </a>
              )}
              {p.live && (
                <>
                  <a href={p.live} target="_blank" rel="noreferrer">
                    <Icon name="link" /> Live site
                  </a>
                  <button
                    type="button"
                    className="landing-preview-btn"
                    onClick={() => {
                      setPreviewProject(p);
                      setDeviceMode("desktop");
                      setIframeKey((k) => k + 1);
                    }}
                    title="Open live website landing page preview"
                  >
                    <Icon name="web" /> Preview Landing Page
                  </button>
                </>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Live Website Landing Page Modal (Open and Close) */}
      {previewProject && (
        <div
          className="preview-modal-backdrop"
          onClick={() => setPreviewProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="preview-modal-title"
        >
          <div
            className={`preview-modal-container device-${deviceMode}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <header className="preview-modal-header">
              <div className="preview-title-group">
                <span className="live-pill" aria-label="Live website">
                  <span className="live-dot" /> LIVE
                </span>
                <h2 id="preview-modal-title" className="preview-title">
                  {previewProject.title}
                </h2>
              </div>

              {/* Responsive Device Switcher */}
              <div className="device-switcher" role="group" aria-label="Device view">
                <button
                  type="button"
                  className={`device-btn ${deviceMode === "desktop" ? "active" : ""}`}
                  onClick={() => setDeviceMode("desktop")}
                  title="Desktop View (100%)"
                >
                  Desktop
                </button>
                <button
                  type="button"
                  className={`device-btn ${deviceMode === "tablet" ? "active" : ""}`}
                  onClick={() => setDeviceMode("tablet")}
                  title="Tablet View (768px)"
                >
                  Tablet
                </button>
                <button
                  type="button"
                  className={`device-btn ${deviceMode === "mobile" ? "active" : ""}`}
                  onClick={() => setDeviceMode("mobile")}
                  title="Mobile View (390px)"
                >
                  Mobile
                </button>
              </div>

              {/* Close Modal Button */}
              <button
                type="button"
                className="preview-close-btn"
                onClick={() => setPreviewProject(null)}
                aria-label="Close live website preview"
                title="Close (Esc)"
              >
                <Icon name="close" />
              </button>
            </header>

            {/* Browser Window Chrome */}
            <div className="preview-browser-chrome">
              <div className="browser-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="browser-address-bar">
                <span className="address-url">
                  {previewProject.landingUrl || previewProject.live}
                </span>
              </div>
              <a
                href={previewProject.live || previewProject.landingUrl}
                target="_blank"
                rel="noreferrer"
                className="external-launch-link"
                title="Open live site in new browser tab"
              >
                <Icon name="link" /> Open in New Tab
              </a>
            </div>

            {/* Live Landing Page Iframe */}
            <div className="preview-iframe-wrapper">
              <iframe
                key={iframeKey}
                src={previewProject.landingUrl || previewProject.live}
                title={`Live Landing Page - ${previewProject.title}`}
                className="preview-iframe"
                loading="eager"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>

            {/* Modal Bottom Bar */}
            <footer className="preview-modal-footer">
              <div className="footer-info">
                <span>Interacting with live landing page</span>
              </div>
              <div className="footer-actions">
                <a
                  href={previewProject.live || previewProject.landingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-preview-visit"
                >
                  <Icon name="link" style={{ marginRight: 6 }} /> Visit Live Site
                </a>
                <button
                  type="button"
                  className="btn-preview-close"
                  onClick={() => setPreviewProject(null)}
                >
                  Close Preview
                </button>
              </div>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
}
