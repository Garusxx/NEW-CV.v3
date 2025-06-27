import { useState } from "react";
import { Link } from "react-router-dom";
import AboutMeSvg from "../assets/SVG/AboutMeSvg";
import SkillsSvg from "../assets/SVG/SkillsSvg";
import ProjectsSvg from "../assets/SVG/ProjectsSvg";
import ContactSvg from "../assets/SVG/Contact.Svg";
import { motion } from "framer-motion";
import "../style/AnimatedMenu.css";

const AnimatedMenu = ({ theme, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconSize, setIconSize] = useState(96);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.div
      layout
      transition={{ duration: 0.5, type: "spring" }}
      className={`menu-container ${isOpen ? "open" : ""} ${className}`}
    >
      <div className="central-button glassmorphism" onClick={toggleMenu}>
        Menu
      </div>
      <div className="menu-icons-wrapper glassmorphism"></div>
      <div>
        <div className="menu-icon">
          <Link to="/">
            <AboutMeSvg theme={theme} size={iconSize} />
            About
          </Link>
        </div>
        <div className="menu-icon">
          <Link to="/skills">
            <SkillsSvg theme={theme} size={iconSize} />
            Skills
          </Link>
        </div>
        <div className="menu-icon">
          <Link to="/projects">
            <ProjectsSvg theme={theme} size={iconSize} />
            Projects
          </Link>
        </div>
        <div className="menu-icon">
          <Link to="/contact">
            <ContactSvg theme={theme} size={iconSize} />
            Contact
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedMenu;
