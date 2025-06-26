import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projrects from "./Pages/Projects";
import Background from "./components/Background";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import AboutVideo from "/video/AboutMe4k.mp4";
import SkillsVideo from "/video/Skills4k.mp4";
import ProjrectsVideo from "/video/Projects4k.mp4";
import ContactVideo from "/video/Contact4k.mp4";
import { nav } from "framer-motion/client";

function AppContent() {
  const location = useLocation();
  const [themeColors, setThemeColors] = useState({});
  const [video, setVideo] = useState(AboutVideo);
  const preloadVideos = [AboutVideo, SkillsVideo];
  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    preloadVideos.forEach((src) => {
      const video = document.createElement("video");
      video.src = src;
      video.preload = "auto";
    });
  }, []);

  useEffect(() => {
    let theme = {};
    let navClass = "";
    let video = {};

    if (location.pathname === "/") {
      theme = {
        primary: "#0598CE",
        secondary: "#03678F",
        tertiary: "#0598CE",
        white: "#ffffff",
        gray: "#555555",
        glass: "#0598CE30",
      };
      navClass = "nav-about";
      video = AboutVideo;
    } else if (location.pathname === "/skills") {
      theme = {
        primary: "#181C14",
        secondary: "#3C3D37",
        tertiary: "#697565",
        white: "#ECDFCC",
        gray: "#B0B0B0",
        glass: "#FFFFFF20",
      };
      navClass = "nav-skills";
      video = SkillsVideo;
    } else if (location.pathname === "/projects") {
      theme = {
        primary: "#2E7D32",
        secondary: "#1B5E20",
        tertiary: "#66BB6A",
        white: "#ffffff",
        gray: "#555555",
        glass: "#2E7D3230",
      };
      navClass = "nav-projects";
      video = ProjrectsVideo;
    } else if (location.pathname === "/contact") {
      theme = {
        primary: "#7E57C2",
        secondary: "#512DA8",
        tertiary: "#B39DDB",
        white: "#ffffff",
        gray: "#555555",
        glass: "#7E57C230",
      };
      navClass = "nav-contact";
      video = ContactVideo;
    }

    setThemeColors(theme);
    setNavClass(navClass);
    setVideo(video);

    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [location]);

  return (
    <>
      <Background video={video} />
      <Nav theme={themeColors} className={navClass} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projrects />} />
      </Routes>
    </>
  );
}

export default AppContent;
