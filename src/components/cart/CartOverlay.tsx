import { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../commons/Container";
import { Typography } from "../commons/Typography";
import { cartOverlayStyles } from "./CartOverlayStyles";
import CartItemCard from "./CartItemCard";
import { Button } from "../commons/Button";
import type { RootState } from "../../store/store";
import type { Product } from "../../config/types";
import {
  computeTotalQuantity,
  DUMMY_INITIAL_PRODUCT,
} from "../../config/utils";
import { connect } from "react-redux";

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
    cartProducts: [DUMMY_INITIAL_PRODUCT],
    totalPrice: 0,
    currencyIndex: 0,
    currency: "$",
  };

  componentDidUpdate() {
    const cartItems = computeTotalQuantity(this.props.cartProducts);
    if (cartItems === 0) {
      this.props.onCloseModal?.();
    }
  }

  render() {
    const totalQuantity = computeTotalQuantity(this.props.cartProducts);

    const bagDescription = totalQuantity === 1 ? "item" : "items";

    const products = this.props.cartProducts;

    return (
      <Container style={cartOverlayStyles.mainContainer}>
        <Container style={cartOverlayStyles.contentContainer}>
          <Container style={cartOverlayStyles.headerContainer}>
            <Typography style={cartOverlayStyles.headerText}>
              My Bag,
            </Typography>
            <Typography>
              {totalQuantity} {bagDescription}
            </Typography>
          </Container>
          <Container style={cartOverlayStyles.cartItemsContainer}>
            {this.props.cartProducts.map((product, index) => (
              <CartItemCard
                key={product.id + index}
                productIndex={index}
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
          <Container style={cartOverlayStyles.footerContainer}>
            <Container style={cartOverlayStyles.totalPriceContainer}>
              <Typography style={cartOverlayStyles.totalText}>Total</Typography>
              <Typography style={cartOverlayStyles.priceText}>
                {this.props.currency}
                {this.props.totalPrice}
              </Typography>
            </Container>
            <Container style={cartOverlayStyles.buttonsContainer}>
              <Link to={"/cart"} style={cartOverlayStyles.link}>
                <Button
                  style={cartOverlayStyles.viewBagButton}
                  border
                  onClick={this.props.onCloseModal}
                >
                  <Typography style={cartOverlayStyles.viewBagText}>
                    View Bag
                  </Typography>
                </Button>
              </Link>
              <Button
                onClick={this.props.onCheckout}
                style={cartOverlayStyles.checkoutButton}
              >
                <Typography style={cartOverlayStyles.checkoutText}>
                  check out
                </Typography>
              </Button>
            </Container>
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
