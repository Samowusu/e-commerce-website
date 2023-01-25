import { Component } from "react";
import CartItemCard from "../components/cart/CartItemCard";
import { Button } from "../components/commons/Button";
import { Container } from "../components/commons/Container";
import { Typography } from "../components/commons/Typography";
import type { RootState } from "../store/store";
import type { Product } from "../config/types";
import { connect } from "react-redux";
import { computeTotalQuantity } from "../config/utils";
import { withRouter, WithRouterProps } from "../hocs/withRouter";
import { cartPageStyles } from "./CartPageStyles";

interface Props {
  cartProducts: Product[];
  totalPrice: number;
  currency: string;
  currencyIndex: number;
}

class CartPageComponent extends Component<WithRouterProps<Props>> {
  componentDidUpdate() {
    const cartItems = computeTotalQuantity(this.props.cartProducts);

    if (cartItems === 0) {
      this.props.navigate("/");
    }
  }

  render() {
    const totalQuantity = computeTotalQuantity(this.props.cartProducts);
    return (
      <Container style={cartPageStyles.mainContainer}>
        <Container style={cartPageStyles.contentContainer}>
          <Typography style={cartPageStyles.cartText}>cart</Typography>
          <Container style={cartPageStyles.productContainer} border>
            {this.props.cartProducts.map((product, index) => (
              <Container
                key={product.id}
                borderBottom
                style={cartPageStyles.cardContainer}
              >
                <CartItemCard
                  id={product.id}
                  productIndex={index}
                  brandName={product.brand}
                  attributes={product.attributes}
                  productName={product.name}
                  productPrice={product.prices[this.props.currencyIndex].amount}
                  cartPage={true}
                  currencySymbol={
                    product.prices[this.props.currencyIndex].currency.symbol
                  }
                  images={product.gallery}
                  quantity={product.quantity}
                />
              </Container>
            ))}
          </Container>
          <Container style={cartPageStyles.footerContainer}>
            <Container style={cartPageStyles.taxContainer}>
              <Typography style={cartPageStyles.taxText}>tax 21%:</Typography>
              <Typography style={cartPageStyles.taxAmountText}>
                {this.props.currency}
                {(this.props.totalPrice * 0.21).toFixed(2)}
              </Typography>
            </Container>
            <Container style={cartPageStyles.taxContainer}>
              <Typography style={cartPageStyles.taxText}>quantity:</Typography>
              <Typography style={cartPageStyles.taxAmountText}>
                {totalQuantity}
              </Typography>
            </Container>
            <Container style={cartPageStyles.taxContainer}>
              <Typography style={cartPageStyles.totalText}>total:</Typography>
              <Typography style={cartPageStyles.taxAmountText}>
                {this.props.currency}
                {this.props.totalPrice}
              </Typography>
            </Container>
            <Button
              style={cartPageStyles.orderButton}
              onClick={() => console.log("place order for products")}
            >
              <Typography style={cartPageStyles.orderText}>order</Typography>
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
    currency: state.currencySlice.currency,
    currencyIndex: state.currencySlice.currencyIndex,
  };
};

const CartPage = withRouter<Props>(CartPageComponent);

export default connect(mapStateToProps)(CartPage);
