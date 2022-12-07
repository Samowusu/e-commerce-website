import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: string[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      if (state.items.includes(action.payload)) {
        console.log("duplicate");
      }
      state.items = [...state.items, action.payload];
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
