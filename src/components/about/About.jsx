import React from 'react';
import { Code, Palette, Lightbulb } from 'lucide-react';
import './about.css';

const About = () => {
  const services = [
    {
      icon: <Code size={40} />,
      color: 'purple',
      title: 'Desarrollo',
      description: 'Especializada en crear aplicaciones web modernas y responsivas.'
    },
    {
      icon: <Palette size={40} />,
      color: 'pink',
      title: 'Diseño UI/UX',
      description: 'Diseño interfaces intuitivas y atractivas que mejoran la experiencia del usuario.'
    },
    {
      icon: <Lightbulb size={40} />,
      color: 'blue',
      title: 'Innovación',
      description: 'Siempre buscando nuevas soluciones creativas para resolver problemas complejos.'
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