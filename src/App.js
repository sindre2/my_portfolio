import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { About_Me } from "./pages/aboutMe_Page/AboutMe_Page";
import { Home } from "./pages/Home_Page";
import { Animation } from "./pages/components/Animation";
import { Contact_Me } from "./pages/contactMe_Page/ContactMe_Page";
import { CreationRender } from "./pages/creations_Page/CreationsRender";

function App() {
  return (
    <>
      <Animation />
      <nav>
        <h2>Sindre Vatne Storesund</h2>
        <div className="links">
          <Link to="home">Home</Link>
          <Link to="about-me">About me</Link>
          <Link to="creations">Creations</Link>
          <Link to="contact-me">Contact me</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About-Me" element={<About_Me />} />
        <Route path="/Creations" element={<CreationRender />} />
        <Route path="/Contact-Me" element={<Contact_Me />} />
      </Routes>
    </>
  );
}

export default App;
