import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import backgroundPicture from "../../images/bg_bggenerator_com.png"

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
    background-image: url(${backgroundPicture});
}
h1, h2, h3, h4, h5, h6
{
    font-family: ${(props) => props.theme.fonts.text}, sans-serif;
}
`

//Theme Provider allows for easy editing and access to certain css-settings across the site.
const Provider = ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    );
  };

export default Provider;