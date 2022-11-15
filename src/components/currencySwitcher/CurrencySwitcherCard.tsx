import React, { Component } from "react";
import { Container } from "../commons/Container";
import { Typography } from "../commons/Typography";

export class CurrencySwitcherCard extends Component {
  render() {
    return (
      <Container flexDirection="column" maxWidth="100px">
        <Container gap="10px" pV="8px" paddingLeft="10px" hover>
          <Typography>$</Typography>
          <Typography>USD</Typography>
        </Container>
        <Container gap="10px" pV="8px" paddingLeft="10px" hover>
          <Typography>€</Typography>
          <Typography>EUR</Typography>
        </Container>
        <Container gap="10px" pV="8px" paddingLeft="10px" hover>
          <Typography>¥</Typography>
          <Typography>JPY</Typography>
        </Container>
      </Container>
    );
  }
}
