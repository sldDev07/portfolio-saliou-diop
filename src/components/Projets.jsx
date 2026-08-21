import React from "react";
import { FileText, Github, ExternalLink } from "lucide-react";
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
              {p.image && (
                <div className="project-cover">
                  <img src={p.image} alt={p.imageAlt || p.title} loading="lazy" decoding="async" />
                </div>
              )}
              <div className="project-card-body">
              <span className="project-period">{p.period}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                {p.links.rapport && (
                  <a className="project-link" href={p.links.rapport} target="_blank" rel="noopener noreferrer">
                    <FileText size={13} /> Telechareger le Rapport
                  </a>
                )}
                {p.links.demo && (
                  <a className="project-link" href={p.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={13} /> Voir la démo
                  </a>
                )}
                {p.links.github && (
                  <a className="project-link" href={p.links.github} target="_blank" rel="noopener noreferrer">
                    <Github size={13} /> GitHub
                  </a>
                )}
              </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
