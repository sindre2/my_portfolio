import { NORTEXT } from "../../textContent/content";
import { NavItems, Nav, NavListMain, LngBtns, NavHamburgerMenu, LightDarkModeCheckboxStyle } from "./navbarStyles";
import { useTranslation, Trans } from "react-i18next";
import { lngs } from "../../textContent/i18n";
import { useState, useContext } from "react";
import { useLocation } from 'react-router-dom';
import { ThemeContext } from "../context/ThemeContext";


export const Navbar = () => {
  const navbar = "NAVBAR_TEXT.";
  // const navbar = NORTEXT.NAVBAR_TEXT;
  const navigation = NORTEXT.NAVBAR_TEXT_NAVIGATION;
  const { t, i18n } = useTranslation();

  const location = useLocation();
  const pathname = location.pathname;
  console.log(location)
  const activeNavBtn = {
    home: pathname === `/${navigation.HOME}`,
    aboutMe: pathname === `/${navigation.ABOUT_ME}`,
    creations: pathname === `/${navigation.CREATIONS}`,
    contact: pathname === `/${navigation.CONTACT_ME}`,
  };

  // Tracking the value for light and dark mode so it will rerender when needed.
  const [active, setActive] = useState(activeNavBtn);
  
  // Context value for ThemeContext. Boolean value that determines light and dark mode. 'visualMode' is now an object with a function and a boolean value. Must enter valid object keys to access. 'visualMode.visualMode' and 'visualMode.togglevisualMode'.
  const visualMode = useContext(ThemeContext);
  console.log('visualMode:', visualMode)

  function handleNav(input) {
    console.log(active)
    // setActive(activeNavBtn)
    setActive({ home: false, aboutMe: false, creations: false, contact: false });
    switch (input) {
      case "home":
        return setActive((prev) => ({ ...prev, home: true }));
      case "aboutMe":
        return setActive((prev) => ({ ...prev, aboutMe: true }));
      case "creations":
        return setActive((prev) => ({ ...prev, creations: true }));
      case "contact":
        return setActive((prev) => ({ ...prev, contact: true }));
      default:
        break;
    }
  }

  return (
    // Remember that 'visualMode' is an object with two values. Pass props to all components.
    <Nav visualMode={visualMode.visualMode}>
      <div className="main-icon-and-light-dark-mode-icon">
      <h2>【S】</h2>
      <LightDarkModeCheckboxStyle type="checkbox" onChange={visualMode.toggleVisualMode} />
      </div>
      <LngBtns visualMode={visualMode.visualMode}>
        <div className="lngButton">
          {Object.keys(lngs).map((lng) => (
            <button
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
              className={i18n.resolvedLanguage === lng ? 'TurnedOff' : ''}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </LngBtns>
      <NavHamburgerMenu visualMode={visualMode.visualMode}/>
      <NavListMain visualMode={visualMode.visualMode}>
        <li>
          <NavItems to={`/${navigation.HOME}`} onClick={() => handleNav('home')} style={{ color: active.home ? (visualMode.visualMode? "goldenrod" : "yellow") : '', textDecoration: active.home ? 'underline' : 'none' }}>
            <Trans i18nKey={navbar + "HOME"}></Trans>
          </NavItems>
        </li>
        <li>
          <NavItems to={`/${navigation.ABOUT_ME}`} onClick={() => handleNav('aboutMe')} style={{ color: active.aboutMe ? (visualMode.visualMode? "goldenrod" : "yellow") : '', textDecoration: active.aboutMe ? 'underline' : 'none' }}>
            <Trans i18nKey={navbar + "ABOUT_ME"}></Trans>
          </NavItems>
        </li>
        <li>
          <NavItems to={`/${navigation.CREATIONS}`} onClick={() => handleNav('creations')} style={{ color: active.creations ? (visualMode.visualMode? "goldenrod" : "yellow") : '', textDecoration: active.creations ? 'underline' : 'none' }}>
            <Trans i18nKey={navbar + "CREATIONS"}></Trans>
          </NavItems>
        </li>
        <li>
          <NavItems to={`/${navigation.CONTACT_ME}`} onClick={() => handleNav('contact')} style={{ color: active.contact ? (visualMode.visualMode? "goldenrod" : "yellow") : '', textDecoration: active.contact ? 'underline' : 'none' }}>
            <Trans i18nKey={navbar + "CONTACT_ME"}></Trans>
          </NavItems>
        </li>
      </NavListMain>
    </Nav>
  );
};
