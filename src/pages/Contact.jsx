import { useState } from "react";
import Icon from "../components/Icons.jsx";
import { profile } from "../data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Fill in your name, email and message before sending.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const items = [
    { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: "phone", label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: "pin", label: "Location", value: profile.location },
    { icon: "linkedin", label: "LinkedIn", value: "benon-seme", href: profile.linkedin },
    { icon: "github", label: "GitHub", value: "benon021", href: profile.github },
  ];

  return (
    <section className="page">
      <h1 className="title">
        Let's Build <span className="accent">Something Useful</span>
      </h1>
      <p className="body">
        I'm open to internships, junior developer roles, freelance projects and collaboration.
        Send a message and I'll get back to you.
      </p>

      <div className="contact-grid">
        <ul className="contact-list">
          {items.map((i) => (
            <li key={i.label}>
              <span className="card-icon sm"><Icon name={i.icon} /></span>
              <div>
                <small>{i.label}</small>
                {i.href ? (
                  <a href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {i.value}
                  </a>
                ) : (
                  <span>{i.value}</span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <form className="form" onSubmit={submit} noValidate>
          <label>
            Your name
            <input name="name" value={form.name} onChange={update} autoComplete="name" />
          </label>
          <label>
            Your email
            <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={update} />
          </label>
          {error && <p className="error" role="alert">{error}</p>}
          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
