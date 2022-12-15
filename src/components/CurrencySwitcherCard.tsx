import React, { Component } from "react";
import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";
import { headerHeight } from "../config/constants";
import { CURRENCIES } from "../config/utils";
import { theme } from "../config/theme";
import type { RootState, AppDispatch } from "../store/store";
import { changeCurrency, CurrencyState } from "../store/currencySlice";
import { computeTotalPrice } from "../store/cartSlice";
import { connect } from "react-redux";

interface Props {
  dispatch: AppDispatch;
  onShowCurrencySwitcherCard: () => void;
}
class CurrencySwitcherCard extends Component<Props> {
  selectCurrencyHandler = (currency: CurrencyState) => {
    this.props.dispatch(changeCurrency(currency));
    this.props.dispatch(computeTotalPrice(currency.currencyIndex));
    this.props.onShowCurrencySwitcherCard();
  };

  render() {
    return (
      <Container
        flexDirection="column"
        maxWidth="100px"
        position="fixed"
        zIndex="200"
        top={"50px"}
        right="8%"
        bg={theme.colors.primaryBackground}
        pV="10px"
        boxShadow
      >
        {CURRENCIES.map((price, index) => (
          <Container
            key={index}
            gap="10px"
            pV="8px"
            pH="15px"
            justifyContent="space-between"
            hover
            onClick={() =>
              this.selectCurrencyHandler({
                currency: price.currency.symbol,
                currencyIndex: index,
              })
            }
          >
            <Typography>{price.currency.symbol}</Typography>
            <Typography>{price.currency.label}</Typography>
          </Container>
        ))}

        {/* <Container
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
        </Container> */}
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
