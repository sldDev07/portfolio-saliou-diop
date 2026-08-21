import React from "react";
import TIMELINE from "../data/timeline";
import { Reveal } from "../utils";

export default function Parcours() {
  return (
    <section id="parcours">
      <Reveal className="section-head">
        <span className="eyebrow">03 · --parcours</span>
        <h2>EXPÉRIENCES PROFESSIONNELLES</h2>
      </Reveal>
      <Reveal>
        <div className="trace-window">
          <div className="trace-header">
            <span className="dot" style={{ background: "#ff5f57" }} />
            <span className="dot" style={{ background: "#febc2e" }} />
            <span className="dot" style={{ background: "#28c840" }} />
            <span style={{ marginLeft: 8 }}>mon parcours</span>
          </div>
          <div className="trace-body">
            {TIMELINE.map((t) => (
              <div
                key={t.hop}
                className={`trace-row ${t.timeout ? "trace-row--timeout" : ""} ${t.status === "réalisée" ? "trace-row--current" : ""}`}
              >
                <span className="trace-hop">{t.hop}</span>
                <span className="trace-date">{t.date}</span>
                <span>
                  <span className="trace-title">
                    {t.title}
                  </span><span className="trace-status">{t.status}</span><br />
                  <span className="trace-place">{t.place}</span><br></br><br></br>
                  <span className="trace-title">{t.description}</span><br></br>
                  <span className="trace-title">{t.description2}</span>
                  {t.link && (
                    <>
                      <br></br>
                      <a className="trace-link" href={t.link} target="_blank" rel="noopener noreferrer">
                        ▸ {new URL(t.link).hostname}
                      </a>
                    </>
                  )}
                  <br></br>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
