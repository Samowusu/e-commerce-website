import { Component, ReactNode } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme";
import Header from "./components/header/Header";

import { Container } from "./components/commons/Container";
import { CartModal } from "./components/cart/CartModal";
import { headerHeight } from "./config/constants";

import { AppRoutes } from "./routes/Routes";
import { appStyles } from "./AppStyles";
// import { persistor } from "./index";

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
          style={appStyles.appContainer}
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
