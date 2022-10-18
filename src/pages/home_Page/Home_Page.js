import { HomeButton } from "../components/HomeButton";
import { Logo } from "./Home_Render_Logo";
import { TEXT } from "../../textContent/content";
import { GitHubLogo } from "../components/GitHubLogo";
import { Route, Routes } from "react-router-dom";
import { About_Me } from "../aboutMe_Page/AboutMe_Page";
import { CreationRender } from "../creations_Page/Creations_Render";
import selvPortrett from "../../images/selvPortrett.png"

export function Home() {
  return (
    <div className="home-body">
      <div className="home-container">
      <img src={selvPortrett} className="homePage_selfPortrait" alt="Bildet av Sindre V. Storesund"/>
        <h1>{TEXT.HOME_TEXT.TITLE}</h1>
        <div className="home-buttons">
          <HomeButton href="/my_portfolio#/about-me">
            {TEXT.HOME_TEXT.BUTTON_ABOUT_ME}
          </HomeButton>

          <HomeButton href="/my_portfolio#/creations">
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
