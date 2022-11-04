import React, { Component } from "react";
import { Container } from "../commons/Container";
import { Typography } from "../commons/Typography";
import shirt from "../../assets/images/ProductD.png";
import { GreenCartIcon } from "../../assets/svgs/GreenCartIcon";
import { theme } from "../../config/theme";

interface ProductCardState {
  isHovering: boolean;
}

interface ProductCardProps {}
export class ProductCard extends Component<ProductCardProps, ProductCardState> {
  state: Readonly<ProductCardState> = {
    isHovering: false,
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
              >
                <GreenCartIcon />
              </Container>
            )}
          </Container>
          <Container flexDirection="column" marginTop="25px" gap={"10px"}>
            <Typography
              fontSize={theme.fontSize.m}
              fontWeight={theme.fontWeight.veryLight}
            >
              Apollo Running Shorts
            </Typography>
            <Typography
              fontSize={theme.fontSize.m}
              fontWeight={theme.fontWeight.bold}
            >
              $50.00
            </Typography>
          </Container>
        </Container>
      </Container>
    );
  }
}
