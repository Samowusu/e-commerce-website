import React, { Component } from "react";
import { CartItemCard } from "../components/cart/CartItemCard";
import { Button } from "../components/commons/Button";
import { Container } from "../components/commons/Container";
import { Typography } from "../components/commons/Typography";
import { theme } from "../config/theme";
import type { RootState } from "../store/store";
import type { Product } from "../config/types";
import { connect } from "react-redux";

interface Props {
  cartProducts: Product[];
  totalPrice: number;
  currency: string;
}

class CartPage extends Component<Props> {
  render() {
    return (
      <Container justifyContent="center">
        <Container width="90%" flexDirection="column" paddingBottom="50px">
          <Typography
            textTransform="uppercase"
            fontWeight={theme.fontWeight.bold}
            fontSize={theme.fontSize.xxl}
          >
            cart
          </Typography>
          <Container
            marginTop="30px"
            flexDirection="column"
            border
            borderColor={theme.colors.ash}
            borderLeft="none"
            borderRight="none"
          >
            {this.props.cartProducts.map((product) => (
              <Container
                borderBottom
                borderColor={theme.colors.ash}
                pV="20px"
                key={product.id}
                height="350px"
              >
                <CartItemCard
                  brandName={product.brand}
                  attributes={product.attributes}
                  productName={product.name}
                  productPrice={product.prices[0].amount}
                  cartPage={true}
                  currencySymbol={product.prices[0].currency.symbol}
                  images={product.gallery}
                />
              </Container>
            ))}
          </Container>
          <Container flexDirection="column" gap="10px" marginTop="30px">
            <Container gap="10px">
              <Typography fontSize={theme.fontSize.l}>tax 21%:</Typography>
              <Typography
                fontSize={theme.fontSize.l}
                fontWeight={theme.fontWeight.bold}
              >
                {this.props.currency}
                {(this.props.totalPrice * 0.21).toFixed(2)}
              </Typography>
            </Container>
            <Container gap="10px">
              <Typography fontSize={theme.fontSize.l}>quantity:</Typography>
              <Typography
                fontSize={theme.fontSize.l}
                fontWeight={theme.fontWeight.bold}
              >
                3
              </Typography>
            </Container>
            <Container gap="10px">
              <Typography
                fontSize={theme.fontSize.l}
                fontWeight={theme.fontWeight.medium}
              >
                total:
              </Typography>
              <Typography
                fontSize={theme.fontSize.l}
                fontWeight={theme.fontWeight.bold}
              >
                {this.props.currency}
                {this.props.totalPrice}
              </Typography>
            </Container>
            <Button bg={theme.colors.secondaryText} pV="10px">
              <Typography
                textTransform="uppercase"
                color={theme.colors.primaryBackground}
                fontWeight={theme.fontWeight.semiBold}
              >
                order
              </Typography>
            </Button>
          </Container>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    cartProducts: state.cartSlice.items,
    totalPrice: state.cartSlice.totalPrice,
    currency: state.currencySlice.currency,
  };
};

export default connect(mapStateToProps)(CartPage);
