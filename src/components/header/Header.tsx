import React, { Component, ReactNode } from "react";
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
import { connect } from "react-redux";

interface Props {
  onCartIconClick: () => void;
  onShowCurrencySwitcherCard: () => void;
  showCurrencySwitcherCard: boolean;
  currency?: string;
  cartItems?: string[];
}

class Header extends Component<Props> {
  static defaultProps: Props = {
    onCartIconClick: () => console.log("cart icon clicked"),
    onShowCurrencySwitcherCard: () => console.log("currency switcher card"),
    showCurrencySwitcherCard: false,
  };

  render(): ReactNode {
    console.log(this.props.cartItems);
    return (
      <>
        <Container
          justifyContent="center"
          position="fixed"
          zIndex="100"
          top="0"
          bg={theme.colors.primaryBackground}
        >
          <Container
            justifyContent="space-between"
            width="90%"
            paddingRight="60px"
            paddingTop="24px"
            position="relative"
          >
            <NavBar />

            <ShopIcon />
            <Container
              maxWidth="65px"
              gap="5px"
              alignItems="center"
              height="fit-content"
            >
              <Typography
                fontSize={theme.fontSize.m}
                fontWeight={theme.fontWeight.medium}
                lineHeight="2px"
              >
                {this.props.currency}
              </Typography>
              <Button
                width="22px"
                height="22px"
                onClick={this.props.onShowCurrencySwitcherCard}
              >
                {this.props.showCurrencySwitcherCard ? (
                  <DropUpIcon />
                ) : (
                  <DropDownIcon />
                )}
              </Button>
              {/* the container below displays the qty of products */}
              {this.props.cartItems?.length === 0 ? null : (
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
                    {this.props.cartItems?.length}
                  </Typography>
                </Container>
              )}
              <Button onClick={this.props.onCartIconClick} marginLeft="10px">
                <CartIcon />
              </Button>
            </Container>
          </Container>
        </Container>
      </>
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
