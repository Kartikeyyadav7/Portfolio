import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0; 
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fontStyle};
    font-size: 1.6rem;
    background-color: ${(props) => props.theme.background};
    cursor: default;
    color :  ${(props) => props.theme.text};
    overflow-x: hidden;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fontStyle};
    color: ${(props) => props.theme.text}
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
