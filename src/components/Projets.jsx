import React from "react";
import { FileText, Github } from "lucide-react";
import PROJECTS from "../data/projects";
import { Reveal } from "../utils";

export default function Projets() {
  return (
    <section id="projets" className="section-alt">
      <Reveal className="section-head">
        <span className="eyebrow">04 · Réalisations</span>
        <h2>Projets</h2>
      </Reveal>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 60}>
            <div className="project-card">
              <span className="project-period">{p.period}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                {p.links.rapport && (
                  <a className="project-link" href={p.links.rapport} target="_blank" rel="noopener noreferrer">
                    <FileText size={13} /> Rapport
                  </a>
                )}
                {p.links.github && (
                  <a className="project-link" href={p.links.github} target="_blank" rel="noopener noreferrer">
                    <Github size={13} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
