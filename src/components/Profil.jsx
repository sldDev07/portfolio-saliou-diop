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
            <div className="id-row"><span>Prenom & Nom</span><b>Saliou Diop</b></div>
            <div className="id-row"><span>Formation Actuelle</span><b>Systèmes &amp; Réseaux</b></div>
            <div className="id-row"><span>Base</span><b>Bambey, SN</b></div>
            <div className="id-row"><span>Niveau</span><b>Master 2</b></div>
          </div>
        </Reveal>
        <Reveal delay={80} className="profil-text">
          <p>
            <strong>Étudiant en Master 2 Systèmes et Réseaux</strong> à l'Université Alioune Diop de Bambey,
            titulaire d'une licence en Systèmes, Réseaux et Télécommunications, je possède une solide formation
            dans les domaines des <strong>infrastructures réseaux, de l'administration systèmes,
            de la cybersécurité et des télécommunications</strong>. Mon parcours académique et mes projets
            m'ont permis de développer une approche à la fois théorique et pratique de la conception,
            du déploiement, de l'administration et de la sécurisation des infrastructures informatiques.
          </p>

          <p>
            Je dispose d'une expérience pratique en <strong>administration de bases de données et architectures
            haute disponibilité</strong>, notamment avec <strong>Oracle RAC</strong>, ainsi qu'en déploiement
            et administration d'environnements <strong>Linux</strong> et de services réseau tels que 
            <strong> DNS, PKI, messagerie, FTP et partage de fichiers</strong>. Je possède également des
            compétences en <strong>routage et interconnexion avancés</strong> avec des technologies telles que
            <strong> MPLS, BGP, OSPF et IS-IS</strong>, acquises à travers des travaux pratiques et la mise
            en œuvre d'architectures réseau complexes.
          </p>

          <p>
            Mon profil s'étend également au <strong>développement full-stack</strong> avec
            <strong> Django, React et Flutter</strong>, ainsi qu'à la conception de solutions
            <strong> IoT</strong> <strong>et de Systèmes embarqués</strong> pour la collecte,
            la transmission et la supervision des données. Je possède par ailleurs des connaissances en
            <strong> machine learning, traitement et analyse de données</strong>, développées dans le cadre
            de ma formation et de mes différents projets académiques.
          </p>

          <p>
            Particulièrement intéressé par les problématiques liées à la <strong>cybersécurité, aux réseaux,
            aux systèmes distribués, aux infrastructures haute disponibilité et aux technologies émergentes</strong>,
            je souhaite intégrer une équipe dynamique afin de mettre mes compétences au service de
            <strong> projets techniques concrets</strong>, relever de nouveaux défis et continuer à développer
            mon expertise dans le domaine des systèmes et réseaux.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
