import { HomeButton } from "../../../components/styledComponents/HomeButton";
import { NORTEXT } from "../../../textContent/content";
import selvPortrett from "../../../images/selvPortrett.png";
import { Logo } from "../../../components/LogoSkills/Logo_Render";
import { Home_Styles } from "./Home_Styles";
import { Link } from "react-router-dom";
import { Social_Icons } from "../../../components/Social_Icons/Social_Icons";
import { useTranslation, Trans } from "react-i18next";

export const Home_Page = () => {
  const navigation = "NAVBAR_TEXT_NAVIGATION";
  const home = "HOME_TEXT.";
  const { t } = useTranslation();

  return (
    <Home_Styles>
      <div className="home-body">
        {/* Container of icons for software I can use. Skills section. */}
        <div className="home-container-logo">{Logo()}</div>
        {/* The main container on the homepage containing self-portrait, two buttons that link to about-me and creations and icons that link to github and linkedin. */}
        <div className="home-container">
          <img
            src={selvPortrett}
            className="homePage_selfPortrait"
            alt="Bildet av Sindre V. Storesund"
          />
          <h1>{NORTEXT.HOME_TEXT.TITLE}</h1>
          <div className="home-buttons-container">
            <div className="home-buttons">
              <HomeButton as={Link} to={`/${navigation.ABOUT_ME}`}>
                <Trans i18nKey={home + "BUTTON_ABOUT_ME"}></Trans>
                {/* {NORTEXT.HOME_TEXT.BUTTON_ABOUT_ME} */}
              </HomeButton>
            </div>
            <div className="home-buttons">
              <HomeButton as={Link} to={`/${navigation.CREATIONS}`}>
                <Trans i18nKey={home + "BUTTON_CREATIONS"}></Trans>
                {/* {NORTEXT.HOME_TEXT.BUTTON_CREATIONS} */}
              </HomeButton>
            </div>
          </div>
          <div className="home-social-logos">
            <Social_Icons />
          </div>
        </div>
        {/* Container with a small description of myself. */}
        <div className="home-container-two">
          <p>
            <Trans i18nKey={home + "DESCRIPTION"}></Trans>
            {/* {NORTEXT.HOME_TEXT.DESCRIPTION} */}
          </p>
        </div>
      </div>
    </Home_Styles>
  );
};
