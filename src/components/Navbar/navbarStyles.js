import styled from "styled-components"
import { NavLink } from "react-router-dom"
// import { navIcons } from "./NavbarIcons";

// The nav main container
export const Nav = styled.nav`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    position: fixed;
    width: 100%;
    background-color: ${(props)=>props.theme.colors_light.background_one};
    z-index: 100;
    padding-right: 1rem;
    border-bottom: 2px solid gray;
    & h2 {
    color: yellow;
    cursor: pointer;
  }
`;

// The '<ul>' elements with url links for different parts of the page. 
export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  & li {
    height: 100%;
    margin-right: 0.625rem;
  }
  & li:last-child {
    margin-right: 0;
  }
  & li:after {
    display: block;
  }
  & li:hover:after {
    transform: scale(1.2);
  }
`;

// Translation buttons for different languages.
export const LngBtns = styled.div`
.lngButton {
  display:flex;
}
.lngButton > button {
  font-family: ${(props) => props.theme.fonts.header}, sans-serif;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors_light.background_three};
  color: white;
  height: 25px;
  width: 70px;
}
.lngButton > button:hover {
    cursor: pointer;
  }
.lngButton > button:disabled {
  opacity: 30%;
}
@media screen and (max-width: 390px) {
  width: 140px;
}
`
// The div containing the list.
export const NavListMain = styled(NavList)`
  min-width: 40%;
  justify-content: space-evenly;
  @media screen and (max-width: 665px) {
    display: none;
    height: 60px;
    padding: 0 2rem;
    align-items: center;
    justify-content: space-between;
    top: 60px;
    position: fixed;
    width: 100%;
    background-color: ${(props)=>props.theme.colors_light.hamburger_menu};
    z-index: 100;
  }
`;

export const NavItems = styled(NavLink)`
  font-family: ${(props) => props.theme.fonts.header}, sans-serif;
  background: brown;
  color: white;
  height: 99%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: none;
  border: none;
  font-weight: 400;
  text-decoration: none;
  transition: 200ms ease-in;
  transform: scale(1);
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors_light.nav_link_hover};
    transform: scale(1.3);
  }

  @media screen and (max-width: 1380px), screen and (max-height: 540px) {
  &:hover {
    transform: none;
  }
  nav > h2 {
    margin: 0.5rem;
  }
  .ani {
    animation: none;
  }
}
`;

export const NavHamburgerMenu = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 665px) {
    display: block;
    /* Specific width and height use to match the original size of the svg. Stupid mistake to make the ratios uneven. */
    width: 24px;
    height: 24px;
    appearance: none;
    transition: 100ms;
    /* Yellow */
    /* filter: invert(93%) sepia(66%) saturate(1906%) hue-rotate(357deg) brightness(107%) contrast(104%); */
    /* Gray */
    /* filter: invert(76%) sepia(2%) saturate(24%) hue-rotate(329deg) brightness(99%) contrast(94%); */
    /* White */
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyNyAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI3IiBoZWlnaHQ9IjYuNDI4NTciIHJ4PSIzLjIxNDI5IiBmaWxsPSJibGFjayIvPgo8cmVjdCB5PSIxMC4yODU3IiB3aWR0aD0iMjciIGhlaWdodD0iNi40Mjg1NyIgcng9IjMuMjE0MjkiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHk9IjIwLjU3MTQiIHdpZHRoPSIyNyIgaGVpZ2h0PSI2LjQyODU3IiByeD0iMy4yMTQyOSIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
    background-size: cover;
}
    background-repeat: no-repeat;
    /* show the menu when the input is checked */
    &:checked {
      transition: 100ms;
      transform: rotate(90deg);
      filter: invert(93%) sepia(66%) saturate(1906%) hue-rotate(357deg) brightness(107%) contrast(104%);
    }
    &:checked + ${NavListMain} {
      display: flex;
      z-index: 99;
      animation:hamburger-slide 100ms ease-in;
      @keyframes hamburger-slide {
        from {height: 0px;}
        to {height: 60px;}
      }
    }
`;