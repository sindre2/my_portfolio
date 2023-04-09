import styled from "styled-components"
import { NavLink } from "react-router-dom"


// The nav main container
export const Nav = styled.nav`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    position: fixed;
    width: 100%;
    background-color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].background_one};
    z-index: 100;
    padding-right: 1rem;
    border-bottom: 2px solid gray;
    & h2 {
    color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].main_icon};
    }
    & .main-icon-and-light-dark-mode-icon {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: 100px;
  }
`;

export const LightDarkModeCheckboxStyle = styled.input`
    appearance: none;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyMSAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjE5MSA1Ljc0NjExTDEgMUw1Ljg0MDQ1IDQuNjU0NjlDOS4yODY2NCA3LjI1NjY3IDExLjMxMjUgMTEuMzI0NyAxMS4zMTI1IDE1LjY0MjlDMTEuMzEyNSAxOS4wNDI3IDEwLjA1NDcgMjIuMzIyMiA3Ljc4MTE4IDI0Ljg1TDIuMjUgMzFMMTMuMjIwNyAyNi42OTMxQzE3LjIxNjcgMjUuMTI0MyAxOS45NzEgMjEuNDE3MyAyMC4zMTk2IDE3LjEzODVDMjAuNzIzMyAxMi4xODI3IDE3LjgyNDUgNy41NDk5OSAxMy4xOTEgNS43NDYxMVoiIGZpbGw9ImJsYWNrIiBzdHJva2U9ImJsYWNrIi8+Cjwvc3ZnPgo=");
    background-size: contain;
    background-repeat: no-repeat;
    height: 26px;
    width: 26px;
    filter: invert(100%) sepia(36%) saturate(132%) hue-rotate(282deg) brightness(113%) contrast(92%);
    &:hover {
      cursor: pointer;
      filter: invert(93%) sepia(66%) saturate(1906%) hue-rotate(357deg) brightness(107%) contrast(104%);
    }
    &:checked {
      cursor: pointer;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NCA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjEuNSIgY3k9IjIyLjUiIHI9IjEwLjUiIGZpbGw9ImJsYWNrIi8+CjxsaW5lIHgxPSIxMi4xNjU3IiB5MT0iMTMuODcyOCIgeDI9IjUuNjQ2NDciIHkyPSI3LjM1MzU2IiBzdHJva2U9ImJsYWNrIi8+CjxsaW5lIHgxPSIzMC42NDY0IiB5MT0iMTQuMTY1NyIgeDI9IjM3LjE2NTYiIHkyPSI3LjY0NjQ2IiBzdHJva2U9ImJsYWNrIi8+CjxsaW5lIHgxPSIzNCIgeTE9IjIyLjUiIHgyPSI0My4yMTk1IiB5Mj0iMjIuNSIgc3Ryb2tlPSJibGFjayIvPgo8bGluZSB4MT0iMzguMTY1NyIgeTE9IjM2Ljg3MjciIHgyPSIzMS42NDY1IiB5Mj0iMzAuMzUzNSIgc3Ryb2tlPSJibGFjayIvPgo8bGluZSB4MT0iMjEuNSIgeTE9IjM1IiB4Mj0iMjEuNSIgeTI9IjQ0LjIxOTUiIHN0cm9rZT0iYmxhY2siLz4KPGxpbmUgeDE9IjExLjgzOSIgeTE9IjMwLjQwOTYiIHgyPSI0LjI4Njc2IiB5Mj0iMzUuNjk3NyIgc3Ryb2tlPSJibGFjayIvPgo8bGluZSB4MT0iOS4yMTk1NCIgeTE9IjIyLjUiIHgyPSItOS41MzY3NGUtMDciIHkyPSIyMi41IiBzdHJva2U9ImJsYWNrIi8+CjxsaW5lIHgxPSIyMS41IiB5MT0iMTAuMjE1NSIgeDI9IjIxLjU2OTciIHkyPSIwLjk5NjIyNCIgc3Ryb2tlPSJibGFjayIvPgo8L3N2Zz4K")
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
  background-color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].background_three};
  color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].text_color};
  text-shadow: ${(props) => props.visualMode ? "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black" : "0"};
  height: 25px;
  width: 70px;
}
.lngButton > button:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].hover_one};
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
  > li > a {
    color: ${(props)=>props.theme[props.visualMode ? "colors_dark" : "colors_light"].text_color};
    text-shadow: ${(props) => props.visualMode ? "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black" : "0"};
  }
  > li > a:hover {
    color: ${(props)=>props.theme[props.visualMode ? "colors_dark" : "colors_light"].nav_link_hover};
    text-shadow: none;
  }
  @media screen and (max-width: 665px) {
    display: none;
    height: 60px;
    padding: 0 0.3rem;
    align-items: center;
    justify-content: space-evenly;
    top: 60px;
    position: fixed;
    width: 100%;
    background-color: ${(props)=>props.theme[props.visualMode ? "colors_dark" : "colors_light"].hamburger_menu};
    z-index: 100;
  }
`;

export const NavItems = styled(NavLink)`
  font-family: ${(props) => props.theme.fonts.header}, sans-serif;
  /* color: ${(props)=>props.theme[props.visualMode? "colors_dark" : "colors_light"].text_color}; */
  background: brown;
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
    color: ${(props) => props.theme[props.visualMode? "colors_dark" : "colors_light"].nav_link_hover};
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