import { TEXT } from "../../textContent/content";
import { GitHubLogo } from "../components/GitHubLogo";
import { Logo } from "../home_Page/Home_Render_Logo";
import selvPortrett from "../../images/selvPortrett.png"

export function About_Me(props) {
  console.log(props);
  return (
    <div className="aboutMe-body">
      <div className="aboutMe-container-logo">
        {Logo()}
      </div>
      <div className="aboutMe-container">
        <h1>{TEXT.ABOUT_ME_TEXT.TITLE}</h1>
        <p>{TEXT.ABOUT_ME_TEXT.PITCH}</p>
        <div className="aboutMe-github-logo">
            <GitHubLogo href="https://github.com/sindre2" />
        </div>
      </div>
        <img src={selvPortrett} className="aboutMe_selfPortrait" alt="Bildet av Sindre V. Storesund"/>
    </div>
  );
}
