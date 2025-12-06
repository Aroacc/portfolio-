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
        {/* --- Introducción profesional --- */}
        <div className="about-intro">
          <h2 className="section-title">
            Sobre <span className="text-gradient">Mí</span>
          </h2>
          <p className="about-intro-text">
            Soy <strong>Frontend Developer</strong> especializada en crear interfaces web modernas, atractivas y funcionales. 
            Trabajo con <strong>JavaScript, React, HTML y CSS</strong> para construir aplicaciones y landing pages que no solo se ven bien, sino que funcionan perfectamente.
            Además, cuento con experiencia en <strong>QA automatizado con Playwright</strong>, creando pruebas, análisis y métricas para garantizar la calidad del software.
            Mi objetivo es entregar proyectos profesionales, intuitivos y optimizados, que generen confianza y resultados a quienes los usan.
          </p>
        </div>

        {/* --- Tarjetas de servicios --- */}
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


// import React from 'react';
// import { Code, Palette, Lightbulb } from 'lucide-react';
// import './about.css';

// const About = () => {
// const services = [
//   {
//     icon: <Code size={40} />,
//     color: 'purple',
//     title: 'Desarrollo Web',
//     description: 'Creo aplicaciones web modernas y responsivas con React, centradas en funcionalidad y experiencia de usuario.'
//   },
//   {
//     icon: <Palette size={40} />,
//     color: 'pink',
//     title: 'Diseño UI/UX',
//     description: 'Diseño interfaces atractivas e intuitivas que mejoran la interacción del usuario y hacen las aplicaciones fáciles de usar.'
//   },
//   {
//     icon: <Lightbulb size={40} />,
//     color: 'blue',
//     title: 'QA & Automatización',
//     description: 'Realizo pruebas automatizadas con Playwright para garantizar que las aplicaciones funcionen correctamente y sin errores.'
//   }
// ];

//   return (
//     <section id="sobre-mi" className="about-section">
//       <div className="about-container">
//         <h2 className="section-title">
//           Sobre <span className="text-gradient">Mí</span>
//         </h2>
        
//         <div className="about-grid">
//           {services.map((service, index) => (
//             <div key={index} className={`about-card about-card-${service.color}`}>
//               <div className={`about-icon about-icon-${service.color}`}>
//                 {service.icon}
//               </div>
//               <h3 className="about-card-title">{service.title}</h3>
//               <p className="about-card-description">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;