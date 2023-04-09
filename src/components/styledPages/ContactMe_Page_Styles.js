import styled from "styled-components";

export const ContactMe_Page_Body = styled.div`
  .contactMe-body
  {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .contactMe-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 400px;
    background-color: ${(props) => props.theme[props.visualMode? "colors_dark" : "colors_light"].background_one};
    border-radius: 50%;
    color: ${(props) => props.theme[props.visualMode? "colors_dark" : "colors_light"].text_color};
    text-shadow: ${(props) => props.visualMode ? "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black" : "0"};
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
    overflow-y: scroll;
  }

  .contactMe-container {
    border-radius: 15px;
    height: 200px;
    width: 350px;
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

  @media screen and (max-height: 400px) {
    .contactMe-body {
      padding: 12rem 0;
    }
  }
`;
