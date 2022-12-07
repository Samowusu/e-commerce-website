import React, { Component } from "react";
import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";
import { headerHeight } from "../config/constants";
import { theme } from "../config/theme";
import type { RootState, AppDispatch } from "../store/store";
import { changeCurrency } from "../store/currencySlice";
import { connect } from "react-redux";

interface Props {
  dispatch: AppDispatch;
  onShowCurrencySwitcherCard: () => void;
}
class CurrencySwitcherCard extends Component<Props> {
  selectCurrencyHandler = (currency: string) => {
    this.props.dispatch(changeCurrency(currency));
    this.props.onShowCurrencySwitcherCard();
  };

  render() {
    return (
      <Container
        flexDirection="column"
        maxWidth="100px"
        position="absolute"
        zIndex="200"
        top={"50px"}
        right="8%"
        bg={theme.colors.primaryBackground}
        pV="10px"
        boxShadow
      >
        <Container
          gap="10px"
          pV="8px"
          paddingLeft="10px"
          hover
          onClick={() => this.selectCurrencyHandler("$")}
        >
          <Typography>$</Typography>
          <Typography>USD</Typography>
        </Container>
        <Container
          gap="10px"
          pV="8px"
          paddingLeft="10px"
          hover
          onClick={() => this.selectCurrencyHandler("€")}
        >
          <Typography>€</Typography>
          <Typography>EUR</Typography>
        </Container>
        <Container
          gap="10px"
          pV="8px"
          paddingLeft="10px"
          hover
          onClick={() => this.selectCurrencyHandler("¥")}
        >
          <Typography>¥</Typography>
          <Typography>JPY</Typography>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    currency: state.currencySlice.currency,
  };
};

export default connect(mapStateToProps)(CurrencySwitcherCard);
