import skillsData from "../Data/skillsData";
import React, { useState } from "react";
import "../style/skills.css";
import ProgressBar from "../components/ProgressBar";
import { motion } from "framer-motion";
import skillsImage from "../assets/image/bakgrand-skills.png";

const Skills = () => {
  const [activeSection, setActiveSection] = useState("FRONTEND");

  const handleSetSection = (section) => {
    setActiveSection(section);
  };

  const currentSkills = skillsData[activeSection] || [];

  return (
    <div className="skills-main">
      
      <img src={skillsImage} alt="Skills" className="about-me-image" />
      <motion.div
        layout
        transition={{ duration: 0.5, type: "spring" }}
        className="skills-container glassmorphism"
      >
        <h2 className="skills-header">{activeSection}</h2>
        <span className="line-separator"></span>

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
        <div className="skills-buttons">
          <button>Frontend</button>
          <button>Backend</button>
        </div>
      </motion.div>

      <div
        layout
        transition={{ duration: 0.5, type: "spring" }}
        className="skills-container-up "
      >
        <h2 className="skills-header">{activeSection}</h2>
        <span className="line-separator"></span>

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
      </div>
    </div>
  );
};

export default Skills;
