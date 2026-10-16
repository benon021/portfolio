import { about, facts, education, skills } from "../data.js";

export default function About() {
  return (
    <section className="page">
      <h1 className="title">
        About <span className="accent">Me</span>
      </h1>

      <div className="about-grid">
        <div>
          {about.map((p, i) => (
            <p key={i} className="body">{p}</p>
          ))}
        </div>
        <dl className="facts">
          {facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <h2 className="subtitle">Education</h2>
      <ul className="timeline">
        {education.map((e) => (
          <li key={e.school}>
            <strong>{e.school}</strong>
            <span>{e.detail}</span>
          </li>
        ))}
      </ul>

      <h2 className="subtitle">Skills</h2>
      <div className="skills">
        {skills.map((g) => (
          <div key={g.group} className="skill-group">
            <h3>{g.group}</h3>
            <ul className="chips">
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
