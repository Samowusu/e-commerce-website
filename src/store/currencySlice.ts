import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { store } from "./store";

export interface CurrencyState {
  currency: string;
  currencyIndex: number;
}

const initialState: CurrencyState = {
  currency: "$",
  currencyIndex: 0,
};

export const currencySlice = createSlice({
  name: "currencySlice",
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<CurrencyState>) => {
      state.currency = action.payload.currency;
      state.currencyIndex = action.payload.currencyIndex;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
