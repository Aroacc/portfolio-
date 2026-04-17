import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiVite, SiGit, SiPostman, SiMaildotru, SiTestinglibrary, SiNodedotjs } from "react-icons/si";
import "./tech.css";

const techs = [
  { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Vite", icon: SiVite, color: "#646cff" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "EmailJS", icon: SiMaildotru, color: "#ff5c8d" },
  { name: "Playwright", icon: SiTestinglibrary, color: "#6e40c9" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
];

const TechSection = () => {
  return (
    <section id="tech" className="tech-section">
      <div className="tech-container">
        <h2 className="section-title" data-aos="fade-down">
          <span className="text-gradient">Tecnologías</span> que manejo
        </h2>

        <div className="tech-grid">
          {techs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="tech-card"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Icon size={64} style={{ color: tech.color }} />
                <span className="tech-name">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechSection;