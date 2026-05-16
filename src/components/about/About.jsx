import React from 'react';
import { Code, Palette, Lightbulb } from 'lucide-react';
import './about.css';

const About = () => {
  const services = [
    {
      icon: <Code size={40} />,
      color: 'purple',
      title: 'Desarrollo Web Frontend',
      description:
        'Creo interfaces modernas y fluidas con JavaScript, React, HTML y CSS, enfocadas en rendimiento, accesibilidad y experiencia de usuario.'
    },
    {
      icon: <Palette size={40} />,
      color: 'pink',
      title: 'Diseño UI/UX y Landing Pages',
      description:
        'Diseño interfaces intuitivas, atractivas y responsive. Desarrollo landing pages optimizadas para conversión, accesibilidad y usabilidad.'
    },
    {
      icon: <Lightbulb size={40} />,
      color: 'blue',
      title: 'QA Automatizado & Métricas',
      description:
        'Creo pruebas automatizadas con Playwright para garantizar la calidad y correcto funcionamiento de las aplicaciones, además de generar análisis y métricas de rendimiento.'
    }
  ];

  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-container">
        <div className="about-intro" data-aos="fade-up">
          <h2 className="section-title">
            Sobre <span className="text-gradient">Mí</span>
          </h2>
         <p className="about-intro-text">
  Soy <strong>Desarrolladora Frontend Developer</strong> actualmente en <strong>Knowmad Mood</strong>, 
  donde formo parte del equipo de front de <strong>Atresmedia</strong>. Desarrollo y 
  mantengo la plataforma de Atresplayer en <strong>web y Smart TV</strong> con <strong>React y JavaScript</strong>: 
  resuelvo bugs, implemento cambios de UI, mejoro componentes y contribuyo al día a día 
  del producto junto al resto del equipo. Además formo parte del proyecto de 
  <strong> testing automatizado con Playwright</strong>, cubriendo los entornos web y Smart TV 
  para garantizar que la app funcione correctamente. Me especializo en interfaces modernas 
  y funcionales, donde el código limpio y la experiencia de usuario van siempre de la mano.
</p>
        </div>

        <div className="about-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`about-card about-card-${service.color}`}
              data-aos="fade-up"
              data-aos-delay={index * 150} 
            >
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

