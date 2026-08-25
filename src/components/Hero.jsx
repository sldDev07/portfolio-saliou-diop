import React from "react";
import { Download, ChevronRight, Mail, Phone } from "lucide-react";
import { PHOTO_SRC } from "../config";
import HERO_NODES from "../data/heroNodes";
import { polarToXY } from "../utils";

function HeroTopology({ activeNode, setActiveNode, onNodeSelect }) {
  const cx = 260;
  const cy = 260;
  const r = 190;

  return (
    <svg
      className="topology-svg"
      viewBox="0 0 520 520"
      role="img"
      aria-label="Schéma des domaines de compétences de Saliou Diop"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#63e6e2" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#63e6e2" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={cx} cy={cy} r={r} className="topo-ring" />
      <circle cx={cx} cy={cy} r={r - 55} className="topo-ring topo-ring--dim" />

      {HERO_NODES.map((n) => {
        const p = polarToXY(cx, cy, r, n.angle);
        const isActive = activeNode === n.id;
        return (
          <g key={`link-${n.id}`}>
            <line
              x1={cx}
              y1={cy}
              x2={p.x}
              y2={p.y}
              className={`topo-link ${isActive ? "topo-link--active" : ""}`}
            />
            <circle r="3" className="topo-packet" fill={isActive ? "#f2a65c" : "#63e6e2"}>
              <animateMotion
                dur={isActive ? "1.4s" : "3.2s"}
                repeatCount="indefinite"
                path={`M${cx},${cy} L${p.x},${p.y}`}
              />
            </circle>
          </g>
        );
      })}

      <g>
        <circle cx={cx} cy={cy} r="64" fill="url(#nodeGlow)" />
        <circle cx={cx} cy={cy} r="46" className="topo-center-ring" />
        <clipPath id="photoClip">
          <circle cx={cx} cy={cy} r="42" />
        </clipPath>
        <image
          href={PHOTO_SRC}
          x={cx - 42}
          y={cy - 42}
          width="84"
          height="84"
          clipPath="url(#photoClip)"
          preserveAspectRatio="xMidYMid slice"
        />
        <circle cx={cx} cy={cy} r="42" className="topo-center-outline" />
      </g>

      {HERO_NODES.map((n) => {
        const p = polarToXY(cx, cy, r, n.angle);
        const isActive = activeNode === n.id;
        const Icon = n.icon;
        return (
          <g
            key={n.id}
            transform={`translate(${p.x}, ${p.y})`}
            className="topo-node"
            onMouseEnter={() => setActiveNode(n.id)}
            onMouseLeave={() => setActiveNode(null)}
            onClick={() => onNodeSelect(n.id)}
            role="button"
            tabIndex={0}
            aria-label={`Aller à la section ${n.label}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onNodeSelect(n.id);
            }}
          >
            <circle r="30" className={`topo-node-circle ${isActive ? "topo-node-circle--active" : ""}`} />
            <foreignObject x="-14" y="-14" width="28" height="28" style={{ pointerEvents: "none" }}>
              <div className="topo-node-icon">
                <Icon size={16} strokeWidth={2} />
              </div>
            </foreignObject>
            <text
              y={n.angle > -100 && n.angle < 100 ? 48 : -42}
              textAnchor="middle"
              className={`topo-node-label ${isActive ? "topo-node-label--active" : ""}`}
            >
              {n.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function Hero({ activeNode, setActiveNode, onNodeSelect, scrollTo }) {
  return (
    <header className="hero" id="top">
      <div>
        <h1>
          Saliou <span>DIOP</span>
        </h1>
        <span className="eyebrow">Technicien Systèmes · Réseaux · Télécoms</span><br></br><br></br>
        <p className="hero-sub">
          Étudiant en Master 2 Systèmes et Réseaux à l'Université Alioune Diop de Bambey,
          je conçois, déploie et administre des infrastructures informatiques en mettant
          l'accent sur la <strong>performance, la disponibilité et la sécurité</strong>.
          Mes projets couvrent les <strong>réseaux et le routage avancé</strong> (MPLS, BGP,
          OSPF, IS-IS etc.), l'<strong>administration systèmes et réseaux</strong>, les
          <strong>architectures haute disponibilité</strong> avec Oracle RAC, ainsi que
          le <strong>développement full-stack</strong> et l'<strong>IoT</strong>.
        </p>
        <div className="hero-ctas">
          <a className="btn-primary" href="#projets" onClick={(e) => { e.preventDefault(); scrollTo("projets"); }}>
            Voir les projets <ChevronRight size={15} />
          </a>
          <a className="btn-ghost" href="/CV_Saliou_Diop.pdf" download="CV-Saliou-Diop.pdf">
            <Download size={15} /> Télécharger mon CV
          </a>
        </div>
        <div className="hero-meta">
          <span><Mail size={13} /> salioudiop.sld@gmail.com</span>
          <span><Phone size={13} /> +221 78 105 77 72</span>
        </div>
      </div>
      <div className="hero-visual">
        <HeroTopology activeNode={activeNode} setActiveNode={setActiveNode} onNodeSelect={onNodeSelect} />
      </div>
    </header>
  );
}
