import { TEXT } from "../../../textContent/content";
import { GitHubLogo } from "../../../components/GitHubLogo";
import { Logo } from "../../../components/LogoSkills/Logo_Render";
import selvPortrett from "../../../images/selvPortrett.png";
import { AboutMe_Styles } from "./AboutMe_Styles";

export function About_Me() {
  const aboutMe = TEXT.ABOUT_ME_TEXT;
  return (
    <AboutMe_Styles>
      <div className="aboutMe-body">
        <div className="aboutMe-container-logo">{Logo()}</div>
        <div className="aboutMe-container">
          <h1>{aboutMe.TITLE}</h1>
          <p>{aboutMe.PITCH}</p>
          <div className="aboutMe-github-logo">
            <GitHubLogo href={TEXT.INFO.GITHUB} />
          </div>
        </div>
        <img
          src={selvPortrett}
          className="aboutMe_selfPortrait"
          alt={aboutMe.IMAGE}
        />
      </div>
    </AboutMe_Styles>
  );
}
