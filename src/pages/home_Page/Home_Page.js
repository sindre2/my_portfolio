import { HomeButton } from "../components/HomeButton";
import { Logo } from "./Home_Render_Logo";
import { TEXT } from "../../textContent/content";
import { GitHubLogo } from "../components/GitHubLogo";
import { Link, Route, Routes } from "react-router-dom";
import { About_Me } from "../aboutMe_Page/AboutMe_Page";
import { CreationRender } from "../creations_Page/Creations_Render";

export function Home() {
  return (
    <div className="home-body">
      <div className="home-container">
        <h1>{TEXT.HOME_TEXT.TITLE}</h1>
        <div className="home-buttons">
          <HomeButton href="/about-me">
            {TEXT.HOME_TEXT.BUTTON_ABOUT_ME}
          </HomeButton>

          <HomeButton href="/creations">
            {TEXT.HOME_TEXT.BUTTON_CREATIONS}
          </HomeButton>
        </div>
        <div className="home-github-logo">
          <GitHubLogo href="https://github.com/sindre2" />
        </div>
      </div>
      <div className="home-container-two">
        <p>{TEXT.HOME_TEXT.DESCRIPTION}</p>
      </div>
      <div className="home-container-logo">{Logo()}</div>
      <Routes>
        <Route path="/About-Me" element={<About_Me />} />
        <Route path="/Creations" element={<CreationRender />} />
      </Routes>
    </div>
  );
}
