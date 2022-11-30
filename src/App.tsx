import { Component, ReactNode } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Typography } from "./components/commons/Typography";
import { theme } from "./config/theme";
import { Glossary } from "./components/glossary/Glossary";
import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { CategoryPage } from "./pages/CategoryPage";
import { CartPage } from "./pages/CartPage";

class App extends Component {
  render(): ReactNode {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Glossary />
        {/* <Header />
        <Routes>
          <Route path="/" element={<CategoryPage categoryName="Women" />} />
          <Route path="/men" element={<CategoryPage categoryName="Men" />} />
          <Route path="/kids" element={<CategoryPage categoryName="Kids" />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes> */}
      </ThemeProvider>
    );
  }
}

export default App;
