import React, { Component } from "react";
import { Container } from "../commons/Container";
import { Typography } from "../commons/Typography";
import { theme } from "../../config/theme";
import { DUMMY_COLORS, DUMMY_SIZES } from "../../config/utils";
import { PlusIcon } from "../../assets/svgs/PlusIcon";
import { MinusIcon } from "../../assets/svgs/MinusIcon";
import shirt from "../../assets/images/ProductD.png";
import { XSIcon } from "../../assets/svgs/XSIcon";
import { SmallIcon } from "../../assets/svgs/SmallIcon";
import { MediumIcon } from "../../assets/svgs/MediumIcon";
import { LargeIcon } from "../../assets/svgs/LargeIcon";
import { GreyColorSquare } from "../../assets/svgs/GreyColorSquare";
import { BlackColorSquare } from "../../assets/svgs/BlackColorSquare";
import { GreenColorSquare } from "../../assets/svgs/GreenColorSquare";
import { Rectangle } from "../commons/Rectangle";

interface Props {
  cartPage?: boolean;
  colors?: string[];
  sizes?: string[];
}
export class CartItemCard extends Component<Props> {
  static defaultProps: Props = {
    cartPage: false,
    colors: DUMMY_COLORS,
    sizes: DUMMY_SIZES,
  };

  render() {
    return (
      <Container justifyContent="space-between">
        <Container maxWidth="150px">
          <Container flexDirection="column" gap="10px">
            <Typography
              fontWeight={
                this.props.cartPage
                  ? `${theme.fontWeight.semiBold}`
                  : `${theme.fontWeight.light}`
              }
              fontSize={
                this.props.cartPage
                  ? `${theme.fontSize.l}`
                  : `${theme.fontSize.s}`
              }
            >
              Apollo
            </Typography>
            <Typography
              fontWeight={
                this.props.cartPage
                  ? `${theme.fontWeight.regular}`
                  : `${theme.fontWeight.light}`
              }
              fontSize={
                this.props.cartPage
                  ? `${theme.fontSize.l}`
                  : `${theme.fontSize.s}`
              }
            >
              Running shorts
            </Typography>
            <Typography
              fontWeight={
                this.props.cartPage
                  ? `${theme.fontWeight.bold}`
                  : `${theme.fontWeight.medium}`
              }
              fontSize={
                this.props.cartPage
                  ? `${theme.fontSize.m}`
                  : `${theme.fontSize.s}`
              }
            >
              $50.00
            </Typography>
            <Typography>Size:</Typography>
            <Container gap="8px">
              {this.props.sizes?.map((size, index) => (
                <Rectangle
                  key={index}
                  text={size}
                  color={index === 1 ? "white" : "black"}
                  background={index === 1 ? "black" : "white"}
                  max={this.props.cartPage ? true : false}
                />
              ))}
            </Container>
            <Typography>Color:</Typography>
            <Container gap="8px">
              {this.props.colors?.map((color, index) => (
                <Rectangle key={index} border={false} background={color} />
              ))}
            </Container>
          </Container>
        </Container>
        <Container gap="5px" maxWidth="150px">
          <Container
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            width="20%"
          >
            <PlusIcon />
            <Typography>1</Typography>
            <MinusIcon />
          </Container>
          <Container>
            <Container width="100px">
              <img src={shirt} alt="product" />
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}
