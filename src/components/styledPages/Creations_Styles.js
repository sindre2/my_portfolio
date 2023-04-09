import styled from "styled-components";

export const Creations_Styles = styled.div`
  .creations-body {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: ${(props) => props.theme[props.visualMode? "colors_dark" : "colors_light"].creations_text_color};
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 25px;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-top: 70px;
    padding-bottom: 6rem;
  }

  /* Creations-page container settings */

  .creations-container {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 325px;
    height: 400px;
    background-color: ${(props) => props.theme[props.visualMode? "colors_dark" : "colors_light"].background_creations_card};
    border: 4px solid ${(props) => props.theme[props.visualMode? "colors_dark" : "colors_light"].background_four};
    border-radius: 30px;
    
    padding: 0 5px;
    animation: slide 450ms ease-in;
  }

  @keyframes slide {
  from {
    top: 100vh;
  }
  to {
    top: 0;
  }
  }
  .creations-container > h2 {
    color: ${(props) => props.theme[props.visualMode? "colors_dark" : "colors_light"].creations_headline_text_color};
    text-align: center;
    height: 8%;
    border-bottom: 2px solid ${(props) => props.theme[props.visualMode? "colors_dark" : "colors_light"].creations_border_bottom};
  }

  .creations-container > p {
    height: 20%;
    width: 95%;
    overflow: hidden;
    border: 1px solid ${(props) => props.theme[props.visualMode? "colors_dark" : "colors_light"].background_one};
    border-radius: 15px;
    padding: 1% 0 0 5%;
    background-color: ${(props) => props.theme[props.visualMode? "colors_dark" : "colors_light"].background_four};
  }

  .creations-container-image {
    height: 40%;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 2px solid ${(props)=> props.theme[props.visualMode? "colors_dark" : "colors_light"].background_one};
    border-radius: 15px;
  }

  .creations-container-image > img {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 15px;
  }

  .creations-container-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
  }
  .creations-container-buttons > a {
    color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].text_color};
    background-color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].background_three};
    border: 1px solid ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].border_one};
    text-shadow: ${(props) => props.visualMode ? "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black" : "0"};
    &:hover {
      background-color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].hover_one};
    }
  }
  
  .creation-button
  {
    display: flex;
    align-items: center;
    width: 50%;
  }
  .creation-button > a {
    color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].text_color};
    background-color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].background_three};
    border: 1px solid ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].border_one};
    text-shadow: ${(props) => props.visualMode ? "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black" : "0"};
    &:hover {
      background-color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].hover_one};
    }
  }

  .creation-button:first-child
  {
    justify-content: flex-end;
    padding-right: 0.4rem;
  }

  .creation-button:last-child
  {
    justify-content: flex-start;
    padding-right: 0.4rem;
  }

  /* Viewer settings for Creations page */

  @media screen and (max-width: 1080px), screen and (max-height: 540px) {
    .creations-body {
      grid-template-columns: auto;
      align-items: center;
      overflow-x: hidden;
      overflow-y: scroll;
      height: 100%;
      padding-bottom: 2rem;
    }

    .creations-container {
      margin: 10px 0;
    }

    .creations-container:first-child {
      margin-top: 70px;
    }
  }
`;
