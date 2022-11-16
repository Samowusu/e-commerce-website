import { Component, ReactNode } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Typography } from "./components/commons/Typography";
import { theme } from "./config/theme";
import { Glossary } from "./components/glossary/Glossary";
import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { WomenPage } from "./pages/WomenPage";
import { MenPage } from "./pages/MenPage";
import { KidsPage } from "./pages/KidsPage";
import { CartPage } from "./pages/CartPage";

class App extends Component {
  render(): ReactNode {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <Glossary /> */}
        <Header />
        <Routes>
          <Route path="/" element={<WomenPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/kids" element={<KidsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </ThemeProvider>
    );
  }
}

export default App;
