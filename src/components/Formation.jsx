import React from "react";
import { GraduationCap, Award } from "lucide-react";
import CERTIFICATIONS from "../data/certifications";
import LANGUAGES from "../data/languages";
import { Reveal } from "../utils";

export default function Formation() {
  return (
    <section id="formation">
      <Reveal className="section-head">
        <span className="eyebrow">05 · Formation</span>
        <h2>Formation, certifications &amp; langues</h2>
      </Reveal>
      <div className="two-col">
        <Reveal>
          <div>
            <div className="edu-item">
              <span className="edu-icon"><GraduationCap size={18} /></span>
              <div>
                <h4>Master 1 en Systèmes et Réseaux</h4>
                <div className="edu-place">Université Alioune Diop de Bambey — Bambey, Sénégal</div>
                <div className="edu-date">2025 — 2026</div>
              </div>
            </div>
            <div className="edu-item">
              <span className="edu-icon"><GraduationCap size={18} /></span>
              <div>
                <h4>Licence en Systèmes, Réseaux et Télécoms</h4>
                <div className="edu-place">Université Alioune Diop de Bambey — Bambey, Sénégal</div>
                <div className="edu-date">2022 — 2024</div>
              </div>
            </div>
            <div className="edu-item">
              <span className="edu-icon"><GraduationCap size={18} /></span>
              <div>
                <h4>Baccalauréat Scientifique, Série S2</h4>
                <div className="edu-place">Lycée Mixte Maurice Delafosse — Dakar, Sénégal</div>
                <div className="edu-date">2021</div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div>
            <h3 className="mono" style={{ fontSize: 13, color: "var(--paper-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
              Certifications
            </h3>
            <ul className="cert-list">
              {CERTIFICATIONS.map((c) => (
                <li key={c}><Award size={15} />{c}</li>
              ))}
            </ul>
            <div className="lang-block">
              <h3>Langues</h3>
              {LANGUAGES.map((l) => (
                <div key={l.label}>
                  <div className="lang-row">
                    <span className="lang-name">{l.label}</span>
                    <span className="lang-level">{l.level}</span>
                  </div>
                  <div className="lang-bars">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className={`lang-bar ${i <= l.bars ? "lang-bar--filled" : ""}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
