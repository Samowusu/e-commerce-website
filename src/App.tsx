import { Component, ReactNode } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Typography } from "./components/commons/Typography";
import { theme } from "./config/theme";
import { Glossary } from "./screens/playground/Glossary";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { CategoryPage } from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import { Container } from "./components/commons/Container";
import { CartModal } from "./components/cart/CartModal";
import { headerHeight } from "./config/constants";
import type { Product } from "./config/types";
import { segragateProductsToCategories } from "./config/utils";
import CurrencySwitcherCard from "./components/CurrencySwitcherCard";
import { FETCH_CATEGORIES } from "./graphql/queries";
import { graphql } from "@apollo/react-hoc";
import { Query } from "@apollo/react-components";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import { Circles } from "react-loader-spinner";

const withFetchCategoriesQuery = graphql(FETCH_CATEGORIES);
interface States {
  openModal: boolean;
  showCurrencySwitcherCard: boolean;
}
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

  closeCurrencySwitcherCardHandler = () => {
    this.setState({ showCurrencySwitcherCard: false });
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
    // return <Glossary />;
    const data = (this.props as any).data;

    if (data.loading) {
      return (
        <Container
          marginTop={headerHeight}
          justifyContent="center"
          alignItems="center"
        >
          <Circles
            height="80%"
            width="80%"
            color={theme.colors.secondaryText}
            ariaLabel="circles-loading"
            visible={true}
          />
        </Container>
      );
    }

    if (data.error) {
      return (
        <Container
          marginTop={headerHeight}
          justifyContent="center"
          alignItems="center"
        >
          <img
            src="https://www.freecodecamp.org/news/content/images/2021/03/ykhg3yuzq8931--1-.png"
            alt="error-message"
          />
        </Container>
      );
    }

    const segregatedProducts = segragateProductsToCategories(
      data.category?.products
    );
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <Glossary /> */}
        <Header
          onCartIconClick={this.toggleModalHandler}
          onShowCurrencySwitcherCard={this.toggleCurrencySwitcherCardHandler}
          showCurrencySwitcherCard={this.state.showCurrencySwitcherCard}
          onCloseCurrencySwitcherCard={this.closeCurrencySwitcherCardHandler}
          openModal={this.state.openModal}
          onCloseCartModal={this.closeModalHandler}
        />
        {this.state.showCurrencySwitcherCard && (
          <CurrencySwitcherCard
            onShowCurrencySwitcherCard={this.toggleCurrencySwitcherCardHandler}
          />
        )}
        <Container
          marginTop={headerHeight}
          pV="50px"
          onClick={() => {
            if (this.state.showCurrencySwitcherCard) {
              this.closeCurrencySwitcherCardHandler();
            }
          }}
        >
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
                  products={segregatedProducts.clothes}
                />
              }
            />
            <Route
              path="/tech"
              element={
                <CategoryPage
                  categoryName="Tech"
                  products={segregatedProducts.tech}
                />
              }
            />
            <Route path="/:id" element={<ProductDescriptionPage />} />
            <Route path="/tech/:id" element={<ProductDescriptionPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="*"
              element={
                <Container>
                  <img
                    src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
                    alt="404 message"
                  />
                </Container>
              }
            />
          </Routes>
        </Container>
      </ThemeProvider>
    );
  }
}

export default withFetchCategoriesQuery(App);
