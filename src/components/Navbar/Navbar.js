import { NORTEXT } from "../../textContent/content";
import { NavItems, Nav, NavListMain, LngBtns } from "./navbarStyles";
import { useTranslation, Trans } from "react-i18next";
import { lngs } from "../../textContent/i18n";
import { useState } from "react";
import { useLocation } from 'react-router-dom';


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
  const [active, setActive] = useState(activeNavBtn);
  


  // const activeNavBtn =
  // {
  //   home: false,
  //   aboutMe: false,
  //   creations: false,
  //   contact: false,
  // }

  // const [active, setActive] = useState(activeNavBtn)

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
              className={i18n.resolvedLanguage === lng ? 'TurnedOff' : ''}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </LngBtns>
      <NavListMain>
        <li>
          <NavItems to={`/${navigation.HOME}`} onClick={() => handleNav('home')} style={{ color: active.home ? "yellow" : '', textDecoration: active.home ? 'underline' : 'none' }}>
            <Trans i18nKey={navbar + "HOME"}></Trans>
          </NavItems>
        </li>
        <li>
          <NavItems to={`/${navigation.ABOUT_ME}`} onClick={() => handleNav('aboutMe')} style={{ color: active.aboutMe ? "yellow" : '', textDecoration: active.aboutMe ? 'underline' : 'none' }}>
            <Trans i18nKey={navbar + "ABOUT_ME"}></Trans>
          </NavItems>
        </li>
        <li>
          <NavItems to={`/${navigation.CREATIONS}`} onClick={() => handleNav('creations')} style={{ color: active.creations ? "yellow" : '', textDecoration: active.creations ? 'underline' : 'none', }}>
            <Trans i18nKey={navbar + "CREATIONS"}></Trans>
          </NavItems>
        </li>
        <li>
          <NavItems to={`/${navigation.CONTACT_ME}`} onClick={() => handleNav('contact')} style={{ color: active.contact ? "yellow" : '', textDecoration: active.contact ? 'underline' : 'none' }}>
            <Trans i18nKey={navbar + "CONTACT_ME"}></Trans>
          </NavItems>
        </li>
      </NavListMain>
    </Nav>
  );
};
