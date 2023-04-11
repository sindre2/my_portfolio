import styled from "styled-components";

export const AboutMe_Styles = styled.div`
  .aboutMe-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow-y: scroll;
    padding: 8rem 0 6rem;
  }

  /* The logos over skills and programming languages that I know. */
  .aboutMe-container-logo {
    margin-left: auto;
    margin-right: 2rem;
  }

  .aboutMe_selfPortrait {
    margin-right: 12.8%;
    margin-left: 2rem;
  }

  .aboutMe-container,
  .aboutMe-container-logo,
  .aboutMe_selfPortrait {
    animation: render 400ms ease-in;
  }

  /* Container with text about me. */
  .aboutMe-container {
    flex-wrap: wrap;
    justify-self: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 40px;
    height: 75%;
    max-width: 40%;
    background-color: ${(props) => props.theme[props.visualMode? "colors_dark" : "colors_light"].about_me_background_color};
    color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].text_color};
    text-shadow: ${(props) => props.visualMode ? "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black" : "0"};
    padding: 2rem;
    line-height: 25px;
  }

  .aboutMe_selfPortrait {
    border-radius: 50%;
    width: 15%;
  }

  .aboutMe-github-logo
  {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      background-color: ${(props) => props.theme[props.visualMode? "colors_dark" : "colors_light"].linkedin_github_icon};
      &:hover {
        background-color: ${(props) => props.theme[props.visualMode? "colors_dark" : "colors_light"].nav_link_hover};
        cursor: pointer;
      }
    }
  }

  /* CSS for selection only the github logo, linkedin logo keeps it's border radius. */
  .aboutMe-github-logo > a > img {
    width: 40px;
    border-radius: 50%;
  }

  .logo-container {
    display: grid;
    grid-template-columns: auto auto;
    background-color: ${(props) => props.theme[props.visualMode? "colors_dark" : "colors_light"].background_two};
  }

  /* Viewer settings for About_Me page */

  @media screen and (max-width: 936px), screen and (max-height: 630px) {
    .aboutMe-body {
      flex-direction: column-reverse;
      justify-content: center;
      overflow-y: scroll;
      margin: 0;
    }

    .aboutMe_selfPortrait {
      margin: 0 auto 2rem;
      width: 200px;
    }

    .aboutMe-container {
      display: grid;
      grid-template-columns: auto;
      gap: 1rem;
      max-width: 40%;
      min-width: 330px;
      height: 60%;
      border-radius: 40px;
      padding: 0.75rem;
      overflow-y: scroll;
    }

    .aboutMe-container h1 {
      text-align: center;
    }

    .aboutMe-container-logo
    {
      margin: 1rem 0 0;
    }

    /* logo-container is the div className for the Logo_Render component. */
    .logo-container {
      grid-template-columns: none;
      grid-auto-flow: column;
      width: fit-content;
      height: fit-content;
    }

    .logo-container > img {
      width: 40px;
    }
    .aboutMe-github-logo > a > img:hover {
      background-color: yellow;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 590px), screen and (max-height: 630px) {
    .logo-container {
      display: grid;
      grid-template-rows: auto auto;
  }
}
`;
