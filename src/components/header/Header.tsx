import { Component, ReactNode } from "react";
import { ShopIcon } from "../../assets/svgs/ShopIcon";
import { Container } from "../commons/Container";
import { NavBar } from "./NavBar";
import { DropDownIcon } from "../../assets/svgs/DropDownIcon";
import { CartIcon } from "../../assets/svgs/CartIcon";
import { Typography } from "../commons/Typography";
import { headerStyles } from "./HeaderStyles";
import { Button } from "../commons/Button";
import { DropUpIcon } from "../../assets/svgs/DropUpIcon";
import type { RootState } from "../../store/store";
import type { Product } from "../../config/types";
import {
  computeTotalQuantity,
  DUMMY_INITIAL_PRODUCT,
} from "../../config/utils";
import { connect } from "react-redux";

interface Props {
  onCartIconClick: () => void;
  onShowCurrencySwitcherCard: () => void;
  onCloseCurrencySwitcherCard: () => void;
  showCurrencySwitcherCard: boolean;
  currency?: string;
  cartItems: Product[];
  openModal: boolean;
  onCloseCartModal: () => void;
}

class Header extends Component<Props> {
  static defaultProps: Props = {
    onCartIconClick: () => console.log("cart icon clicked"),
    onShowCurrencySwitcherCard: () => console.log("currency switcher card"),
    onCloseCurrencySwitcherCard: () =>
      console.log("currency switcher card closed"),
    showCurrencySwitcherCard: false,
    openModal: false,
    onCloseCartModal: () => console.log("cart modal closed"),
    cartItems: [DUMMY_INITIAL_PRODUCT],
  };

  cartModalHandler = () => {
    if (this.props.cartItems?.length === 0) {
      alert("Please add item to cart");
      return;
    }

    this.props.onCartIconClick();
  };

  render(): ReactNode {
    const totalQuantity = computeTotalQuantity(this.props.cartItems);

    return (
      <Container
        style={headerStyles.mainContainer}
        onClick={() => {
          if (this.props.showCurrencySwitcherCard) {
            this.props.onCloseCurrencySwitcherCard();
          }

          if (this.props.openModal) {
            this.props.onCloseCartModal();
          }
        }}
      >
        <Container style={headerStyles.contentContainer}>
          <NavBar />

          <ShopIcon />
          <Container style={headerStyles.rightSectionContainer}>
            <Container style={headerStyles.currencyContainer}>
              <Typography style={headerStyles.currencyText}>
                {this.props.currency}
              </Typography>
              <Button
                style={headerStyles.dropDownButton}
                onClick={this.props.onShowCurrencySwitcherCard}
              >
                {this.props.showCurrencySwitcherCard ? (
                  <DropUpIcon />
                ) : (
                  <DropDownIcon />
                )}
              </Button>
            </Container>
            {/* the container below displays the qty of products */}
            {totalQuantity === 0 ? null : (
              <Container style={headerStyles.totalQuantityContainer}>
                <Typography style={headerStyles.totalQuantityText}>
                  {totalQuantity}
                </Typography>
              </Container>
            )}
            <Button
              onClick={this.cartModalHandler}
              style={headerStyles.cartButton}
            >
              <CartIcon />
            </Button>
          </Container>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    currency: state.currencySlice.currency,
    cartItems: state.cartSlice.items,
  };
};

export default connect(mapStateToProps, null)(Header);
