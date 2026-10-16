import { useState } from "react";
import Icon from "../components/Icons.jsx";
import { projects } from "../data.js";

const filters = ["All", ...new Set(projects.map((p) => p.category))];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

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
                <a href={p.live} target="_blank" rel="noreferrer">
                  <Icon name="link" /> Live site
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
