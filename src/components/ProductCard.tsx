import { Component } from "react";
import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";
import { Button } from "./commons/Button";
import { GreenCartIcon } from "../assets/svgs/GreenCartIcon";
import { Link } from "react-router-dom";
import type { RootState, AppDispatch } from "../store/store";
import type { Product } from "../config/types";
import {
  addToCart,
  AddToCartPayload,
  computeTotalPrice,
} from "../store/cartSlice";
import { DUMMY_INITIAL_PRODUCT, setDefaultAttribute } from "../config/utils";
import { connect } from "react-redux";
import { productCardStyles } from "./ProductCardStyles";

interface ProductCardState {
  isHovering: boolean;
}

interface ProductCardProps {
  dispatch?: AppDispatch;
  currencyIndex: number;
  product: Product;
}

class ProductCard extends Component<ProductCardProps, ProductCardState> {
  static defaultProps: ProductCardProps = {
    currencyIndex: 0,

    product: DUMMY_INITIAL_PRODUCT,
  };

  state: Readonly<ProductCardState> = {
    isHovering: false,
  };

  handleAddToCart = (product: AddToCartPayload) => {
    this.props.dispatch && this.props?.dispatch(addToCart(product));
    this.props.dispatch &&
      this.props?.dispatch(computeTotalPrice(this.props.currencyIndex));
  };

  handleMouseEnter = () => {
    if (!this.props.product.inStock) return;

    this.setState((prevState) => {
      return {
        isHovering: !prevState.isHovering,
      };
    });
  };

  handleMouseLeave = () => {
    if (!this.props.product.inStock) return;

    this.setState((prevState) => {
      return {
        isHovering: !prevState.isHovering,
      };
    });
  };

  render() {
    const {
      id,
      category,
      inStock,
      gallery,
      name: productName,
      prices,
      attributes,
    } = this.props.product;
    const image = gallery[0];
    const currencySymbol = prices[this.props.currencyIndex].currency.symbol;
    const productPrice = prices[this.props.currencyIndex].amount;

    const productDescriptionPageUrl =
      category === "clothes" ? `/clothes/${id}` : `/tech/${id}`;

    return (
      <Container
        style={productCardStyles.mainContainer}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
      >
        <Link
          to={productDescriptionPageUrl}
          state={{ productDetails: this.props.product }}
          style={productCardStyles.link}
        >
          <Container
            style={productCardStyles.contentContainer(inStock)}
            boxShadow={this.state.isHovering ? true : false}
          >
            {inStock ? null : (
              <Container style={productCardStyles.outOfStockContainer}>
                <Typography style={productCardStyles.outOfStockText}>
                  out of stock
                </Typography>
              </Container>
            )}
            <Container style={productCardStyles.imageContainer}>
              <img src={image} alt="a shirt" />
            </Container>
            <Container style={productCardStyles.productNameContainer}>
              <Typography style={productCardStyles.productNameText(inStock)}>
                {productName}
              </Typography>
              <Typography
                style={productCardStyles.productNameText(inStock, true)}
              >
                {currencySymbol}
                {productPrice}
              </Typography>
            </Container>
          </Container>
        </Link>
        {this.state.isHovering && (
          <Button
            style={productCardStyles.addToCartButton}
            onClick={() => {
              this.handleAddToCart({
                product: {
                  ...this.props.product,
                  attributes: setDefaultAttribute(attributes),
                },
                quantity: 1,
              });
            }}
          >
            <GreenCartIcon />
          </Button>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    currency: state.currencySlice.currency,
    currencyIndex: state.currencySlice.currencyIndex,
  };
};

export default connect(mapStateToProps)(ProductCard);
