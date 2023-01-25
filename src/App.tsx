import { Component, ReactNode } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { CategoryPage } from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import { Container } from "./components/commons/Container";
import { CartModal } from "./components/cart/CartModal";
import { headerHeight } from "./config/constants";

import { AppRoutes } from "./routes/Routes";
import { persistor } from "./index";

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
  //   persistor?.pause();
  //   persistor.flush().then(() => {
  //     return persistor.purge();
  //   });
  // }

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
    console.log("toggle modal");
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
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header
          onCartIconClick={this.toggleModalHandler}
          onShowCurrencySwitcherCard={this.toggleCurrencySwitcherCardHandler}
          showCurrencySwitcherCard={this.state.showCurrencySwitcherCard}
          onCloseCurrencySwitcherCard={this.closeCurrencySwitcherCardHandler}
          openModal={this.state.openModal}
          onCloseCartModal={this.closeModalHandler}
        />

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
          <AppRoutes />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
