import { Component, ReactNode } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Typography } from "./components/commons/Typography";
import { Header } from "./components/header";
import { theme } from "./config/theme";
import { Glossary } from "./components/glossary/Glossary";

class App extends Component {
  render(): ReactNode {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Glossary />
        {/* <Typography>Hello Everybody</Typography>
        <Header /> */}
      </ThemeProvider>
    );
  }
}

export default App;
