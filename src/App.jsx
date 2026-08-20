import React, { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profil from "./components/Profil";
import Competences from "./components/Competences";
import Parcours from "./components/Parcours";
import Projets from "./components/Projets";
import Formation from "./components/Formation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const [activeNode, setActiveNode] = useState(null);
  const [highlightSkill, setHighlightSkill] = useState(null);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleNodeSelect = useCallback(
    (nodeId) => {
      scrollTo("competences");
      setHighlightSkill(nodeId);
      window.setTimeout(() => setHighlightSkill(null), 2200);
    },
    [scrollTo]
  );

  return (
    <div className="pf-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');

        :root {
          --navy-deep: #061529;
          --navy: #0b2545;
          --panel: #0f2e52;
          --cyan: #63e6e2;
          --amber: #f2a65c;
          --paper: #eaf2f8;
          --paper-dim: #93aec4;
          --grid-line: rgba(160, 196, 232, 0.07);
          --line-strong: rgba(99, 230, 226, 0.35);
          --radius: 4px;
        }

        .pf-root {
          background: var(--navy-deep);
          color: var(--paper);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .pf-root * { box-sizing: border-box; }

        .bp-grid-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
          background-size: 44px 44px;
          -webkit-mask-image: radial-gradient(ellipse 90% 70% at 50% 0%, black 40%, transparent 90%);
          mask-image: radial-gradient(ellipse 90% 70% at 50% 0%, black 40%, transparent 90%);
        }

        .pf-shell {
          position: relative;
          z-index: 1;
        }

        .eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--cyan);
        }

        .mono { font-family: 'JetBrains Mono', monospace; }

        h1, h2, h3, .display {
          font-family: 'Space Grotesk', sans-serif;
        }

        /* ---------------- NAV ---------------- */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 40;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 6vw;
          background: rgba(6, 21, 41, 0.82);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--grid-line);
        }

        .nav-logo {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: var(--paper);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-logo .cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background: var(--cyan);
          animation: blink 1.1s steps(1) infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }

        .nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links button {
          background: none;
          border: none;
          color: var(--paper-dim);
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          padding: 6px 2px;
          border-bottom: 1px solid transparent;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .nav-links button:hover,
        .nav-links button:focus-visible {
          color: var(--cyan);
          border-color: var(--cyan);
          outline: none;
        }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1px solid var(--line-strong);
          color: var(--cyan);
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          padding: 9px 16px;
          border-radius: var(--radius);
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .nav-cta:hover { background: rgba(99, 230, 226, 0.1); }

        .nav-toggle {
          display: none;
          background: none;
          border: 1px solid var(--grid-line);
          color: var(--paper);
          padding: 8px;
          border-radius: var(--radius);
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 2px;
          background: var(--navy);
          border-bottom: 1px solid var(--grid-line);
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu button {
          background: none;
          border: none;
          color: var(--paper-dim);
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          text-align: left;
          padding: 14px 6vw;
          border-bottom: 1px solid var(--grid-line);
        }
        .mobile-menu button:active { color: var(--cyan); }

        /* ---------------- HERO ---------------- */
        .hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
          align-items: center;
          padding: 64px 6vw 90px;
          max-width: 1360px;
          margin: 0 auto;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          color: var(--paper-dim);
          border: 1px solid var(--grid-line);
          padding: 6px 12px;
          border-radius: 999px;
          margin-bottom: 26px;
        }
        .status-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #58e07a;
          box-shadow: 0 0 8px #58e07a;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

        .hero h1 {
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1.02;
          margin: 0 0 18px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .hero h1 span { color: var(--cyan); }

        .hero-sub {
          color: var(--paper-dim);
          font-size: 16.5px;
          line-height: 1.7;
          max-width: 54ch;
          margin: 0 0 34px;
        }

        .hero-ctas { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 30px; }

        .btn-primary, .btn-ghost {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          padding: 13px 22px;
          border-radius: var(--radius);
          display: inline-flex;
          align-items: center;
          gap: 9px;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.15s ease, background 0.2s ease, border-color 0.2s ease;
        }
        .btn-primary {
          background: var(--cyan);
          color: #06202a;
          border: 1px solid var(--cyan);
          font-weight: 600;
        }
        .btn-primary:hover { transform: translateY(-1px); background: #7ef0ec; }
        .btn-ghost {
          background: transparent;
          border: 1px solid var(--grid-line);
          color: var(--paper);
        }
        .btn-ghost:hover { border-color: var(--line-strong); color: var(--cyan); }

        .hero-meta {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--paper-dim);
        }
        .hero-meta span { display: inline-flex; align-items: center; gap: 6px; }

        .hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .topology-svg { width: 100%; max-width: 520px; height: auto; }

        .topo-ring { fill: none; stroke: var(--grid-line); stroke-width: 1; }
        .topo-ring--dim { stroke: var(--grid-line); opacity: 0.6; }
        .topo-link { stroke: rgba(160,196,232,0.22); stroke-width: 1.2; stroke-dasharray: 3 5; }
        .topo-link--active { stroke: var(--amber); stroke-width: 1.6; }
        .topo-center-ring { fill: none; stroke: var(--line-strong); stroke-width: 1.4; }
        .topo-center-outline { fill: none; stroke: var(--navy-deep); stroke-width: 3; }
        .topo-node { cursor: pointer; outline: none; }
        .topo-node-circle {
          fill: var(--navy);
          stroke: var(--grid-line);
          stroke-width: 1.4;
          transition: stroke 0.2s ease, fill 0.2s ease;
        }
        .topo-node-circle--active { stroke: var(--amber); fill: #12335c; }
        .topo-node-icon {
          width: 28px; height: 28px;
          display: flex; align-items: center; justify-content: center;
          color: var(--cyan);
        }
        .topo-node-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          fill: var(--paper-dim);
          transition: fill 0.2s ease;
        }
        .topo-node-label--active { fill: var(--amber); }

        /* ---------------- SECTION SHELL ---------------- */
        section { padding: 90px 6vw; max-width: 1360px; margin: 0 auto; position: relative; }
        .section-alt { background: rgba(15, 46, 82, 0.25); }

        .section-head { margin-bottom: 48px; max-width: 70ch; }
        .section-head .eyebrow { margin-bottom: 10px; display: block; }
        .section-head h2 {
          font-size: clamp(28px, 3.4vw, 40px);
          margin: 0 0 14px;
          font-weight: 600;
        }
        .section-head p { color: var(--paper-dim); line-height: 1.7; font-size: 15.5px; margin: 0; }

        /* ---------------- PROFIL ---------------- */
        .profil-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 48px;
          align-items: start;
        }
        .id-card {
          border: 1px solid var(--grid-line);
          background: linear-gradient(180deg, rgba(99,230,226,0.05), transparent);
          border-radius: 6px;
          padding: 22px;
        }
        .id-photo-wrap {
          width: 100%;
          aspect-ratio: 3 / 3.6;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid var(--grid-line);
          margin-bottom: 16px;
          position: relative;
        }
        .id-photo-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; filter: saturate(0.92) contrast(1.02); }
        .id-photo-wrap::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(11,37,69,0) 55%, rgba(6,21,41,0.55) 100%);
        }
        .id-row { display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--paper-dim); padding: 7px 0; border-top: 1px dashed var(--grid-line); }
        .id-row b { color: var(--paper); font-weight: 500; }

        .profil-text p { color: var(--paper-dim); line-height: 1.85; font-size: 15.5px; margin: 0 0 18px; }
        .profil-text strong { color: var(--paper); font-weight: 600; }

        /* ---------------- SKILLS ---------------- */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 18px;
        }
        .skill-card {
          border: 1px solid var(--grid-line);
          background: var(--navy);
          border-radius: 6px;
          padding: 22px 22px 20px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .skill-card--highlight {
          border-color: var(--amber);
          box-shadow: 0 0 0 1px var(--amber), 0 12px 30px -14px rgba(242,166,92,0.4);
          transform: translateY(-2px);
        }
        .skill-card-head { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .skill-card-head .icon-wrap {
          width: 32px; height: 32px; border-radius: 6px;
          background: rgba(99,230,226,0.08);
          display: flex; align-items: center; justify-content: center;
          color: var(--cyan);
        }
        .skill-card-head h3 { font-size: 14.5px; margin: 0; font-weight: 600; font-family: 'Space Grotesk', sans-serif; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 7px; }
        .skill-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--paper-dim);
          border: 1px solid var(--grid-line);
          padding: 5px 9px;
          border-radius: 3px;
          line-height: 1.4;
        }

        /* ---------------- TIMELINE (traceroute) ---------------- */
        .trace-window {
          border: 1px solid var(--grid-line);
          border-radius: 6px;
          background: #071a30;
          overflow: hidden;
        }
        .trace-header {
          display: flex; align-items: center; gap: 8px;
          padding: 12px 18px;
          border-bottom: 1px solid var(--grid-line);
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--paper-dim);
        }
        .trace-header .dot { width: 9px; height: 9px; border-radius: 50%; }
        .trace-body { padding: 8px 0; }
        .trace-row {
          display: grid;
          grid-template-columns: 44px 130px 1fr;
          gap: 18px;
          align-items: baseline;
          padding: 16px 24px;
          border-bottom: 1px solid rgba(160,196,232,0.05);
          font-family: 'JetBrains Mono', monospace;
        }
        .trace-row:last-child { border-bottom: none; }
        .trace-hop { color: var(--cyan); font-size: 13px; }
        .trace-date { color: var(--paper-dim); font-size: 12px; }
        .trace-title { color: var(--paper); font-size: 14.5px; font-family: 'Inter', sans-serif; font-weight: 500; margin-bottom: 3px; }
        .trace-place { color: var(--paper-dim); font-size: 12.5px; font-family: 'Inter', sans-serif; }
        .trace-status { font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.06em; margin-left: 10px; padding: 2px 8px; border-radius: 999px; border: 1px solid var(--grid-line); color: var(--paper-dim); }
        .trace-row--timeout .trace-title { color: var(--amber); }
        .trace-row--timeout .trace-place { color: var(--amber); opacity: 0.85; }
        .trace-row--timeout .trace-status { border-color: var(--amber); color: var(--amber); }
        .trace-row--current .trace-status { border-color: #58e07a; color: #58e07a; }

        /* ---------------- PROJECTS ---------------- */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 20px;
        }
        .project-card {
          border: 1px solid var(--grid-line);
          border-radius: 6px;
          background: var(--navy);
          padding: 26px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .project-card:hover { border-color: var(--line-strong); transform: translateY(-3px); }
        .project-period { font-family: 'JetBrains Mono', monospace; font-size: 10.5px; color: var(--cyan); text-transform: uppercase; letter-spacing: 0.08em; }
        .project-card h3 { font-size: 17px; margin: 4px 0 0; font-weight: 600; line-height: 1.3; }
        .project-card p { color: var(--paper-dim); font-size: 14px; line-height: 1.7; margin: 0; flex-grow: 1; }
        .project-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .project-tags span {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
          color: var(--paper-dim); border: 1px solid var(--grid-line);
          padding: 3px 8px; border-radius: 3px;
        }
        .project-links { display: flex; gap: 10px; margin-top: 4px; }
        .project-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'JetBrains Mono', monospace; font-size: 12px;
          color: var(--paper);
          border: 1px solid var(--grid-line);
          padding: 8px 13px; border-radius: var(--radius);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .project-link:hover { border-color: var(--cyan); color: var(--cyan); }

        /* ---------------- FORMATION / CERTS ---------------- */
        .two-col {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
        }
        .edu-item { display: flex; gap: 16px; padding: 20px 0; border-bottom: 1px solid var(--grid-line); }
        .edu-item:last-child { border-bottom: none; }
        .edu-icon { width: 38px; height: 38px; border-radius: 6px; background: rgba(99,230,226,0.08); color: var(--cyan); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .edu-item h4 { margin: 0 0 4px; font-size: 15.5px; font-weight: 600; font-family: 'Space Grotesk', sans-serif; }
        .edu-item .edu-place { color: var(--paper-dim); font-size: 13px; margin-bottom: 3px; }
        .edu-item .edu-date { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; color: var(--cyan); }

        .cert-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; margin-bottom: 40px; }
        .cert-list li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 14px; color: var(--paper-dim); line-height: 1.5;
          border: 1px solid var(--grid-line); padding: 12px 14px; border-radius: 4px;
        }
        .cert-list li svg { color: var(--amber); flex-shrink: 0; margin-top: 2px; }

        .lang-block h3 { font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-family: 'JetBrains Mono', monospace; color: var(--paper-dim); margin: 0 0 16px; }
        .lang-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
        .lang-name { font-size: 14.5px; font-weight: 500; }
        .lang-level { font-size: 12px; color: var(--paper-dim); font-family: 'JetBrains Mono', monospace; }
        .lang-bars { display: flex; gap: 4px; margin-top: 6px; }
        .lang-bar { width: 16px; height: 6px; border-radius: 1px; background: var(--grid-line); }
        .lang-bar--filled { background: var(--cyan); }

        /* ---------------- CONTACT ---------------- */
        .contact-panel {
          border: 1px solid var(--grid-line);
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(99,230,226,0.06), rgba(15,46,82,0.4));
          padding: 52px 6vw;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .contact-panel h2 { font-size: clamp(26px, 3vw, 36px); margin: 0 0 14px; }
        .contact-panel p { color: var(--paper-dim); line-height: 1.7; margin: 0; max-width: 46ch; }
        .contact-list { display: flex; flex-direction: column; gap: 12px; }
        .contact-row {
          display: flex; align-items: center; gap: 12px;
          font-family: 'JetBrains Mono', monospace; font-size: 13.5px;
          color: var(--paper);
          text-decoration: none;
          border: 1px solid var(--grid-line);
          padding: 13px 16px; border-radius: var(--radius);
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .contact-row:hover { border-color: var(--cyan); background: rgba(99,230,226,0.05); }
        .contact-row svg { color: var(--cyan); flex-shrink: 0; }

        footer {
          text-align: center;
          padding: 30px 6vw 40px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          color: var(--paper-dim);
        }

        /* ---------------- REVEAL ANIM ---------------- */
        .reveal { opacity: 0; transform: translateY(16px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal--visible { opacity: 1; transform: translateY(0); }

        @media (prefers-reduced-motion: reduce) {
          .reveal { transition: none; opacity: 1; transform: none; }
          .status-dot, .nav-logo .cursor { animation: none; }
        }

        /* ---------------- RESPONSIVE ---------------- */
        @media (max-width: 980px) {
          .hero { grid-template-columns: 1fr; padding-top: 40px; }
          .hero-visual { order: -1; margin-bottom: 10px; }
          .topology-svg { max-width: 380px; }
          .profil-grid { grid-template-columns: 1fr; }
          .id-card { max-width: 320px; }
          .two-col { grid-template-columns: 1fr; }
          .contact-panel { grid-template-columns: 1fr; padding: 40px 6vw; }
        }

        @media (max-width: 720px) {
          .nav-links { display: none; }
          .nav-cta { display: none; }
          .nav-toggle { display: inline-flex; }
          section { padding: 64px 6vw; }
          .trace-row { grid-template-columns: 32px 1fr; }
          .trace-date { grid-column: 2; order: 3; margin-top: 2px; }
        }
      `}</style>

      <div className="bp-grid-bg" aria-hidden="true" />

      <div className="pf-shell">
        <Navbar scrollTo={scrollTo} />
        <Hero
          activeNode={activeNode}
          setActiveNode={setActiveNode}
          onNodeSelect={handleNodeSelect}
          scrollTo={scrollTo}
        />
        <Profil />
        <Competences highlightSkill={highlightSkill} />
        <Parcours />
        <Projets />
        <Formation />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
