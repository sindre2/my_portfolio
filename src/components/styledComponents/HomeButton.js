import styled from "styled-components";

export const HomeButton = styled.a`
  background-color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].background_three};
  font-weight: bold;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].border_one};
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  padding: 0.25rem 1rem;
  width: fit-content;
  height: 2rem;
  font-size: 1.25rem;
  &:hover {
    cursor: pointer;
    }
`;