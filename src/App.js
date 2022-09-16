import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { About_Me } from "./pages/About_Me";
import { Creations } from "./pages/Creations";
import { Home } from "./pages/Home";
import { CatFactUseState } from "./pages/catFact/CatFactUseState";
import { CatFactUseEffect } from "./pages/catFact/CatFactUseEffect";

function App() {
  return (
    <>
      <nav>
        <Link to="about-me">About me</Link>
        <Link to="creations">Creations</Link>
        <Link to="home">Home</Link>
        <Link to="catfactusestate">Cat Facts useState</Link>
        <Link to="catfactuseeffect">Cat Facts useEffect</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About-Me" element={<About_Me />} />
        <Route path="/Creations" element={<Creations />} />
        <Route path="/CatFactUseState" element={<CatFactUseState />} />
        <Route path="/CatFactUseEffect" element={<CatFactUseEffect />} />
      </Routes>
    </>
  );
}

export default App;
