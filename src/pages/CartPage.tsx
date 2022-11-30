import React, { Component } from "react";
import { CartItemCard } from "../components/cart/CartItemCard";
import { Button } from "../components/commons/Button";
import { Container } from "../components/commons/Container";
import { Typography } from "../components/commons/Typography";
import { theme } from "../config/theme";

export class CartPage extends Component {
  render() {
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
            <Container borderBottom borderColor={theme.colors.ash} pV="20px">
              <CartItemCard cartPage />
            </Container>
            <Container borderBottom borderColor={theme.colors.ash} pV="20px">
              <CartItemCard cartPage />
            </Container>
          </Container>
          <Container flexDirection="column" gap="10px" marginTop="30px">
            <Container gap="10px">
              <Typography fontSize={theme.fontSize.l}>tax 21%:</Typography>
              <Typography
                fontSize={theme.fontSize.l}
                fontWeight={theme.fontWeight.bold}
              >
                $32
              </Typography>
            </Container>
            <Container gap="10px">
              <Typography fontSize={theme.fontSize.l}>quantity:</Typography>
              <Typography
                fontSize={theme.fontSize.l}
                fontWeight={theme.fontWeight.bold}
              >
                3
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
                $200
              </Typography>
            </Container>
            <Button bg={theme.colors.secondaryText} pV="10px">
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
