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
import { ProductDescriptionPage } from "./pages/ProductDescriptionPage";

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

  // componentDidMount() {
  //   this.setState({
  //     products: (this.props as any).data?.category?.products,
  //   });
  // }

  // componentDidUpdate(prevProps: any) {
  //   if (
  //     prevProps.data.category.products.length !==
  //     (this.props as any).data?.category?.products.length
  //   ) {
  //     this.setState({ products: (this.props as any).data?.category?.products });

  //     const formatProducts = segragateProductsToCategories(
  //       (this.props as any).data?.category?.products
  //     );
  //     this.setState({
  //       clothes: formatProducts.clothes,
  //       techs: formatProducts.tech,
  //     });
  //   }
  // }

  // async initCategoryPage() {
  //   const products = await segragateProductsToCategories(
  //     (this.props as any).data?.category?.products
  //   );

  //   console.log({ products });
  //   this.setState({
  //     clothes: products.clothes,
  //     techs: products.tech,
  //   });
  // }

  // componentDidMount() {
  //   this.initCategoryPage();
  // }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if( (this.props as any).data?.category?.products !== prevProps.data.category.products) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

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
    // return <Glossary />;
    const data = (this.props as any).data;

    if (data.loading) {
      return <div>Loading...</div>;
    }

    if (data.error) {
      return <div>Error</div>;
    }

    const segregatedProducts = segragateProductsToCategories(
      data.category?.products
    );
    console.log("clothes", data.category?.products);
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
            <Route path="*" element={<h1>NOT FOUND</h1>} />
          </Routes>
        </Container>
      </ThemeProvider>
    );
  }
}

export default withFetchCategoriesQuery(App);
