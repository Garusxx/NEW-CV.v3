import "../style/projrects.css";
import projectsData from "../Data/projectsData";

const Projrects = () => {
  const project = projectsData[1];
  return (
    <div className="main-content">
      <div className="glassmorphism projects-container">
        <h1>{project.title}</h1>
        <span className="line-separator"></span>
        <img
          src={project.image}
          alt={project.title}
          style={{ maxWidth: "300px", margin: "20px 0" }}
        />
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Projrects;
