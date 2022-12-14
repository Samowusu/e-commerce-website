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
import type { AttributeSet } from "../../config/types";
import { AttributeDisplay } from "./AttributeDisplay";

interface Props {
  cartPage?: boolean;
  brandName?: string;
  productName?: string;
  productPrice?: number;
  currencySymbol?: string;
  attributes?: AttributeSet[];
  image?: string;
}
export class CartItemCard extends Component<Props> {
  static defaultProps: Props = {
    brandName: "apollo",
    productPrice: 50.0,
    currencySymbol: "$",
    cartPage: false,
  };

  render() {
    return (
      <Container border borderColor="black">
        <Container border width="60%">
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
              {this.props.brandName}
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
              {this.props.productName}
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
              {this.props.currencySymbol}
              {this.props.productPrice}
            </Typography>
            {this.props.attributes?.map((attribute) => (
              <AttributeDisplay
                key={attribute.id}
                title={attribute.name}
                type={attribute.type}
                items={attribute.items}
                cartPage={this.props.cartPage}
              />
            ))}
            {/* <Typography>Size:</Typography>
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
            </Container> */}
            {/* <Typography>Color:</Typography>
            <Container gap="8px">
              {this.props.colors?.map((color, index) => (
                <Rectangle key={index} border={false} background={color} />
              ))}
            </Container> */}
          </Container>
        </Container>
        <Container gap="5px" width="40%" border>
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
          <Container width="80%">
            <Container>
              <img src={this.props.image} alt="product" />
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}
