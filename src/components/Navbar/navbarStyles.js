import styled from "styled-components"
import { NavLink } from "react-router-dom"


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
    & h2 {
    color: yellow;
    cursor: pointer;
  }
`

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

export const LngBtns = styled.div`
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
`

export const NavListMain = styled(NavList)`
  min-width: 40%;
  justify-content: space-evenly;
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