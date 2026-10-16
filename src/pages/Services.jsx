import Icon from "../components/Icons.jsx";
import { services } from "../data.js";

export default function Services() {
  return (
    <section className="page">
      <h1 className="title">
        My <span className="accent">Services</span>
      </h1>
      <div className="card-grid">
        {services.map((s) => (
          <article key={s.title} className="card">
            <div className="card-icon">
              <Icon name={s.icon} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
