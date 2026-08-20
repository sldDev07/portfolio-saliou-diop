import React from "react";
import TIMELINE from "../data/timeline";
import { Reveal } from "../utils";

export default function Parcours() {
  return (
    <section id="parcours">
      <Reveal className="section-head">
        <span className="eyebrow">03 · traceroute --parcours</span>
        <h2>Parcours</h2>
        <p>Chaque étape est un saut vers l'étape suivante — la formation académique, le terrain, puis la prochaine destination.</p>
      </Reveal>
      <Reveal>
        <div className="trace-window">
          <div className="trace-header">
            <span className="dot" style={{ background: "#ff5f57" }} />
            <span className="dot" style={{ background: "#febc2e" }} />
            <span className="dot" style={{ background: "#28c840" }} />
            <span style={{ marginLeft: 8 }}>traceroute parcours-saliou-diop</span>
          </div>
          <div className="trace-body">
            {TIMELINE.map((t) => (
              <div
                key={t.hop}
                className={`trace-row ${t.timeout ? "trace-row--timeout" : ""} ${t.status === "en cours" ? "trace-row--current" : ""}`}
              >
                <span className="trace-hop">{t.hop}</span>
                <span className="trace-date">{t.date}</span>
                <span>
                  <span className="trace-title">
                    {t.title}
                    <span className="trace-status">{t.status}</span>
                  </span>
                  <span className="trace-place">{t.place}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
