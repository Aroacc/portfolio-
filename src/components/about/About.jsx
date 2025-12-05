import React from 'react';
import { Code, Palette, Lightbulb } from 'lucide-react';
import './about.css';

const About = () => {
const services = [
  {
    icon: <Code size={40} />,
    color: 'purple',
    title: 'Desarrollo Web',
    description: 'Creo aplicaciones web modernas y responsivas con React, centradas en funcionalidad y experiencia de usuario.'
  },
  {
    icon: <Palette size={40} />,
    color: 'pink',
    title: 'Diseño UI/UX',
    description: 'Diseño interfaces atractivas e intuitivas que mejoran la interacción del usuario y hacen las aplicaciones fáciles de usar.'
  },
  {
    icon: <Lightbulb size={40} />,
    color: 'blue',
    title: 'QA & Automatización',
    description: 'Realizo pruebas automatizadas con Playwright para garantizar que las aplicaciones funcionen correctamente y sin errores.'
  }
];

  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-container">
        <h2 className="section-title">
          Sobre <span className="text-gradient">Mí</span>
        </h2>
        
        <div className="about-grid">
          {services.map((service, index) => (
            <div key={index} className={`about-card about-card-${service.color}`}>
              <div className={`about-icon about-icon-${service.color}`}>
                {service.icon}
              </div>
              <h3 className="about-card-title">{service.title}</h3>
              <p className="about-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;