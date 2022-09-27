import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { About_Me } from "./pages/AboutMe_Page";
import { Creations } from "./pages/Creations_Page";
import { Home } from "./pages/Home_Page";
import { Animation } from "./pages/components/Animation";
import { Contact_Me } from "./pages/ContactMe_Page";
import { Cv } from "./pages/Cv_Page";

function App() {
  return (
    <>
      <Animation />
      <nav>
        <h2>Sindre Vatne Storesund</h2>
        <div className="links">
          <Link to="about-me">About me</Link>
          <Link to="creations">Creations</Link>
          <Link to="home">Home</Link>
          <Link to="cv">CV</Link>
          <Link to="contact-me">Contact me</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About-Me" element={<About_Me />} />
        <Route path="/Creations" element={<Creations />} />
        <Route path="/Cv" element={<Cv />} />
        <Route path="/Contact-Me" element={<Contact_Me />} />
      </Routes>
    </>
  );
}

export default App;
