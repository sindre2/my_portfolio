import { Logo } from "../../../components/LogoSkills/Logo_Render";
import selvPortrett2 from "../../../images/selvPortrett2.jpg";
import { AboutMe_Styles } from "../../../components/styledPages/AboutMe_Styles";
import { Social_Icons } from "../../../components/Social_Icons/Social_Icons";
import { useTranslation, Trans } from "react-i18next";
import { useContext } from "react";
import { ThemeContext } from "../../../components/context/ThemeContext";

export function About_Me() {
  const aboutMe = "ABOUT_ME_TEXT";
  const visualMode = useContext(ThemeContext)
  const { t } = useTranslation();

  return (
    <AboutMe_Styles visualMode={visualMode.visualMode}>
      <div className="aboutMe-body">
        <div className="aboutMe-container-logo">{Logo()}</div>
        <div className="aboutMe-container">
          <h1>
            <Trans i18nKey={aboutMe + ".TITLE"}></Trans>
          </h1>
          <p>
            <Trans i18nKey={aboutMe + ".PITCH"}></Trans>
          </p>
          <div className="aboutMe-github-logo">
            <Social_Icons />
          </div>
        </div>
        <img
          src={selvPortrett2}
          className="aboutMe_selfPortrait"
          alt={aboutMe.IMAGE}
        />
      </div>
    </AboutMe_Styles>
  );
}
