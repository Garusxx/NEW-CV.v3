import React from "react";
import { Link } from "react-router-dom";

import AboutMeSvg from "../assets/SVG/AboutMeSvg";
import SkillsSvg from "../assets/SVG/SkillsSvg";
import ProjectsSvg from "../assets/SVG/ProjectsSvg";
import ContactSvg from "../assets/SVG/Contact.Svg";

const Nav = () => {
  return (
    <div className="icons glassmorphism">
      <nav>
        <ul>
          <Link to="/">
            <AboutMeSvg />
            About
          </Link>

          <Link to="/skills">
            <SkillsSvg />
            Skills
          </Link>

          <Link to="/projects">
            <ProjectsSvg />
            Projects
          </Link>

          <Link to="/contact">
            <ContactSvg />
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
