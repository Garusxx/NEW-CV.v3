import "../style/projrects.css";
import projectsData from "../Data/projectsData";
import { TypingEffect } from "../assets/Effects/TypingEffect";
import { useState } from "react";
import { motion } from "framer-motion";
import projectsImage from "../assets/image/background-projects.png";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = Object.values(projectsData);
  const project = projects[currentIndex];

  const handleNext = () => {
    if (currentIndex + 1 < projects.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <img src={projectsImage} alt="Projects" className="about-me-image " />

      <div className="projects-main-content">
        <button
          className="left-button"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          PREVIOUS
        </button>

        <motion.div
          className="projects-container glassmorphism"
          initial={{ opacity: 0, y: -90 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          key={currentIndex + 1}
        >
          <h1>{project.title}</h1>
          <img src={project.image} alt={project.title} />
          <TypingEffect startDelay={500} text={project.description} />
          <div className="link-container">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button type="button">GITHUB</button>
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <button type="button">DEMO</button>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="projects-container-up "
          initial={{ opacity: 0, y: -90 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          key={project.title}
        >
          <h1>{project.title}</h1>
          <img src={project.image} alt={project.title} />
          <TypingEffect startDelay={500} text={project.description} />
          <div className="link-container">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button type="button" disabled={!project.github}>
                GITHUB
              </button>
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <button type="button" disabled={!project.demo}>
                DEMO
              </button>
            </a>
          </div>
        </motion.div>

        <button
          className="right-button"
          onClick={handleNext}
          disabled={currentIndex + 1 >= projects.length}
        >
          NEXT
        </button>
      </div>
    </>
  );
};

export default Projects;
