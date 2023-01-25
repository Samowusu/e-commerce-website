import { Component } from "react";
import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";
import { CURRENCIES } from "../config/utils";

import type { RootState, AppDispatch } from "../store/store";
import { changeCurrency, CurrencyState } from "../store/currencySlice";
import { computeTotalPrice } from "../store/cartSlice";
import { connect } from "react-redux";
import { currencySwitcherCardStyles } from "./CurrencySwitcherCardStyles";

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
      <Container style={currencySwitcherCardStyles.mainContainer} boxShadow>
        {CURRENCIES.map((price, index) => (
          <Container
            key={index}
            style={currencySwitcherCardStyles.currencyContainer}
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
