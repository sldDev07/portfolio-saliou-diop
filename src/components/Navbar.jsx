import React, { useState } from "react";
import { Terminal, Menu, X } from "lucide-react";
import NAV_LINKS from "../data/navLinks";

export default function Navbar({ scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          sld<span className="mono">@</span>portfolio<span className="mono">:~$</span>
          <span className="cursor" aria-hidden="true" />
        </div>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <button onClick={() => scrollTo(l.id)}>{l.label}</button>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
          <Terminal size={14} /> Me contacter
        </a>
        <button className="nav-toggle" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <button key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</button>
        ))}
      </div>
    </>
  );
}
