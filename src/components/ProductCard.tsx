import React, { Component } from "react";
import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";
import { Button } from "./commons/Button";
import shirt from "../assets/images/ProductD.png";
import { GreenCartIcon } from "../assets/svgs/GreenCartIcon";
import { theme } from "../config/theme";
import { Link } from "react-router-dom";
import type { RootState, AppDispatch } from "../store/store";
import type { Product } from "../config/types";
import {
  addToCart,
  initialProduct,
  AddToCartPayload,
  computeTotalPrice,
} from "../store/cartSlice";
import { connect } from "react-redux";

interface ProductCardState {
  isHovering: boolean;
}

interface ProductCardProps {
  dispatch?: AppDispatch;
  // addToCartFn: (product: Product) => void;
  currencyIndex: number;
  product: Product;
}

class ProductCard extends Component<ProductCardProps, ProductCardState> {
  static defaultProps: ProductCardProps = {
    // dispatch: (product: Product) => console.log(product),
    currencyIndex: 0,

    product: initialProduct,
  };

  state: Readonly<ProductCardState> = {
    isHovering: false,
  };

  handleAddToCart = (product: AddToCartPayload) => {
    this.props.dispatch && this.props?.dispatch(addToCart(product));
  };

  handleMouseEnter = () => {
    if (!this.props.product.inStock) return;

    this.setState((prevState) => {
      return {
        isHovering: !prevState.isHovering,
      };
    });
  };

  handleMouseLeave = () => {
    if (!this.props.product.inStock) return;

    this.setState((prevState) => {
      return {
        isHovering: !prevState.isHovering,
      };
    });
  };

  render() {
    const {
      id,
      category,
      inStock,
      gallery,
      name: productName,
      prices,
    } = this.props.product;
    const image = gallery[0];
    const currencySymbol = prices[this.props.currencyIndex].currency.symbol;
    const productPrice = prices[this.props.currencyIndex].amount;

    const productDescriptionPageUrl =
      category === "clothes" ? `/${id}` : `/tech/${id}`;
    return (
      <Container
        width="300px"
        justifyContent="center"
        position="relative"
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
      >
        <Link
          to={productDescriptionPageUrl}
          state={{ productDetails: this.props.product }}
          style={{ width: "90%" }}
        >
          <Container
            width="100%"
            height="100%"
            flexDirection="column"
            padding="10px"
            boxShadow={this.state.isHovering ? true : false}
            position="relative"
            opacity={inStock ? "" : "0.4"}
            cursor={inStock ? "pointer" : "not-allowed"}
          >
            {inStock ? null : (
              <Container
                justifyContent="center"
                position="absolute"
                top="50%"
                zIndex="100"
              >
                <Typography
                  textTransform="uppercase"
                  color={theme.colors.faintText}
                  fontSize={theme.fontSize.l}
                >
                  out of stock
                </Typography>
              </Container>
            )}
            <Container width="100%" height="250px">
              <img src={image} alt="a shirt" />
            </Container>
            <Container flexDirection="column" marginTop="25px" gap={"10px"}>
              <Typography
                fontSize={theme.fontSize.m}
                fontWeight={theme.fontWeight.light}
                color={
                  inStock
                    ? `${theme.colors.primaryText}`
                    : `${theme.colors.faintText}`
                }
              >
                {productName}
              </Typography>
              <Typography
                fontSize={theme.fontSize.m}
                fontWeight={theme.fontWeight.bold}
                color={
                  inStock
                    ? `${theme.colors.primaryText}`
                    : `${theme.colors.faintText}`
                }
              >
                {currencySymbol}
                {productPrice}
              </Typography>
            </Container>
          </Container>
        </Link>
        {this.state.isHovering && (
          <Button
            width="fit-content"
            height="fit-content"
            zIndex="200"
            position="absolute"
            bottom="25%"
            right="15px"
            onClick={() => {
              this.handleAddToCart({
                product: this.props.product,
                index: this.props.currencyIndex,
              });
            }}
          >
            <GreenCartIcon />
          </Button>
        )}
      </Container>
    );
  }
}
const mapStateToProps = (state: RootState) => {
  return {
    currency: state.currencySlice.currency,
    currencyIndex: state.currencySlice.currencyIndex,
  };
};

// const mapDispatchToProps = (dispatch: AppDispatch) => ({
//   addToCartFn: () => dispatch(addToCart),
// });
export default connect(mapStateToProps)(ProductCard);
