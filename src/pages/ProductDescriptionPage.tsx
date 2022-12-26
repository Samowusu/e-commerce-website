import { Component } from "react";
import { Container } from "../components/commons/Container";
import { Typography } from "../components/commons/Typography";
import { theme } from "../config/theme";
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

interface Props {
  currency: string;
  currencyIndex: number;
  dispatch?: AppDispatch;
}

interface State {
  productDetails?: Product;
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
      <Container justifyContent="center" paddingTop="50px">
        <Container width="90%">
          <Container justifyContent="space-between" width="50%">
            <Container flexDirection="column" width="20%" gap="30px">
              {productDetails.gallery.map((image: string, index: number) => (
                <Container key={index}>
                  <img src={image} alt="a product" />
                </Container>
              ))}
            </Container>
            <Container width="75%" paddingBottom="50px">
              <Container height="465px">
                <img src={productDetails.gallery[0]} alt="a shirt" />
              </Container>
            </Container>
          </Container>
          <Container width="50%" paddingLeft="70px">
            <Container flexDirection="column" maxWidth="250px">
              <Container flexDirection="column" gap="10px">
                <Typography
                  fontSize={theme.fontSize.xl}
                  fontWeight={theme.fontWeight.semiBold}
                >
                  {productDetails.brand}
                </Typography>
                <Typography fontSize={theme.fontSize.xl}>
                  {productDetails.name}
                </Typography>
              </Container>
              <Container flexDirection="column" marginTop="30px" gap="15px">
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

                <Container flexDirection="column" gap="15px">
                  <Typography
                    textTransform="uppercase"
                    fontSize={theme.fontSize.m}
                    fontWeight={theme.fontWeight.bold}
                  >
                    price:
                  </Typography>
                  <Typography
                    fontSize={theme.fontSize.l}
                    fontWeight={theme.fontWeight.bold}
                  >
                    {
                      productDetails.prices[this.props.currencyIndex].currency
                        .symbol
                    }
                    {productDetails.prices[this.props.currencyIndex].amount}
                  </Typography>
                </Container>
                <Button
                  bg={theme.colors.secondaryText}
                  pV="10px"
                  mV="15px"
                  maxWidth="240px"
                  onClick={() => {
                    if (!productDetails.inStock) {
                      alert("sorry! this product is out of stock");
                      return;
                    }
                    this.handleAddToCart({
                      product: this.state.productDetails ?? productDetails,
                      quantity: 1,
                    });
                  }}
                >
                  <Typography
                    textTransform="uppercase"
                    color={theme.colors.primaryBackground}
                    fontWeight={theme.fontWeight.semiBold}
                  >
                    add to cart
                  </Typography>
                </Button>
                <Typography lineHeight="24px" textTransform="none">
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
