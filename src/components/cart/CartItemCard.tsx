import { Component } from "react";
import { Container } from "../commons/Container";
import { Typography } from "../commons/Typography";
import { cartItemCardStyles } from "./CartItemCardStyles";
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
        <Container style={cartItemCardStyles.mainContainer}>
          <Container style={cartItemCardStyles.textsContainer}>
            <Typography
              style={cartItemCardStyles.brandName(this.props.cartPage!)}
            >
              {this.props.brandName}
            </Typography>
            <Typography
              style={cartItemCardStyles.productName(this.props.cartPage!)}
            >
              {this.props.productName}
            </Typography>
            <Typography
              style={cartItemCardStyles.productPrice(this.props.cartPage!)}
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
        <Container style={cartItemCardStyles.buttonsAndImageContainer}>
          <Container style={cartItemCardStyles.buttonsContainer}>
            <Button
              onClick={() =>
                this.handleIncreaseQuantity(this.props.productIndex)
              }
            >
              <PlusIcon
                dimension={cartItemCardStyles.icons(this.props.cartPage!)}
              />
            </Button>
            <Typography>{this.props.quantity}</Typography>
            <Button
              onClick={() =>
                this.handleDecreaseQuantity(this.props.productIndex)
              }
            >
              <MinusIcon
                dimension={cartItemCardStyles.icons(this.props.cartPage!)}
              />
            </Button>
          </Container>
          <Container style={cartItemCardStyles.imageContainer}>
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
