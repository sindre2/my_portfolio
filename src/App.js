import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { About_Me } from "./pages/About_Me";
import { Creations } from "./pages/Creations";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <nav>
        <Link to="about-me">About me</Link>
        <Link to="creations">Creations</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-Me" element={<About_Me />} />
        <Route path="/Creations" element={<Creations />} />
      </Routes>
    </>
  );
}

export default App;
