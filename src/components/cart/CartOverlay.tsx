import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../commons/Container";
import { Typography } from "../commons/Typography";
import { theme } from "../../config/theme";
import { CartItemCard } from "./CartItemCard";
import { Button } from "../commons/Button";

interface Props {
  onCheckout?: () => void;
  onCloseModal?: () => void;
}
export class CartOverlay extends Component<Props> {
  static defaultProps: Props = {
    onCheckout: () => console.log("checkout"),
    onCloseModal: () => console.log("cart Modal is closed"),
  };

  render() {
    return (
      <Container padding="20px" maxWidth="320px" border>
        <Container width="100%" flexDirection="column">
          <Container gap="5px" marginBottom="25px">
            <Typography fontWeight={theme.fontWeight.bold}>My Bag,</Typography>
            <Typography>3 items</Typography>
          </Container>
          <Container
            flexDirection="column"
            gap="30px"
            marginBottom="25px"
            maxHeight="350px"
            overflow="auto"
          >
            <CartItemCard />
            <CartItemCard />
          </Container>
          <Container justifyContent="space-between">
            <Typography fontWeight={theme.fontWeight.medium}>Total</Typography>
            <Typography fontWeight={theme.fontWeight.bold}>$200</Typography>
          </Container>
          <Container marginTop="40px" justifyContent="space-between">
            <Button
              width="48%"
              pV="15px"
              borderColor={theme.colors.primaryText}
              border
              onClick={this.props.onCloseModal}
            >
              <Link to={"/cart"}>
                <Typography
                  textTransform="uppercase"
                  fontSize={theme.fontSize.vs}
                  fontWeight={theme.fontWeight.semiBold}
                >
                  View Bag
                </Typography>
              </Link>
            </Button>
            <Button
              width="48%"
              pV="15px"
              bg={theme.colors.secondaryText}
              borderColor={theme.colors.secondaryText}
              onClick={this.props.onCheckout}
            >
              <Typography
                textTransform="uppercase"
                fontSize={theme.fontSize.vs}
                fontWeight={theme.fontWeight.semiBold}
                color={theme.colors.primaryBackground}
              >
                check out
              </Typography>
            </Button>
          </Container>
        </Container>
      </Container>
    );
  }
}
