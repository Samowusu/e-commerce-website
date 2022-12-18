import React, { Component } from "react";
import { Container } from "../components/commons/Container";
import { Typography } from "../components/commons/Typography";
import { theme } from "../config/theme";
import shirt from "../assets/images/ProductD.png";
import { DUMMY_COLORS, DUMMY_SIZES } from "../config/utils";
import type { AttributeSet } from "../config/types";
import { Rectangle } from "../components/commons/Rectangle";
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

// type Pageprops = RouteComponentProps<TypeProps>;
// class Page02 extends React.Component<Page02Props, TypeState> {
interface Props {
  brandName?: string;
  productName?: string;
  sizes?: string[];
  colors?: string[];
  price?: string;
  productDescription?: string;
  currency: string;
  currencyIndex: number;
  dispatch?: AppDispatch;
}
class ProductDescriptionComponent extends Component<WithRouterProps<Props>> {
  static defaultProps: Props = {
    brandName: "apollo",
    productName: "running shorts",
    sizes: DUMMY_SIZES,
    colors: DUMMY_COLORS,
    price: "$50.00",
    currency: "$",
    currencyIndex: 0,
  };

  handleAddToCart = (product: AddToCartPayload) => {
    this.props.dispatch && this.props?.dispatch(addToCart(product));
    this.props.dispatch &&
      this.props?.dispatch(computeTotalPrice(product.index));
  };

  render() {
    const { productDetails } = this.props.location.state;
    console.log(productDetails.inStock);

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
              {/* <Container>
                <img src={shirt} alt="a product" />
              </Container>
              <Container>
                <img src={shirt} alt="a product" />
              </Container>
              <Container>
                <img src={shirt} alt="a product" />
              </Container> */}
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
                {productDetails.attributes.map((attribute: AttributeSet) => (
                  <AttributeDisplay
                    key={attribute.id}
                    title={attribute.name}
                    type={attribute.type}
                    items={attribute.items}
                    cartPage
                    productDescription
                  />
                ))}
                {/* <Typography
                  textTransform="uppercase"
                  fontSize={theme.fontSize.m}
                  fontWeight={theme.fontWeight.bold}
                >
                  size:
                </Typography>
                <Container gap="10px" marginTop="5px" marginBottom="20px">
                  {this.props.sizes?.map((size, index) => (
                    <Rectangle
                      key={index}
                      text={size}
                      color={index === 1 ? "white" : "black"}
                      background={index === 1 ? "black" : "white"}
                      max
                    />
                  ))}
                </Container>
                <Typography
                  textTransform="uppercase"
                  fontSize={theme.fontSize.m}
                  fontWeight={theme.fontWeight.bold}
                >
                  color:
                </Typography>
                <Container gap="10px" marginTop="5px" marginBottom="20px">
                  {this.props.colors?.map((color, index) => (
                    <Rectangle key={index} border={false} background={color} />
                  ))}
                </Container> */}
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
                      product: productDetails,
                      index: this.props.currencyIndex,
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
                  {productDetails.description}
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
