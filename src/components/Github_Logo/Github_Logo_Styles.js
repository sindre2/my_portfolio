import styled from "styled-components";

export const Github_Logo_Styles = styled.img`
  color: black;
  width: 40px;
  border-radius: 50%;
  &:hover {
    background-color: ${(props) => props.theme.colors_light.nav_link_hover};
  }
`;
