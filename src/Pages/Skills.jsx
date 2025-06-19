import skillsData from "../Data/skillsData";
import React, { useState } from "react";
import "../style/skills.css";
import ProgressBar from "../components/ProgressBar";

const Skills = () => {
  const [activeSection, setActiveSection] = useState("FRONTEND");

  const handleSetSection = (section) => {
    setActiveSection(section);
  };

  const currentSkills = skillsData[activeSection] || [];

  return (
    <div className="skills-main">
      <div className="skills-buttons">
        <button
          className={activeSection === "FRONTEND" ? "active" : ""}
          onClick={() => handleSetSection("FRONTEND")}
        >
          Frontend
        </button>
        <button
          className={activeSection === "BACKEND" ? "active" : ""}
          onClick={() => handleSetSection("BACKEND")}
        >
          Backend
        </button>
      </div>
      <div className="skills-container glassmorphism">
        <h2 className="skills-header">{activeSection}</h2>
        <div className="skills-layout">
  
          <div className="skills-titles">
            {currentSkills.map((skill) => (
              <div className="skill-title" key={skill.title}>
                {skill.title}
              </div>
            ))}
          </div>

          <div className="skills-bars">
            {currentSkills.map((skill) => (
              <div className="skill-bar" key={skill.title}>
                <ProgressBar level={skill.level} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
