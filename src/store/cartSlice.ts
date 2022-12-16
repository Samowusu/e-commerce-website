import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../config/types";
import { act } from "react-dom/test-utils";

export interface AddToCartPayload {
  product: Product;
  index: number;
  quantity: number;
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
  quantity: 1,
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
        state.items.push({
          ...action.payload.product,
          quantity: action.payload.quantity,
        });
      }
    },

    computeTotalPrice: (state, action: PayloadAction<number>) => {
      let prices: number[] = [];
      state.items.forEach((item) =>
        prices.push(item.prices[action.payload].amount * item.quantity)
      );

      state.totalPrice = Number(
        prices.reduce((accumulator, price) => accumulator + price, 0).toFixed(2)
      );
      // state.totalPrice = state.items.reduce((accumulator,currentPrice) =>
      // accumulator + (currentPrice.prices[0].amount as number)
      // )
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const cartProductIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items[cartProductIndex] = {
        ...state.items[cartProductIndex],
        quantity: state.items[cartProductIndex].quantity + 1,
      };
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const cartProductIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items[cartProductIndex] = {
        ...state.items[cartProductIndex],
        quantity: state.items[cartProductIndex].quantity - 1,
      };
    },

    removeItem: (state, action: PayloadAction<string>) => {
      // const cartProductIndex = state.items.findIndex(
      //   (item) => item.id === action.payload
      // );
      // const existingCartProduct = state.items[cartProductIndex];
      console.log("removing from redux");
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const {
  addToCart,
  computeTotalPrice,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
