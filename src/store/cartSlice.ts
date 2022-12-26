import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../config/types";

export interface AddToCartPayload {
  product: Product;
  quantity: number;
}

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
      const cart = [...state.items];
      console.log({ cart });
      const existingCartItemIndex = cart.findIndex(
        (item) => item.id === action.payload.product.id
      );
      console.log({ existingCartItemIndex });
      //add to cart if product isn't already present
      if (existingCartItemIndex === -1) {
        console.log("item doesn't exist");
        state.items.push({
          ...action.payload.product,
          quantity: action.payload.quantity,
        });
      } else {
        console.log("checking for duplicates...");
        //shortlist list of items to items that have same id as product from payload
        const filteredItems = cart.filter(
          (item) => item.id === action.payload.product.id
        );
        console.log({ filteredItems });
        //[assuming each item had a selectedItem in their attributes]
        // check if selectedItem of attributes from payload are the same as
        // selected item on each existing product

        const duplicateItemIndex = filteredItems.findIndex((item) => {
          let duplicateCount = 0;

          item.attributes.map((attribute, index) => {
            if (
              attribute.selectedItem?.id ===
              action.payload.product.attributes[index].selectedItem?.id
            ) {
              duplicateCount++;
            }
          });
          console.log({ duplicateCount, length: item.attributes.length });
          return duplicateCount === item.attributes.length;
        });

        console.log({ duplicateItemIndex });
        if (duplicateItemIndex === -1) {
          console.log("item doesn't exist");
          state.items.push({
            ...action.payload.product,
            quantity: action.payload.quantity,
          });
        }
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

    increaseQuantity: (state, action: PayloadAction<number>) => {
      // const cartProductIndex = state.items.findIndex(
      //   (item) => item.id === action.payload
      // );
      state.items[action.payload] = {
        ...state.items[action.payload],
        quantity: state.items[action.payload].quantity + 1,
      };
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      // const cartProductIndex = state.items.findIndex(
      //   (item) => item.id === action.payload
      // );
      state.items[action.payload] = {
        ...state.items[action.payload],
        quantity: state.items[action.payload].quantity - 1,
      };
    },

    removeItem: (state, action: PayloadAction<number>) => {
      // const cartProductIndex = state.items.findIndex(
      //   (item) => item.id === action.payload
      // );
      // const existingCartProduct = state.items[cartProductIndex];
      console.log("removing from redux");
      state.items = state.items.filter((_, index) => index !== action.payload);
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
