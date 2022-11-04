import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0
}

body {

  font-family: "Raleway", sans-serif;
  /* font-family: "Roboto", sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;