import About from "./Pages/About";
import Background from "./components/Background";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Background />
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
