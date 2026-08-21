import React from "react";
import SKILL_CATEGORIES from "../data/skills";
import { Reveal } from "../utils";

export default function Competences({ highlightSkill }) {
  return (
    <section id="competences" className="section-alt">
      <Reveal className="section-head">
        <span className="eyebrow">02 · Fiche technique</span>
        <h2>Compétences</h2>
      </Reveal>
      <div className="skills-grid">
        {SKILL_CATEGORIES.map((cat, i) => {
          const Icon = cat.icon;
          const isHighlighted = highlightSkill === cat.id;
          return (
            <Reveal key={cat.id} delay={i * 40}>
              <div id={`skill-${cat.id}`} className={`skill-card ${isHighlighted ? "skill-card--highlight" : ""}`}>
                <div className="skill-card-head">
                  <span className="icon-wrap"><Icon size={16} /></span>
                  <h3>{cat.label}</h3>
                </div>
                <div className="skill-tags">
                  {cat.items.map((item) => (
                    <span className="skill-tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
