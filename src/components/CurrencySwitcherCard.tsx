import { Component } from "react";
import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";
import { CURRENCIES } from "../config/utils";
import { graphql } from "@apollo/react-hoc";

import type { RootState, AppDispatch } from "../store/store";
import { changeCurrency, CurrencyState } from "../store/currencySlice";
import { computeTotalPrice } from "../store/cartSlice";
import { connect } from "react-redux";
import { currencySwitcherCardStyles } from "./CurrencySwitcherCardStyles";
import { FETCH_CURRENCIES } from "../graphql/queries";
import { Currency } from "../config/types";

interface Props {
  dispatch: AppDispatch;
  onCloseCurrencySwitcherCard: () => void;
}

const withFetchCurrenciesQuery = graphql<Props>(FETCH_CURRENCIES);

class CurrencySwitcherCard extends Component<Props> {
  selectCurrencyHandler = (currency: CurrencyState) => {
    this.props.dispatch(changeCurrency(currency));
    this.props.dispatch(computeTotalPrice(currency.currencyIndex));
    this.props.onCloseCurrencySwitcherCard();
  };

  render() {
    const currencies = (this.props as any).data.currencies;

    return (
      <Container style={currencySwitcherCardStyles.mainContainer} boxShadow>
        {currencies?.map((currency: Currency, index: number) => (
          <Container
            key={index}
            style={currencySwitcherCardStyles.currencyContainer}
            hover
            onClick={() =>
              this.selectCurrencyHandler({
                currency: currency.symbol,
                currencyIndex: index,
              })
            }
          >
            <Typography>{currency.symbol}</Typography>
            <Typography>{currency.label}</Typography>
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

export default connect(mapStateToProps)(
  withFetchCurrenciesQuery(CurrencySwitcherCard)
);
