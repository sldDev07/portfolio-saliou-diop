import React from "react";
import { PHOTO_SRC } from "../config";
import { Reveal } from "../utils";

export default function Profil() {
  return (
    <section id="profil">
      <Reveal className="section-head">
        <span className="eyebrow">01 · Profil</span>
        <h2>Une base solide en systèmes, réseaux et sécurité</h2>
      </Reveal>
      <div className="profil-grid">
        <Reveal>
          <div className="id-card">
            <div className="id-photo-wrap">
              <img src={PHOTO_SRC} alt="Photo de Saliou Diop" />
            </div>
            <div className="id-row"><span>Nom</span><b>Saliou Diop</b></div>
            <div className="id-row"><span>Rôle</span><b>Systèmes &amp; Réseaux</b></div>
            <div className="id-row"><span>Base</span><b>Louga, SN</b></div>
            <div className="id-row"><span>Statut</span><b>Master 1</b></div>
          </div>
        </Reveal>
        <Reveal delay={80} className="profil-text">
          <p>
            <strong>Étudiant en Master 1 Systèmes et Réseaux</strong> à l'Université Alioune Diop de Bambey,
            titulaire d'une licence en Systèmes, Réseaux et Télécoms avec une forte orientation
            <strong> cybersécurité</strong>.
          </p>
          <p>
            Expérience concrète en <strong>administration de bases de données haute disponibilité</strong> (Oracle RAC),
            déploiement d'infrastructures réseau et services Linux (DNS, PKI, messagerie, FTP, partage de fichiers),
            <strong> routage avancé</strong> (MPLS, BGP, OSPF, IS-IS), développement full-stack
            (Django, React, Flutter) et <strong>IoT</strong> (ESP32, GPS, LoRa), ainsi que machine learning,
            traitement et analyse de données dans le cadre de ma formation.
          </p>
          <p>
            Je cherche à intégrer une équipe où je pourrai relever des défis techniques concrets.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
