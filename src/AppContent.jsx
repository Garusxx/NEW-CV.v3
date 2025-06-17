import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Background from "./components/Background";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

function AppContent() {
  const location = useLocation();
  const [themeColors, setThemeColors] = useState({});

  useEffect(() => {
    let theme = {};

    if (location.pathname === "/") {
      theme = {
        primary: "#0598CE",
        secondary: "#03678F",
        tertiary: "#0598CE",
        white: "#ffffff",
        gray: "#555555",
        glass: "#0598CE30",
      };
    } else if (location.pathname === "/skills") {
      theme = {
        primary: "#FFD600",
        secondary: "#8C7500",
        tertiary: "#FFEB66",
        white: "#ffffff",
        gray: "#055",
        glass: "#fef3e248",
      };
    }

    setThemeColors(theme);

    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [location]);

  return (
    <>
      <Background />
      <Nav theme={themeColors} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default AppContent;
