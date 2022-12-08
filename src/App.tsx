import { Component, ReactNode } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Typography } from "./components/commons/Typography";
import { theme } from "./config/theme";
import { Glossary } from "./screens/playground/Glossary";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { CategoryPage } from "./pages/CategoryPage";
import { CartPage } from "./pages/CartPage";
import { Container } from "./components/commons/Container";
import { CartModal } from "./components/cart/CartModal";
import { headerHeight } from "./config/constants";
import CurrencySwitcherCard from "./components/CurrencySwitcherCard";
import { FETCH_CATEGORIES } from "./graphql/queries";
import { graphql } from "@apollo/react-hoc";
import { Query } from "@apollo/react-components";

interface States {
  openModal: boolean;
  showCurrencySwitcherCard: boolean;
}
const withFetchCategoriesQuery = graphql(FETCH_CATEGORIES);
interface Props {}
class App extends Component<Props, States> {
  state: Readonly<States> = {
    openModal: false,
    showCurrencySwitcherCard: false,
  };

  toggleCurrencySwitcherCardHandler = () => {
    this.setState((prevState) => {
      return {
        showCurrencySwitcherCard: !prevState.showCurrencySwitcherCard,
      };
    });
  };

  toggleModalHandler = () => {
    this.setState((prevState) => {
      return {
        openModal: !prevState.openModal,
      };
    });
  };

  closeModalHandler = () => {
    this.setState({ openModal: false });
  };

  render(): ReactNode {
    console.log((this.props as any).data?.category?.products);
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <Glossary /> */}
        <Header
          onCartIconClick={this.toggleModalHandler}
          onShowCurrencySwitcherCard={this.toggleCurrencySwitcherCardHandler}
          showCurrencySwitcherCard={this.state.showCurrencySwitcherCard}
        />
        {this.state.showCurrencySwitcherCard && (
          <CurrencySwitcherCard
            onShowCurrencySwitcherCard={this.toggleCurrencySwitcherCardHandler}
          />
        )}
        <Container border marginTop={headerHeight} pV="50px">
          <CartModal
            modalIsOpen={this.state.openModal}
            onCloseModal={this.closeModalHandler}
          />
          <Routes>
            <Route
              path="/"
              element={
                <CategoryPage
                  categoryName="clothes"
                  products={(this.props as any).data?.category?.products}
                />
              }
            />
            <Route
              path="/tech"
              element={<CategoryPage categoryName="Tech" />}
            />

            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<h1>NOT FOUND</h1>} />
          </Routes>
        </Container>
      </ThemeProvider>
    );
  }
}

export default withFetchCategoriesQuery(App);
