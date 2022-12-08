import React, { Component } from "react";
import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";
import shirt from "../assets/images/ProductD.png";
import { GreenCartIcon } from "../assets/svgs/GreenCartIcon";
import { theme } from "../config/theme";
import type { RootState, AppDispatch } from "../store/store";
import { addToCart } from "../store/cartSlice";
import { connect } from "react-redux";

interface ProductCardState {
  isHovering: boolean;
}

interface ProductCardProps {
  dispatch: AppDispatch;
  productName: string;
  productPrice?: number;
  currencySymbol?: string;
  image?: string;
  inStock?: boolean;
}

class ProductCard extends Component<ProductCardProps, ProductCardState> {
  // static defaultProps: ProductCardProps = {
  //   productName: "apollo running shorts",
  //   productPrice: "50.00",

  // };

  state: Readonly<ProductCardState> = {
    isHovering: false,
  };

  handleAddToCart = (product: string) => {
    this.props.dispatch(addToCart(product));
  };

  handleMouseEnter = () => {
    if (!this.props.inStock) return;

    this.setState((prevState) => {
      return {
        isHovering: !prevState.isHovering,
      };
    });
  };

  handleMouseLeave = () => {
    if (!this.props.inStock) return;

    this.setState((prevState) => {
      return {
        isHovering: !prevState.isHovering,
      };
    });
  };

  render() {
    return (
      <Container width="300px" justifyContent="center">
        <Container
          width="90%"
          flexDirection="column"
          justifyContent={this.state.isHovering ? "" : "space-between"}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          padding="10px"
          boxShadow={this.state.isHovering ? true : false}
          position="relative"
          opacity={this.props.inStock ? "" : "0.4"}
          cursor={this.props.inStock ? "pointer" : "not-allowed"}
        >
          {this.props.inStock ? null : (
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
          <Container width="100%" position="relative">
            <img src={this.props.image} alt="a shirt" />
            {this.state.isHovering && (
              <Container
                width="fit-content"
                height="fit-content"
                zIndex="100"
                position="absolute"
                bottom="-15px"
                right="10px"
                onClick={() => this.handleAddToCart(this.props.productName)}
              >
                <GreenCartIcon />
              </Container>
            )}
          </Container>
          <Container flexDirection="column" marginTop="25px" gap={"10px"}>
            <Typography
              fontSize={theme.fontSize.m}
              fontWeight={theme.fontWeight.light}
              color={
                this.props.inStock
                  ? `${theme.colors.primaryText}`
                  : `${theme.colors.faintText}`
              }
            >
              {this.props.productName}
            </Typography>
            <Typography
              fontSize={theme.fontSize.m}
              fontWeight={theme.fontWeight.bold}
              color={
                this.props.inStock
                  ? `${theme.colors.primaryText}`
                  : `${theme.colors.faintText}`
              }
            >
              {this.props.currencySymbol}
              {this.props.productPrice}
            </Typography>
          </Container>
        </Container>
      </Container>
    );
  }
}
const mapStateToProps = (state: RootState) => {
  return {
    currency: state.currencySlice.currency,
  };
};
export default connect(mapStateToProps)(ProductCard);
