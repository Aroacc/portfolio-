import React from 'react';
import { Rocket, Mail, Code } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg-effects">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-subtitle">Hola, soy</div>
          <h1 className="hero-title">
            <span className="hero-highlight">Aroa Clavijo Caravante</span>
            <br />
            <span>Desarrolladora Web</span>
          </h1>
          <p className="hero-description">
            Transformo ideas en experiencias digitales excepcionales. Combino creatividad, 
            tecnología y pasión para crear soluciones que impactan y conectan.
          </p>
          <div className="hero-buttons">
            <a href="#portafolio" className="btn-primary">
              <Rocket size={20} />
              Ver Mi Trabajo
            </a>
            <a href="#contacto" className="btn-secondary">
              <Mail size={20} />
              Hablemos
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-avatar">
            <div className="hero-avatar-inner">
              <Code size={120} className="hero-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;