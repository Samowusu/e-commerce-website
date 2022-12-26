import { Component } from "react";
import { Container } from "../commons/Container";
import { Typography } from "../commons/Typography";
import { theme } from "../../config/theme";
import { PlusIcon } from "../../assets/svgs/PlusIcon";
import { MinusIcon } from "../../assets/svgs/MinusIcon";
import shirt from "../../assets/images/ProductD.png";

import type { AttributeSet } from "../../config/types";
import { AttributeDisplay } from "./AttributeDisplay";
import { CartItemCarousel } from "./CartItemCarousel";
import type { RootState, AppDispatch } from "../../store/store";
import {
  increaseQuantity,
  computeTotalPrice,
  decreaseQuantity,
  removeItem,
} from "../../store/cartSlice";

import { connect } from "react-redux";
import { Button } from "../commons/Button";

interface Props {
  dispatch?: AppDispatch;
  cartPage?: boolean;
  brandName?: string;
  productName?: string;
  productPrice?: number;
  currencySymbol?: string;
  quantity: number;
  id: string;
  currencyIndex: number;
  attributes?: AttributeSet[];
  images: string[];
  productIndex: number;
}
class CartItemCard extends Component<Props> {
  static defaultProps: Props = {
    id: "product-id",
    quantity: 1,
    brandName: "apollo",
    productPrice: 50.0,
    currencySymbol: "$",
    cartPage: false,
    images: [`${shirt}`],
    currencyIndex: 0,
    productIndex: 0,
  };

  handleIncreaseQuantity = (id: number) => {
    this.props.dispatch && this.props?.dispatch(increaseQuantity(id));
    this.props.dispatch &&
      this.props?.dispatch(computeTotalPrice(this.props.currencyIndex));
  };

  handleDecreaseQuantity = (id: number) => {
    this.props.dispatch && this.props?.dispatch(decreaseQuantity(id));
    this.props.dispatch &&
      this.props?.dispatch(computeTotalPrice(this.props.currencyIndex));
    if (this.props.quantity === 1) {
      this.props.dispatch && this.props?.dispatch(removeItem(id));
    }
  };

  render() {
    return (
      <Container>
        <Container width="60%">
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
                value={attribute.selectedItem?.id}
              />
            ))}
          </Container>
        </Container>
        <Container gap="5px" width="40%">
          <Container
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            width="20%"
          >
            <Button
              onClick={() =>
                this.handleIncreaseQuantity(this.props.productIndex)
              }
            >
              <PlusIcon
                width={this.props.cartPage ? "100%" : "24"}
                heigth={this.props.cartPage ? "45" : "24"}
              />
            </Button>
            <Typography>{this.props.quantity}</Typography>
            <Button
              onClick={() =>
                this.handleDecreaseQuantity(this.props.productIndex)
              }
            >
              <MinusIcon
                width={this.props.cartPage ? "100%" : "24"}
                heigth={this.props.cartPage ? "45" : "24"}
              />
            </Button>
          </Container>
          <Container width="80%">
            {this.props.cartPage ? (
              <CartItemCarousel images={this.props.images} />
            ) : (
              <Container>
                <img src={this.props.images[0]} alt="product" />
              </Container>
            )}
          </Container>
        </Container>
      </Container>
    );
  }
}
const mapStateToProps = (state: RootState) => {
  return {
    currencyIndex: state.currencySlice.currencyIndex,
  };
};

export default connect(mapStateToProps)(CartItemCard);
