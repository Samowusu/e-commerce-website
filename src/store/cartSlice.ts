import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../config/types";

export interface AddToCartPayload {
  product: Product;
  index: number;
}
export const initialProduct: Product = {
  id: "123",
  name: "",
  inStock: false,
  gallery: ["something"],
  description: "",
  category: "",
  attributes: [
    {
      id: "",
      name: "",
      type: "",
      items: [
        {
          id: "",
          value: "",
          displayValue: "",
        },
      ],
    },
  ],
  prices: [
    {
      currency: {
        label: "",
        symbol: "",
      },
      amount: 4,
    },
  ],
  brand: "",
};

export interface CartState {
  items: Product[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      console.log(action.payload);
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.product.id
      );

      if (existingCartItemIndex === -1) {
        console.log("item doesn't exist");
        state.items.push(action.payload.product);
      }
    },

    computeTotalPrice: (state, action: PayloadAction<number>) => {
      // state.totalPrice = state.items.reduce((current, next) =>
      //  current.prices[action.payload].amount + next.prices[action.payload].amount
      // )
    },
  },
});
export const { addToCart, computeTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;
