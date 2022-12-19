import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../commons/Container";
import { Typography } from "../commons/Typography";
import { theme } from "../../config/theme";
import CartItemCard from "./CartItemCard";
import { Button } from "../commons/Button";
import type { RootState } from "../../store/store";
import type { Product } from "../../config/types";
import { computeTotalQuantity } from "../../config/utils";
import { connect } from "react-redux";
import { initialProduct } from "../../store/cartSlice";

interface Props {
  cartProducts: Product[];
  onCheckout?: () => void;
  onCloseModal?: () => void;
  totalPrice: number;
  currencyIndex: number;
  currency: string;
}
class CartOverlay extends Component<Props> {
  static defaultProps: Props = {
    onCheckout: () => console.log("checkout"),
    onCloseModal: () => console.log("cart Modal is closed"),
    cartProducts: [initialProduct],
    totalPrice: 0,
    currencyIndex: 0,
    currency: "$",
  };

  render() {
    const totalQuantity = computeTotalQuantity(this.props.cartProducts);

    const bagDescription = totalQuantity === 1 ? "item" : "items";
    return (
      <Container padding="10px" maxWidth="350px">
        <Container width="100%" flexDirection="column">
          <Container gap="5px" marginBottom="25px">
            <Typography fontWeight={theme.fontWeight.bold}>My Bag,</Typography>
            <Typography>
              {totalQuantity} {bagDescription}
            </Typography>
          </Container>
          <Container
            flexDirection="column"
            gap="30px"
            marginBottom="25px"
            maxHeight="350px"
            overflow="auto"
          >
            {this.props.cartProducts.map((product) => (
              <CartItemCard
                key={product.id}
                id={product.id}
                brandName={product.brand}
                attributes={product.attributes}
                productName={product.name}
                productPrice={product.prices[this.props.currencyIndex].amount}
                cartPage={false}
                currencySymbol={
                  product.prices[this.props.currencyIndex].currency.symbol
                }
                images={product.gallery}
                quantity={product.quantity}
              />
            ))}
          </Container>
          <Container justifyContent="space-between">
            <Typography fontWeight={theme.fontWeight.medium}>Total</Typography>
            <Typography fontWeight={theme.fontWeight.bold}>
              {this.props.currency}
              {this.props.totalPrice}
            </Typography>
          </Container>
          <Container marginTop="40px" justifyContent="space-between">
            <Link
              to={"/cart"}
              style={{
                width: "48%",
                height: "auto",
              }}
            >
              <Button
                pV="15px"
                borderColor={theme.colors.primaryText}
                border
                onClick={this.props.onCloseModal}
              >
                <Typography
                  textTransform="uppercase"
                  fontSize={theme.fontSize.vs}
                  fontWeight={theme.fontWeight.semiBold}
                >
                  View Bag
                </Typography>
              </Button>
            </Link>
            <Button
              width="48%"
              pV="15px"
              bg={theme.colors.secondaryText}
              borderColor={theme.colors.secondaryText}
              onClick={this.props.onCheckout}
            >
              <Typography
                textTransform="uppercase"
                fontSize={theme.fontSize.vs}
                fontWeight={theme.fontWeight.semiBold}
                color={theme.colors.primaryBackground}
              >
                check out
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
    currencyIndex: state.currencySlice.currencyIndex,
    currency: state.currencySlice.currency,
  };
};

export default connect(mapStateToProps)(CartOverlay);
