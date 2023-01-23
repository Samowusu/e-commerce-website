import { Component, ReactNode } from "react";
import { ShopIcon } from "../../assets/svgs/ShopIcon";
import { Container } from "../commons/Container";
import { NavBar } from "./NavBar";
import { DropDownIcon } from "../../assets/svgs/DropDownIcon";
import { CartIcon } from "../../assets/svgs/CartIcon";
import { Typography } from "../commons/Typography";
import { theme } from "../../config/theme";
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
        justifyContent="center"
        position="fixed"
        zIndex="100"
        top="0"
        bg={theme.colors.primaryBackground}
        onClick={() => {
          if (this.props.showCurrencySwitcherCard) {
            this.props.onCloseCurrencySwitcherCard();
          }

          if (this.props.openModal) {
            this.props.onCloseCartModal();
          }
        }}
      >
        <Container
          justifyContent="space-between"
          width="90%"
          maxWidth="1050px"
          paddingRight="60px"
          paddingTop="24px"
          position="relative"
        >
          <NavBar />

          <ShopIcon />
          <Container
            width="80px"
            justifyContent="flex-end"
            alignItems="center"
            height="fit-content"
            gap="10px"
          >
            <Container alignItems="center" width="auto" gap="10px">
              <Typography
                fontSize={theme.fontSize.m}
                fontWeight={theme.fontWeight.medium}
                lineHeight="2px"
              >
                {this.props.currency}
              </Typography>
              <Button
                width="10px"
                height="10px"
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
              <Container
                width="20px"
                height="20px"
                justifyContent="center"
                alignItems="center"
                borderRadius="50%"
                bg={theme.colors.black}
                position="absolute"
                right="50px"
                top="15px"
              >
                <Typography
                  fontSize={theme.fontSize.vs}
                  fontWeight={theme.fontWeight.bold}
                  color={theme.colors.primaryBackground}
                >
                  {totalQuantity}
                </Typography>
              </Container>
            )}
            <Button
              onClick={this.cartModalHandler}
              marginLeft="0px"
              width="auto"
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
