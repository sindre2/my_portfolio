import styled from "styled-components";

export const ContactMe_Page_Body = styled.div`
  .contactMe-body
  {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contactMe-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 400px;
    background-color: ${(props) => props.theme.colors_light.background_one};
    border-radius: 50%;
    color: white;
    text-shadow: 1px 1px solid black;
    animation: render 400ms ease-in;
  }

  .contactMe-container-text {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    line-height: 1.4rem;
  }

  .contactMe-container > h1 {
    margin-bottom: 2rem;
  }

  .contactMe-container-text > p > span {
    text-decoration: underline;
    font-size: 1.1rem;
  }

  /* Viewer settings for Contact me Page */

  @media screen and (max-width: 650px), screen and (max-height: 530px) {
  .links > a,
  .contactMe-container {
    font-size: 0.9rem;
    overflow: hidden;
  }

  .contactMe-container {
    height: 300px;
    width: 300px;
  }

  .contactMe-container-text {
    text-align: center;
  }

  .links > a {
    padding: 5px;
    margin: 0;
    transform: none;
    transition: none;
  }

  nav .links > a:hover {
    padding: 5px;
    color: white;
    transform: none;
    transition: none;
  }
}
`;
