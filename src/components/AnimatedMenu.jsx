import { useState } from "react";
import { Link } from "react-router-dom";
import AboutMeSvg from "../assets/SVG/AboutMeSvg";
import SkillsSvg from "../assets/SVG/SkillsSvg";
import ProjectsSvg from "../assets/SVG/ProjectsSvg";
import ContactSvg from "../assets/SVG/Contact.Svg";
import "../style/AnimatedMenu.css";

const AnimatedMenu = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`menu-container ${isOpen ? "open" : ""}`}>
      <div className="central-button glassmorphism" onClick={toggleMenu}>
        Menu
      </div>

      <div className="orbit">
        <div className="menu-icon">
          <Link to="/">
            <AboutMeSvg theme={theme} />
            About
          </Link>
        </div>
        <div className="menu-icon">
          <Link to="/skills">
            <SkillsSvg theme={theme} />
            Skills
          </Link>
        </div>
        <div className="menu-icon">
          <Link to="/projects">
            <ProjectsSvg theme={theme} />
            Projects
          </Link>
        </div>
        <div className="menu-icon">
          <Link to="/contact">
            <ContactSvg theme={theme} />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMenu;
