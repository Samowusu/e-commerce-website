import React, { Component } from "react";
import { Container } from "../commons/Container";
import { Typography } from "../commons/Typography";
import { theme } from "../../config/theme";
import { CartItemCard } from "./CartItemCard";
import { Button } from "../commons/Button";

export class CartOverlay extends Component {
  render() {
    return (
      <Container width="40%" padding="20px" maxWidth="300px">
        <Container width="100%" flexDirection="column">
          <Container gap="5px" marginBottom="25px">
            <Typography fontWeight={theme.fontWeight.veryBold}>
              My Bag,
            </Typography>
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
            <Typography fontWeight={theme.fontWeight.bold}>Total</Typography>
            <Typography fontWeight={theme.fontWeight.veryBold}>$200</Typography>
          </Container>
          <Container marginTop="20px" justifyContent="space-between">
            <Button
              width="48%"
              pV="15px"
              borderColor={theme.colors.primaryText}
              onClick={() => console.log("view bag")}
            >
              <Typography
                textTransform="uppercase"
                fontSize={theme.fontSize.vs}
                fontWeight={theme.fontWeight.bold}
              >
                View Bag
              </Typography>
            </Button>
            <Button
              width="48%"
              pV="15px"
              bg={theme.colors.secondaryText}
              borderColor={theme.colors.secondaryText}
              onClick={() => console.log("check bag")}
            >
              <Typography
                textTransform="uppercase"
                fontSize={theme.fontSize.vs}
                fontWeight={theme.fontWeight.bold}
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
