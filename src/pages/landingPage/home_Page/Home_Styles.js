import styled from "styled-components";

export const Home_Styles = styled.div`
  .homePage_selfPortrait {
    border-radius: 50%;
    width: 15%;
  }

  .home-body {
    display: grid;
    grid-template-columns: 200px auto 200px;
    align-items: center;
    justify-content: center;
    height: 90vh;
  }

  .home-container,
  .home-container-two {
    color: white;
    border-radius: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* The main container containing buttons and primary heading with a blue background. */

  .home-container {
    height: 500px;
    width: 500px;
    background-color: ${(props) => props.theme.colors_light.background_one};
  }

  .home-container > h1{
    margin: 1.5rem 0 1rem;
  }

  .home-buttons {
    display: flex;
    justify-content: center;
  }

  .home-github-logo {
    padding-top: 1rem
  }

  .home-github-logo > a > img {
    width: 40px;
    border-radius: 50%;
  }

  .home-github-logo > a > img:hover {
    background-color: yellow;
    cursor: pointer;
  }

  /* Secondary container containing a small description on a purple background. */

  .home-container-two {
    align-self: flex-end;
    background-color: ${(props) => props.theme.colors_light.background_two};
    height: 300px;
    width: 300px;
    font-size: 1.1rem;
    padding: 2rem;
    z-index: -1;
  }
  
  /* Animation settings for fading in content. */ 

  .home-container,
  .home-container-two,
  .home-container-logo
  {
    animation: render 400ms ease-in;
  }
  
  @keyframes render {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

  /* Viewer settings for home page */

  @media screen and (max-width: 1100px), screen and (max-height: 620px) {
  .home-body {
    display: flex;
    flex-direction: column-reverse;
    font-size: 0.9rem;
    padding-top: 2rem;
    overflow: scroll;
    height: 100vh;
  }

  .home-container,
  .home-container-two {
    border-radius: 40px;
    margin-bottom: 10px;
  }

  .home-container {
    order: 1;
    max-height: 60%;
    max-width: 60%;
    min-width: 307px;
    min-height: 342px;
  }

  .home-container-two
  {
    align-self: center;
  }

  .home-container-two {
    height: 110px;
  }


  /* logo-container is the div className for the Logo_Render component. */
  
  .logo-container {
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    grid-template-columns: auto auto auto auto;
  }

  .logo-container > img {
    width: 40px;
  }
}
`;