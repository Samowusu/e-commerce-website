import { Component } from "react";
import { Container } from "../components/commons/Container";
import { Typography } from "../components/commons/Typography";
import type { AttributeSet, Product } from "../config/types";
import { Button } from "../components/commons/Button";
import type { RootState, AppDispatch } from "../store/store";
import {
  addToCart,
  computeTotalPrice,
  AddToCartPayload,
} from "../store/cartSlice";
import { AttributeDisplay } from "../components/cart/AttributeDisplay";
import { withRouter, WithRouterProps } from "../hocs/withRouter";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import { productDescriptionPageStyles } from "./ProductDescriptionPageStyles";

interface Props {
  currency: string;
  currencyIndex: number;
  dispatch?: AppDispatch;
}

interface State {
  productDetails: Product;
}

class ProductDescriptionComponent extends Component<
  WithRouterProps<Props>,
  State
> {
  componentDidMount(): void {
    const { productDetails } = this.props.location.state;
    const updatedAttributes = productDetails.attributes.map(
      (attribute: AttributeSet) => {
        return {
          ...attribute,
          selectedItem: attribute.items[0],
        };
      }
    );
    this.setState({
      productDetails: {
        ...productDetails,
        attributes: updatedAttributes,
      },
    });
  }

  handleAddToCart = (product: AddToCartPayload) => {
    this.props.dispatch && this.props?.dispatch(addToCart(product));
    this.props.dispatch &&
      this.props?.dispatch(computeTotalPrice(this.props.currencyIndex));
  };

  handleSelectAttribute = (
    attributeIndex: number,
    attributeValueIndex: number
  ) => {
    let attributes = this.state?.productDetails?.attributes
      ? [...this.state?.productDetails?.attributes]
      : [...this.props.location.state.productDetails.attributes];
    attributes[attributeIndex] = {
      ...attributes[attributeIndex],
      selectedItem: attributes[attributeIndex].items[attributeValueIndex],
    };
    this.setState({
      productDetails: {
        ...this.props.location.state.productDetails,
        attributes,
      },
    });
  };

  render() {
    const { productDetails } = this.props.location.state;

    return (
      <Container style={productDescriptionPageStyles.mainContainer}>
        <Container style={productDescriptionPageStyles.contentContainer}>
          <Container style={productDescriptionPageStyles.imagesContainer}>
            <div className="custom-scrollbar">
              {productDetails.gallery.map((image: string, index: number) => (
                <Container key={index}>
                  <img src={image} alt="a product" />
                </Container>
              ))}
            </div>
            <Container style={productDescriptionPageStyles.bigImageContainer}>
              <img src={productDetails.gallery[0]} alt="a shirt" />
            </Container>
          </Container>
          <Container style={productDescriptionPageStyles.rightSectionContainer}>
            <Container
              style={productDescriptionPageStyles.rightSectionContentContainer}
            >
              <Container
                style={productDescriptionPageStyles.productNameContainer}
              >
                <Typography
                  style={productDescriptionPageStyles.productBrandText}
                >
                  {productDetails.brand}
                </Typography>
                <Typography
                  style={productDescriptionPageStyles.productNameText}
                >
                  {productDetails.name}
                </Typography>
              </Container>
              <Container
                style={productDescriptionPageStyles.bottomSectionContainer}
              >
                {productDetails.attributes.map(
                  (attribute: AttributeSet, index: number) => (
                    <AttributeDisplay
                      key={attribute.id}
                      title={attribute.name}
                      type={attribute.type}
                      items={attribute.items}
                      cartPage
                      productDescription
                      onChange={(attributeValueIndex) =>
                        this.handleSelectAttribute(index, attributeValueIndex)
                      }
                    />
                  )
                )}

                <Container style={productDescriptionPageStyles.priceContainer}>
                  <Typography style={productDescriptionPageStyles.priceText}>
                    price:
                  </Typography>
                  <Typography style={productDescriptionPageStyles.priceAmount}>
                    {
                      productDetails.prices[this.props.currencyIndex].currency
                        .symbol
                    }
                    {productDetails.prices[this.props.currencyIndex].amount}
                  </Typography>
                </Container>
                <Button
                  style={productDescriptionPageStyles.addToCartButton}
                  onClick={() => {
                    if (!productDetails.inStock) {
                      alert("sorry! this product is out of stock");
                      return;
                    }
                    this.handleAddToCart({
                      product: this.state.productDetails,
                      quantity: 1,
                    });
                  }}
                >
                  <Typography
                    style={productDescriptionPageStyles.addToCartText}
                  >
                    add to cart
                  </Typography>
                </Button>
                <Typography
                  style={productDescriptionPageStyles.productDescriptionText}
                >
                  {ReactHtmlParser(productDetails.description)}
                </Typography>
              </Container>
            </Container>
          </Container>
        </Container>
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

const ProductDescriptionPage = withRouter<Props>(ProductDescriptionComponent);

export default connect(mapStateToProps)(ProductDescriptionPage);
