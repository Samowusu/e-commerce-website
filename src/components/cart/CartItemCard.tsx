import React, { Component } from "react";
import { Container } from "../commons/Container";
import { Typography } from "../commons/Typography";
import { theme } from "../../config/theme";
import { PlusIcon } from "../../assets/svgs/PlusIcon";
import { MinusIcon } from "../../assets/svgs/MinusIcon";
import shirt from "../../assets/images/ProductD.png";
import { XSIcon } from "../../assets/svgs/XSIcon";
import { SmallIcon } from "../../assets/svgs/SmallIcon";
import { MediumIcon } from "../../assets/svgs/MediumIcon";
import { LargeIcon } from "../../assets/svgs/LargeIcon";
import { GreyColorSquare } from "../../assets/svgs/GreyColorSquare";
import { BlackColorSquare } from "../../assets/svgs/BlackColorSquare";
import { GreenColorSquare } from "../../assets/svgs/GreenColorSquare";

export class CartItemCard extends Component {
  render() {
    return (
      <Container maxWidth="300px">
        <Container width="45%" flexDirection="column" gap="10px">
          <Typography fontWeight={theme.fontWeight.veryLight}>
            Apollo
          </Typography>
          <Typography fontWeight={theme.fontWeight.veryLight}>
            Running shorts
          </Typography>
          <Typography fontWeight={theme.fontWeight.bold}>$50.00</Typography>
          <Typography>Size:</Typography>
          <Container gap="8px">
            <XSIcon />
            <SmallIcon />
            <MediumIcon />
            <LargeIcon />
          </Container>
          <Typography>Color:</Typography>
          <Container gap="8px">
            <GreyColorSquare />
            <BlackColorSquare />
            <GreenColorSquare />
          </Container>
        </Container>
        <Container
          width="15%"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <PlusIcon />
          <Typography>1</Typography>
          <MinusIcon />
        </Container>
        <Container width="40%">
          <Container width="100%">
            <img src={shirt} alt="product" />
          </Container>
        </Container>
      </Container>
    );
  }
}
