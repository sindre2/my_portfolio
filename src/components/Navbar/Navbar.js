import { TEXT } from "../../textContent/content";
import { NavItems, Nav, NavListMain } from "./navbarStyles";


export const Navbar = () => {
  const navbar = TEXT.NAVBAR_TEXT;
  const navigation = TEXT.NAVBAR_TEXT_NAVIGATION;
  return (
      <Nav>
        <h2>【S】</h2>
        <NavListMain>
          <li>
            <NavItems to={`/${navigation.HOME}`}>{navbar.HOME}</NavItems>
          </li>
          <li>
            <NavItems to={`/${navigation.ABOUT_ME}`}>{navbar.ABOUT_ME}</NavItems>
          </li>
          <li>
            <NavItems to={`/${navigation.CREATIONS}`}>{navbar.CREATIONS}</NavItems>
          </li>
          <li>
            <NavItems to={`/${navigation.CONTACT_ME}`}>{navbar.CONTACT_ME}</NavItems>
          </li>
        </NavListMain>
      </Nav>
  );
};