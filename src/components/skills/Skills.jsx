import React from "react";
import { Layout, CheckCircle, FlaskConical, Wrench } from "lucide-react";
import "./skills.css";

const skills = [
  {
    icon: Layout,
    title: "Desarrollo Frontend",
    items: [
      "Creación de interfaces responsive y modernas",
      "Componentes reutilizables con React",
      "Consumo de APIs REST y manejo de datos asíncronos",
      "Optimización de rendimiento y buenas prácticas de código",
      "Diseño UI moderno con CSS y Tailwind CSS",
    ],
  },
  {
    icon: FlaskConical,
    title: "Testing & QA",
    items: [
      "Testing funcional de aplicaciones web",
      "Automatización de pruebas con Playwright",
      "Validación de flujos y experiencia de usuario",
      "Detección, análisis y documentación de errores",
      "Generación de métricas y reportes de calidad",
    ],
  },
  {
    icon: Wrench,
    title: "Herramientas Profesionales",
    items: [
      "Control de versiones con Git y GitHub/GitLab",
      "Uso de Vite para proyectos rápidos y optimizados",
      "Consumo de APIs y servicios externos",
      "EmailJS para formularios funcionales",
      "Colaboración en proyectos reales y manejo de workflow",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header" data-aos="fade-down">
          <span className="skills-subtitle">Habilidades</span>
          <h2 className="skills-title">
            Mis <span className="skills-highlight">competencias</span>
          </h2>
          <p className="skills-description">
            Estas son las habilidades que aplico para desarrollar proyectos profesionales, 
            crear interfaces atractivas y mantener la calidad del software.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="skill-icon">
                {React.createElement(skill.icon, { size: 28 })}
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <ul className="skill-list">
                {skill.items.map((item, i) => (
                  <li key={i} className="skill-item" data-aos="fade-right" data-aos-delay={i * 100}>
                    <CheckCircle size={18} className="skill-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;