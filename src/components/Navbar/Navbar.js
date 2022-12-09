import { NORTEXT } from "../../textContent/content";
import { NavItems, Nav, NavListMain } from "./navbarStyles";
import { useTranslation, Trans } from "react-i18next";
import { lngs } from "../../textContent/i18n";

export const Navbar = () => {
  const navbar = NORTEXT.NAVBAR_TEXT;
  const navigation = NORTEXT.NAVBAR_TEXT_NAVIGATION;
  const { t, i18n } = useTranslation();

  return (
    <Nav>
      <h2>【S】</h2>
      <div className="lngButton">
        {Object.keys(lngs).map((lng) => (
          <button
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <NavListMain>
        <li>
          <NavItems to={`/${navigation.HOME}`}>{navbar.HOME}</NavItems>
        </li>
        <li>
          <NavItems to={`/${navigation.ABOUT_ME}`}>{navbar.ABOUT_ME}</NavItems>
        </li>
        <li>
          <NavItems to={`/${navigation.CREATIONS}`}>
            {navbar.CREATIONS}
          </NavItems>
        </li>
        <li>
          <NavItems to={`/${navigation.CONTACT_ME}`}>
            {navbar.CONTACT_ME}
          </NavItems>
        </li>
      </NavListMain>
    </Nav>
  );
};
