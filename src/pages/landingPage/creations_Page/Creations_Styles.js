import styled from "styled-components";

export const Creations_Styles = styled.div`
  .creations-body {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 25px;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-top: 70px;
    padding-bottom: 3%;
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
    background-color: bisque;
    border: 4px solid lightblue;
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
    text-align: center;
    height: 8%;
    border-bottom: 2px solid green;
  }

  .creations-container > p {
    height: 20%;
    width: 95%;
    overflow: hidden;
    border: 1px solid ${(props) => props.theme.colors_light.background_one};
    border-radius: 15px;
    padding: 1% 0 0 5%;
    background-color: lightblue;
  }

  .creations-container-image {
    height: 40%;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 2px solid ${(props)=> props.theme.colors_light.background_one};
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
  
  .creation-button
  {
    display: flex;
    align-items: center;
    width: 50%;
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

  @media screen and (max-width: 1380px), screen and (max-height: 540px) {
    .creations-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    height: 100%;
  }

  .creations-container {
    margin: 10px 0;
  }

  .creations-container:first-child {
    margin-top: 70px;
  }
  }



`;
