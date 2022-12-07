import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CurrencyState {
  currency: string;
}

const initialState: CurrencyState = {
  currency: "$",
};

export const currencySlice = createSlice({
  name: "currencySlice",
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
