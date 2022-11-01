import { TEXT } from "../../../textContent/content";
import { Logo } from "../../../components/LogoSkills/Logo_Render";
import selvPortrett from "../../../images/selvPortrett.png";
import { AboutMe_Styles } from "./AboutMe_Styles";
import { Social_Icons } from "../../../components/Social_Icons/Social_Icons";

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
            <Social_Icons />
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
