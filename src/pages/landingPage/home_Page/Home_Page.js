import { HomeButton } from "../../../components/styledComponents/HomeButton";
import { TEXT } from "../../../textContent/content";
import selvPortrett from "../../../images/selvPortrett.png";
import { Logo } from "../../../components/LogoSkills/Logo_Render";
import { Home_Styles } from "./Home_Styles";
import { Link } from "react-router-dom";
import { Social_Icons } from "../../../components/Social_Icons/Social_Icons";

export const Home_Page = () => {
  const navigation = TEXT.NAVBAR_TEXT_NAVIGATION;
  return (
    <Home_Styles>
      <div className="home-body">
        <div className="home-container-logo">{Logo()}</div>
        <div className="home-container">
          <img
            src={selvPortrett}
            className="homePage_selfPortrait"
            alt="Bildet av Sindre V. Storesund"
          />
          <h1>{TEXT.HOME_TEXT.TITLE}</h1> 
          <div className="home-buttons-container">
            <div className="home-buttons">
              <HomeButton as={Link} to={`/${navigation.ABOUT_ME}`}>
                {TEXT.HOME_TEXT.BUTTON_ABOUT_ME}
              </HomeButton>
            </div>
            <div className="home-buttons">
              <HomeButton as={Link} to={`/${navigation.CREATIONS}`}>
                {TEXT.HOME_TEXT.BUTTON_CREATIONS}
              </HomeButton>
            </div>
          </div>
          <div className="home-social-logos">
            <Social_Icons />
          </div>
        </div>
        <div className="home-container-two">
          <p>{TEXT.HOME_TEXT.DESCRIPTION}</p>
        </div>
      </div>
    </Home_Styles>
  );
};
