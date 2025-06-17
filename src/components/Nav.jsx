import React from "react";
import { Link } from "react-router-dom";

import AboutMeSvg from "../assets/SVG/AboutMeSvg";
import SkillsSvg from "../assets/SVG/SkillsSvg";
import ProjectsSvg from "../assets/SVG/ProjectsSvg";
import ContactSvg from "../assets/SVG/Contact.Svg";

const Nav = ({ theme }) => {
  return (
    <div className="icons glassmorphism">
      <nav>
        <ul>
          <Link to="/">
            <AboutMeSvg theme={theme} />
            About
          </Link>

          <Link to="/skills">
            <SkillsSvg theme={theme} />
            Skills
          </Link>

          <Link to="/projects">
            <ProjectsSvg theme={theme} />
            Projects
          </Link>

          <Link to="/contact">
            <ContactSvg theme={theme} />
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
