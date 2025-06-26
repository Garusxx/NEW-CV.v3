import "../style/projrects.css";
import projectsData from "../Data/projectsData";
import { TypingEffect } from "../assets/Effects/TypingEffect";

const Projrects = () => {
  const projects = Object.values(projectsData).slice(0, 3);

  return (
    <div className="main-content">
      {projects.map((project, idx) => (
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
    </div>
  );
};

export default Projrects;
