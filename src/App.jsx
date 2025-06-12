import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Background from "./components/Background";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Nav from "./components/Nav";
import { useEffect } from "react";

function ThemeHandler() {
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;

    if (location.pathname === "/") {
      root.style.setProperty("--color-primary", "#001a33");
      root.style.setProperty("--color-secondary", "#113768");
      root.style.setProperty("--color-tertiarye", "#0598ce");
      root.style.setProperty("--color-white", "#ffffff");
      root.style.setProperty("--color-medium-gray", "#555555");
      root.style.setProperty("--color-glass", "#0598ce30");
    } else if (location.pathname === "/skills") {
      root.style.setProperty("--color-primary", "#FA812F");
      root.style.setProperty("--color-secondary", "#FFB22C");
      root.style.setProperty("--color-tertiarye", "#F3C623");
      root.style.setProperty("--color-white", "#ffffff");
      root.style.setProperty("--color-medium-gray", "#055");
      root.style.setProperty("--color-glass", "#fef3e248");
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ThemeHandler />
      <Background />
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
