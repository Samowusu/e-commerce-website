import React, { Component } from "react";
import { Container } from "../components/commons/Container";
import { Typography } from "../components/commons/Typography";
import { theme } from "../config/theme";
import shirt from "../assets/images/ProductD.png";
import { DUMMY_COLORS, DUMMY_SIZES } from "../config/utils";
import { Rectangle } from "../components/commons/Rectangle";
import { Button } from "../components/commons/Button";

// type Pageprops = RouteComponentProps<TypeProps>;
// class Page02 extends React.Component<Page02Props, TypeState> {
interface Props {
  brandName?: string;
  productName?: string;
  sizes?: string[];
  colors?: string[];
  price?: string;
  productDescription?: string;
}
export class ProductDescriptionPage extends Component<Props> {
  static defaultProps: Props = {
    brandName: "apollo",
    productName: "running shorts",
    sizes: DUMMY_SIZES,
    colors: DUMMY_COLORS,
    price: "$50.00",
    productDescription:
      " Find stunning women's cocktail dresses and party dresses.Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
  };

  render() {
    // const { state } = this.props.location

    return (
      <Container justifyContent="center" paddingTop="50px">
        <Container width="90%">
          <Container justifyContent="space-between" width="50%">
            <Container flexDirection="column" width="20%" gap="30px">
              <Container>
                <img src={shirt} alt="a product" />
              </Container>
              <Container>
                <img src={shirt} alt="a product" />
              </Container>
              <Container>
                <img src={shirt} alt="a product" />
              </Container>
            </Container>
            <Container width="75%" paddingBottom="50px">
              <Container height="100%">
                <img src={shirt} alt="a shirt" style={{ objectFit: "cover" }} />
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
                  {this.props.brandName}
                </Typography>
                <Typography fontSize={theme.fontSize.xl}>
                  {this.props.productName}
                </Typography>
              </Container>
              <Container flexDirection="column" marginTop="30px">
                <Typography
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
                </Container>
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
                  {this.props.price}
                </Typography>
                <Button
                  bg={theme.colors.secondaryText}
                  pV="10px"
                  marginTop="30px"
                  marginBottom="50px"
                  maxWidth="240px"
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
                  {this.props.productDescription}
                </Typography>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}
