import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { About_Me } from "./pages/aboutMe_Page/AboutMe_Page";
import { Home } from "./pages/home_Page/Home_Page";
import { Animation } from "./pages/components/Animation";
import { Contact_Me } from "./pages/contactMe_Page/ContactMe_Page";
import { CreationRender } from "./pages/creations_Page/Creations_Render";
import { TEXT } from "./textContent/content";

function App() {
  return (
    <>
      <Animation />
      <nav>
        <h2>【S】</h2>
        <div className="links">
          <Link to="">{TEXT.NAVBAR_TEXT.HOME}</Link>
          <Link to="about-me">{TEXT.NAVBAR_TEXT.ABOUT_ME}</Link>
          <Link to="creations">{TEXT.NAVBAR_TEXT.CREATIONS}</Link>
          <Link to="contact-me">{TEXT.NAVBAR_TEXT.CONTACT_ME}</Link>
        </div>
      </nav>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/About-Me" element={<About_Me />} />
        <Route path="/Creations" element={<CreationRender />} />
        <Route path="/Contact-Me" element={<Contact_Me />} />
      </Routes>
    </>
  );
}

export default App;
