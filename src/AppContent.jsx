import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projrects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Background from "./components/Background";

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

import BgLotr from "./assets/image/bg_lotr.png";
import BgAlien from "./assets/image/bg_alien.png";
import BgFightClub from "./assets/image/bg_fight_club.png";
import BgPF from "./assets/image/bg_pf.png";

import AnimatedMenu from "./components/AnimatedMenu";
import FilmBars from "./components/FilmBars";

function AppContent() {
  const location = useLocation();
  const [themeColors, setThemeColors] = useState({});
  const [video, setVideo] = useState(AboutVideo);
  const preloadVideos = [AboutVideo, SkillsVideo, ProjrectsVideo, ContactVideo];
  const [navClass, setNavClass] = useState("");
  const [filmBarsClass, setFilmBarsClass] = useState("");
  const [videoClass, setVideoClass] = useState("");
  const [poster, setPoster] = useState(BgLotr);

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
    let filmBarsClass = "";
    let videoClass = "";
    let poster = {};

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
      poster = BgLotr;
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
      videoClass = "mirror";
      filmBarsClass = "film-bars-skills";
      poster = BgAlien;
      video = SkillsVideo;
    } else if (location.pathname === "/projects") {
      theme = {
        primary: "#C62828",
        secondary: "#8B0000",
        tertiary: "#EF5350",
        white: "#ffffff",
        gray: "#555555",
        glass: "#C6282830",
      };
      navClass = "nav-projects";
      filmBarsClass = "film-bars-projects";
      poster = BgFightClub;
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
      filmBarsClass = "film-bars-contact";
      poster = BgPF;
      video = ContactVideo;
    }

    setThemeColors(theme);
    setNavClass(navClass);
    setFilmBarsClass(filmBarsClass);
    setVideo(video);
    setVideoClass(videoClass);
    setPoster(poster);

    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [location]);

  return (
    <>
      <Background video={video} className={videoClass} poster={poster} />
      <FilmBars className={filmBarsClass} />
      <AnimatedMenu theme={themeColors} className={navClass} />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projrects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default AppContent;
