import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import backgroundPictureLight from "../../images/bg_bggenerator_com.png"
import backgroundPictureDark from "../../images/background_dark.png"
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html {
    font-size: 1rem;
}
body{
    font-family: ${(props) => props.theme.fonts.text}, sans-serif;
    font-size: 1rem;
    background-image: url(${(props) => props.visualMode? backgroundPictureDark : backgroundPictureLight});
    background-size: cover;
    background-repeat: repeat;
}
h1, h2, h3, h4, h5, h6
{
    font-family: ${(props) => props.theme.fonts.text}, sans-serif;
}
`

//Theme Provider allows for easy editing and access to certain css-settings across the site.
const Provider = ({ children }) => {
  const visualMode = useContext(ThemeContext);
  console.log("Look here!:", visualMode.visualMode)
    return (
      <ThemeProvider theme={theme} >
        <GlobalStyle visualMode={visualMode.visualMode} />
        {children}
      </ThemeProvider>
    );
  };

export default Provider;