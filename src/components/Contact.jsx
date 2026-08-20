import React from "react";
import { Mail, Phone, Linkedin, Github, LucidePhoneCall, MapPin } from "lucide-react";
import { Reveal } from "../utils";

export default function Contact() {
  return (
    <section id="contact">
      <Reveal className="contact-panel">
        <div>
          <span className="eyebrow">06 · Contact</span>
          <h2>Discutons de votre prochain projet réseau</h2>
          <p>Disponible pour un stage ou une collaboration technique. Réponse rapide par email ou téléphone.</p>
        </div>
        <div className="contact-list">
          <a className="contact-row" href="mailto:diopsaliou294@gmail.com">
            <Mail size={16} /> salioudiop.sld@gmail.com
          </a>
        
          <a className="contact-row" href="tel:+221781057772">
            <Phone size={16} /> +221 78 105 77 72
          </a>
          <a className="contact-row" href="https://wa.me/221781057772" target="_blank" rel="noopener noreferrer">
            <LucidePhoneCall size={16} /> WhatsApp
          </a>
          <a className="contact-row" href="https://linkedin.com/in/sld07" target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} /> LinkdIn
          </a>
          <a className="contact-row" href="https://github.com/sldDev07" target="_blank" rel="noopener noreferrer">
            <Github size={16} /> GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
