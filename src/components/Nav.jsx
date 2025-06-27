import React from "react";
import { Link } from "react-router-dom";

import AboutMeSvg from "../assets/SVG/AboutMeSvg";
import SkillsSvg from "../assets/SVG/SkillsSvg";
import ProjectsSvg from "../assets/SVG/ProjectsSvg";
import ContactSvg from "../assets/SVG/Contact.Svg";

const Nav = ({ theme, className }) => {
  return (
    <div className={`${className} nav-base glassmorphism`}>
      <nav>
        <ul>
          <Link to="/">
            <AboutMeSvg theme={theme} size={64} />
            About
          </Link>

          <Link to="/skills">
            <SkillsSvg theme={theme} size={64} />
            Skills
          </Link>

          <Link to="/projects">
            <ProjectsSvg theme={theme} size={64} />
            Projects
          </Link>

          <Link to="/contact">
            <ContactSvg theme={theme} size={64} />
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
