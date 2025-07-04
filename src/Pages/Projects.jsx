import "../style/projrects.css";
import projectsData from "../Data/projectsData";
import { TypingEffect } from "../assets/Effects/TypingEffect";
import { useState } from "react";

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const projects = Object.values(projectsData);

  const handleNext = () => {
    if (startIndex + 2 < projects.length) {
      setStartIndex(startIndex + 2);
    }
  };

  const handlePrevious = () => {
    if (startIndex - 2 >= 0) {
      setStartIndex(startIndex - 2);
    }
  };

  const visibleProjects = projects.slice(startIndex, startIndex + 2);

  return (
    <div className="projects-main-content">
      {visibleProjects.map((project, idx) => (
        <div className="projects-container glassmorphism" key={idx}>
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
        </div>
      ))}

      <div className="pagination-buttons">
        <button onClick={handlePrevious} disabled={startIndex === 0}>
          PREVIOUS
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + 2 >= projects.length}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Projects;
