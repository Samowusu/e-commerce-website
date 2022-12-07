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
  productPrice?: string;
  currency?: string;
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
    this.setState((prevState) => {
      return {
        isHovering: !prevState.isHovering,
      };
    });
  };

  handleMouseLeave = () => {
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
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          padding="10px"
          boxShadow={this.state.isHovering ? true : false}
        >
          <Container width="100%" position="relative">
            <img src={shirt} alt="a shirt" />
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
            >
              {this.props.productName}
            </Typography>
            <Typography
              fontSize={theme.fontSize.m}
              fontWeight={theme.fontWeight.bold}
            >
              {this.props.currency}
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
