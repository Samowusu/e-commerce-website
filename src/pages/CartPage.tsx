import { Component } from "react";
import CartItemCard from "../components/cart/CartItemCard";
import { Button } from "../components/commons/Button";
import { Container } from "../components/commons/Container";
import { Typography } from "../components/commons/Typography";
import { theme } from "../config/theme";
import type { RootState } from "../store/store";
import type { Product } from "../config/types";
import { connect } from "react-redux";
import { computeTotalQuantity } from "../config/utils";
import { withRouter, WithRouterProps } from "../hocs/withRouter";

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
      <Container justifyContent="center">
        <Container width="90%" flexDirection="column" paddingBottom="50px">
          <Typography
            textTransform="uppercase"
            fontWeight={theme.fontWeight.bold}
            fontSize={theme.fontSize.xxl}
          >
            cart
          </Typography>
          <Container
            marginTop="30px"
            flexDirection="column"
            border
            borderColor={theme.colors.ash}
            borderLeft="none"
            borderRight="none"
          >
            {this.props.cartProducts.map((product, index) => (
              <Container
                borderBottom
                borderColor={theme.colors.ash}
                pV="20px"
                key={product.id}
                height="350px"
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
          <Container flexDirection="column" gap="10px" marginTop="30px">
            <Container gap="10px">
              <Typography fontSize={theme.fontSize.l}>tax 21%:</Typography>
              <Typography
                fontSize={theme.fontSize.l}
                fontWeight={theme.fontWeight.bold}
              >
                {this.props.currency}
                {(this.props.totalPrice * 0.21).toFixed(2)}
              </Typography>
            </Container>
            <Container gap="10px">
              <Typography fontSize={theme.fontSize.l}>quantity:</Typography>
              <Typography
                fontSize={theme.fontSize.l}
                fontWeight={theme.fontWeight.bold}
              >
                {totalQuantity}
              </Typography>
            </Container>
            <Container gap="10px">
              <Typography
                fontSize={theme.fontSize.l}
                fontWeight={theme.fontWeight.medium}
              >
                total:
              </Typography>
              <Typography
                fontSize={theme.fontSize.l}
                fontWeight={theme.fontWeight.bold}
              >
                {this.props.currency}
                {this.props.totalPrice}
              </Typography>
            </Container>
            <Button
              bg={theme.colors.secondaryText}
              pV="10px"
              onClick={() => console.log("place order for products")}
            >
              <Typography
                textTransform="uppercase"
                color={theme.colors.primaryBackground}
                fontWeight={theme.fontWeight.semiBold}
              >
                order
              </Typography>
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
