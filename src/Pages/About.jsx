import { useState, useEffect } from "react";
import { TypingEffect } from "../assets/Effects/TypingEffect";
import { motion } from "framer-motion";
import "../style/about.css";
import educationData from "../Data/educationData";
import careerData from "../Data/careerData";
import AboutMeImage from "../assets/image/background-about-me.png";
import Avatar from "../assets/image/test.png";

const About = () => {
  const [count, setCount] = useState(0);
  const [activeSection, setActiveSection] = useState("ABOUT ME");
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 425);

  const handleSetSection = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width <= 768);
      setIsMobileView(width <= 425);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="main-content">
        <motion.div
          className="header"
          initial={{ opacity: 0, x: -90 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.8, 0.25, 1],
          }}
        >
          <div className={`header-content ${!isTablet ? "glassmorphism" : ""}`}>
            <div className="avatar-container">
              <img src={Avatar} className="avatar" alt="avatar" />
            </div>
            <div>
              <h1>Rafal Zakrzewski</h1>
              <span className="line-separator"></span>
              <h2>Fullstack Developer</h2>
            </div>
          </div>
        </motion.div>

        <div className="text-content-wrapper">
          <img src={AboutMeImage} alt="About Me" className="about-me-image" />

          <motion.div
            layout
            initial={{ opacity: 0, x: 90 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 1, type: "spring" }}
            className="text-content glassmorphism"
          >
            {activeSection === "ABOUT ME" && (
              <>
                <h2>About Me</h2>
                <span className="line-separator"></span>
                <p>
                  On a mission to master JavaScript and React, I’m a developer
                  with a creative edge and a passion for storytelling. I love
                  building smooth, interactive interfaces that connect with
                  users—not just functionally, but emotionally. Heavily inspired
                  by 90s pop culture, I infuse my projects with nostalgic energy
                  and bold visual style. Whether it's a sleek portfolio or a
                  dynamic app, I aim to blend clean code with character.
                </p>
              </>
            )}
            {activeSection === "EDUCATION" && (
              <>
                <h2>Education</h2>
                <span className="line-separator"></span>
                {educationData.map((item) => (
                  <div key={item.id}>
                    <h3>{item.degree}</h3>
                    <p>{item.institution}</p>
                  </div>
                ))}
              </>
            )}
            {activeSection === "CAREER" && (
              <>
                <h2>Career</h2>
                <span className="line-separator"></span>
                {careerData.map((item) => (
                  <div
                    key={item.id}
                    className={isMobileView ? "mobile-scroll" : ""}
                  >
                    <h3>{item.title}</h3>
                    <h4>{item.employer}</h4>
                    <p>{item.content}</p>
                  </div>
                ))}
              </>
            )}
            <div className="buttons-container">
              <button>ABOUT ME</button>
              <button>EDUCATION</button>
              <button>CAREER</button>
            </div>
          </motion.div>

          <div className="text-content-up ">
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
                  <div
                    key={item.id}
                    className={isMobileView ? "mobile-scroll" : ""}
                  >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
