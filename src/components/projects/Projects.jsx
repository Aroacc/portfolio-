import React from "react";
import { Github } from "lucide-react";
import "./projects.css";

import atresplayer from "../../../assets/atresplayer.png";
import peliculas from "../../../assets/peliculas.png";
import perro from "../../../assets/perro.png";

const Projects = () => {
  const projects = [
    {
      title: "Atresplayer",
      description:
        "Formo parte del equipo de frontend de Atresmedia en Knowmad Mood. Desarrollo y mantengo la plataforma web y Smart TV de Atresplayer con React y JavaScript: resuelvo bugs, implemento cambios de UI y contribuyo al producto junto al equipo. Colaboro también en el proyecto de testing automatizado con Playwright, cubriendo los entornos web y Smart TV para asegurar la calidad y estabilidad de la app.",
      tech: ["React", "Javascript", "Playwright", "Node.js"],
      imagen: atresplayer,
      github: null,
    },
    {
      title: "Movies APP",
      description:
        "Aplicación web desarrollada con React que consume la API de The Movie Database (TMDb) para mostrar películas populares en tiempo real. Incluye componentes dinámicos, gestión de estado con hooks y renderizado basado en datos obtenidos mediante fetch. La interfaz presenta información clave de cada película y permite una navegación visual atractiva y responsiva.",
      tech: ["React", "JavaScript", "TMDb API", "CSS", "Vite"],
      imagen: peliculas,
      github: "https://github.com/Aroacc/movies-app",
    },
    {
      title: "Dog Breed Finder",
      description:
        "Aplicación interactiva construida con React que permite seleccionar una raza de perro y visualizar imágenes obtenidas dinámicamente desde la API pública Dog CEO. Incluye gestión de estado con hooks (useState, useEffect), carga asíncrona de datos, selectores dinámicos basados en respuestas de la API y renderizado automático de imágenes según la raza elegida.",
      tech: ["React", "JavaScript", "Dog CEO API", "CSS", "Fetch API"],
      imagen: perro,
      github: "https://github.com/Aroacc/dog-breed-finder",
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
              <div className="project-image">
                <img src={project.imagen} alt={project.title} />
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <Github size={20} />
                      Ver código
                    </a>
                  )}
                </div>
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