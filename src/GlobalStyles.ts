import { createGlobalStyle } from "styled-components";
import { theme } from "./config/theme";

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

/* a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryText};

  &:hover {

    border-bottom: 3px solid ${({ theme }) => theme.colors.secondaryText}
  } */
/* 
  &:active {
    color: ${({ theme }) => theme.colors.secondaryText}
  }
} */
img {
  
  object-fit: contain;
  height: 100%;
  width: 100%
}
`;
