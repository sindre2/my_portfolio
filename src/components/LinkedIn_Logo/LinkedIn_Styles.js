import styled from "styled-components";

export const LinkedIn_Styles = styled.img`
  color: black;
  width: 40px;
  border-radius: 13px;
  &:hover {
    background-color: ${(props) => props.theme.colors_light.nav_link_hover};
  }
`;
