import { useEffect, useState } from "react";
import Icon from "./Icons.jsx";

const colors = ["#ff2d3a", "#ff8a1f", "#22c55e", "#06b6d4", "#6366f1", "#e84393"];

function load() {
  try {
    return localStorage.getItem("accent") || colors[0];
  } catch {
    return colors[0];
  }
}

export default function ThemePanel() {
  const [open, setOpen] = useState(false);
  const [accent, setAccent] = useState(load);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
    try {
      localStorage.setItem("accent", accent);
    } catch {
      /* storage unavailable */
    }
  }, [accent]);

  return (
    <div className="theme-panel">
      <button
        className="icon-btn round"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change accent color"
        aria-expanded={open}
      >
        <Icon name="cog" />
      </button>
      {open && (
        <div className="swatches" role="group" aria-label="Accent colors">
          {colors.map((c) => (
            <button
              key={c}
              className={`swatch ${c === accent ? "is-active" : ""}`}
              style={{ background: c }}
              onClick={() => setAccent(c)}
              aria-label={`Use accent color ${c}`}
              aria-pressed={c === accent}
            />
          ))}
        </div>
      )}
    </div>
  );
}
