import React from "react";
import { Code } from "lucide-react";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Atresplayer",
      description:
        "Formo parte del equipo de frontend de Atresplayer en Knowmad Mood. Desarrollo y mantengo la plataforma web y Smart TV con React y JavaScript: resuelvo bugs, implemento cambios de UI y contribuyo al producto junto al equipo. Colaboro también en el proyecto de testing automatizado con Playwright, cubriendo los entornos web y Smart TV para asegurar la calidad y estabilidad de la app.",
      tech: ["React", "Javascript", "Playwright", "Node.js"],
      gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
    },
    {
      title: "Movies APP",
      description:
        "Aplicación web desarrollada con React que consume la API de The Movie Database (TMDb) para mostrar películas populares en tiempo real. Incluye componentes dinámicos, gestión de estado con hooks y renderizado basado en datos obtenidos mediante fetch. La interfaz presenta información clave de cada película y permite una navegación visual atractiva y responsiva.",
      tech: ["React", "JavaScript", "TMDb API", "CSS", "Vite"],
      gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    },
    {
      title: "Dog breed finder",
      description:
        "Aplicación interactiva construida con React que permite seleccionar una raza de perro y visualizar imágenes obtenidas dinámicamente desde la API pública Dog CEO. Incluye gestión de estado con hooks (useState, useEffect), carga asíncrona de datos, selectores dinámicos basados en respuestas de la API y renderizado automático de imágenes según la raza elegida. La interfaz está estructurada en componentes limpios y modulares.",
      tech: ["React", "JavaScript", "Dog CEO API", "CSS", "Fetch API"],
      gradient: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)",
    },
  ];

  return (
    <section id="proyectos" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title" data-aos="fade-down">
          Mis <span className="text-gradient">Proyectos</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div
                className="project-image"
                style={{ background: project.gradient }}
              >
                <Code size={64} className="project-icon" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

