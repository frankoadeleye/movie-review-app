//now we create our global style... everything in your app will be wrapped in this global style, as in root.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*::before,
*::after,
* {
    box-sizing: border-box;
  }

  html,
  body {
      height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Overpass", sans-serif;
  }
  #root {
   min-height: 100vh;
  }
`;

export default GlobalStyle;
