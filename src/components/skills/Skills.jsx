import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "React", level: 80 },
    { name: "JavaScript", level: 80 },
    { name: "CSS3", level: 90 },
    { name: "HTML5", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "Tailwind", level: 70 },
    { name: "Playwright", level: 80 },
  ];

  return (
    <section id="habilidades" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">
          Mis <span className="text-gradient">Habilidades</span>
        </h2>

        <div className="skills-grid">
          <div className="skills-column">
            {skills.slice(0, 4).map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="skills-column">
            {skills.slice(3, 6).map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
