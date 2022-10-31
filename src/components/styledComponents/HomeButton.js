import styled from "styled-components";

export const HomeButton = styled.a`
  background: seagreen;
  font-weight: bold;
  border-radius: 15px;
  border: 1px solid whitesmoke;
  color: white;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  margin: 0.5rem 1rem;
  padding: 0.25rem 1rem;
  max-width: 17rem;
  font-size: 1.25rem;
  &:hover {
    background-color: blueviolet;
    cursor: pointer;
    }
`;