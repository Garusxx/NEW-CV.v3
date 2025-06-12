import { useState } from "react";
import { TypingEffect } from "../assets/Effects/TypingEffect";
import { motion } from "framer-motion";
import "../style/About.css";
import educationData from "../Data/educationData";
import careerData from "../Data/careerData";

const About = () => {
  const [count, setCount] = useState(0);
  const [activeSection, setActiveSection] = useState("ABOUT ME");

  const handleSetSection = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="main-content">
        <div className="left-side">
          <div className="header">
            <div className="header-content glassmorphism">
              <div className="avatar-container">
                <img
                  src="/public/image/test.png"
                  className="avatar"
                  alt="avatar"
                />
              </div>
              <div>
                <h1>Rafal Zakrzewski</h1>
                <span className="line-separator"></span>
                <h2>Fullstack Developer</h2>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          layout
          transition={{ duration: 0.5, type: "spring" }}
          className="text-content glassmorphism"
        >
          {activeSection === "ABOUT ME" && (
            <>
              <h2>About Me</h2>
              <span className="line-separator"></span>
              <TypingEffect
                startDelay={500}
                text="On a mission to master JavaScript and React, I’m a developer
                with a creative edge and a passion for storytelling. I love
                building smooth, interactive interfaces that connect with
                users—not just functionally, but emotionally. Heavily inspired
                by 90s pop culture, I infuse my projects with nostalgic energy
                and bold visual style. Whether it's a sleek portfolio or a
                dynamic app, I aim to blend clean code with character."
              />
            </>
          )}
          {activeSection === "EDUCATION" && (
            <>
              <h2>Education</h2>
              <span className="line-separator"></span>
              {educationData.map((item) => (
                <div key={item.id}>
                  <h3>{item.degree}</h3>
                  <TypingEffect startDelay={500} text={item.institution} />
                </div>
              ))}
            </>
          )}
          {activeSection === "CAREER" && (
            <>
              <h2>Career</h2>
              <span className="line-separator"></span>
              {careerData.map((item) => (
                <div key={item.id}>
                  <h3>{item.title}</h3>
                  <h4>{item.employer}</h4>
                  <TypingEffect text={item.content} />
                </div>
              ))}
            </>
          )}
          <div className="buttons-container">
            <button
              className={activeSection === "ABOUT ME" ? "active" : ""}
              onClick={() => handleSetSection("ABOUT ME")}
            >
              ABOUT ME
            </button>
            <button
              className={activeSection === "EDUCATION" ? "active" : ""}
              onClick={() => handleSetSection("EDUCATION")}
            >
              EDUCATION
            </button>
            <button
              className={activeSection === "CAREER" ? "active" : ""}
              onClick={() => handleSetSection("CAREER")}
            >
              CAREER
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
