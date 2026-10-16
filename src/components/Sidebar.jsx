import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import Icon from "./Icons.jsx";
import { nav } from "../data.js";

export default function Sidebar({ open, onToggle }) {
  return (
    <>
      <header className="topbar">
        <Logo />
        <button
          className="icon-btn"
          onClick={onToggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </header>

      <aside className={`sidebar ${open ? "is-open" : ""}`}>
        <div className="sidebar-logo">
          <Logo />
        </div>
        <nav aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === "/"} className="nav-link">
                  <Icon name={item.icon} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {open && <div className="scrim" onClick={onToggle} />}
    </>
  );
}
