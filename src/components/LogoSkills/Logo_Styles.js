import styled from "styled-components";

export const Logo_Styles = styled.div`
    .logo-container{
    display: grid;
    gap: 1.5rem 1.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    height: fit-content;
    width: fit-content;
    padding: 1rem;
    background-color: ${(props) => props.theme.colors_light.background_two};
    }

    .logo-container > img {
    max-width: 66px;
    max-height: 66px;
  }
`