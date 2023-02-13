import { NORTEXT } from "../../textContent/content";
import { NavItems, Nav, NavListMain, LngBtns } from "./navbarStyles";
import { useTranslation, Trans } from "react-i18next";
import { lngs } from "../../textContent/i18n";

export const Navbar = () => {
  const navbar = "NAVBAR_TEXT.";
  // const navbar = NORTEXT.NAVBAR_TEXT;
  const navigation = NORTEXT.NAVBAR_TEXT_NAVIGATION;
  const { t, i18n } = useTranslation();

  return (
    <Nav>
      <h2>【S】</h2>
      <LngBtns>
        <div className="lngButton">
          {Object.keys(lngs).map((lng) => (
            <button
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
              className={i18n.resolvedLanguage === lng? 'TurnedOff' : ''}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </LngBtns>
      <NavListMain>
        <li>
          <NavItems to={`/${navigation.HOME}`}>
          <Trans i18nKey={navbar + "HOME"}></Trans>
            {/* {navbar.HOME} */}
          </NavItems>
        </li>
        <li>
          <NavItems to={`/${navigation.ABOUT_ME}`}>
          <Trans i18nKey={navbar + "ABOUT_ME"}></Trans>  
            {/* {navbar.ABOUT_ME} */}
          </NavItems>
        </li>
        <li>
          <NavItems to={`/${navigation.CREATIONS}`}>
          <Trans i18nKey={navbar + "CREATIONS"}></Trans>
            {/* {navbar.CREATIONS} */}
          </NavItems>
        </li>
        <li>
          <NavItems to={`/${navigation.CONTACT_ME}`}>
          <Trans i18nKey={navbar + "CONTACT_ME"}></Trans>
            {/* {navbar.CONTACT_ME} */}
          </NavItems>
        </li>
      </NavListMain>
    </Nav>
  );
};
