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
      console.log({ action });
      const cart = [...state.items];
      //use selectedItem of each attribute set to find existing product with same set of variation
      // and increment quantity if they exist. Add as new item if they dont exist
      const perfectMatch = cart.findIndex((item, id) => {
        const foundPerfectMatch =
          item.id === action.payload.product.id &&
          item.attributes.every((attribute, index) => {
            return (
              attribute?.selectedItem?.id ===
              action?.payload?.product?.attributes[index]?.selectedItem?.id
            );
          });
        return foundPerfectMatch;
      });

      if (perfectMatch !== -1) {
        state.items[perfectMatch] = {
          ...state.items[perfectMatch],
          quantity: state.items[perfectMatch].quantity + 1,
        };
      } else {
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
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.items[action.payload] = {
        ...state.items[action.payload],
        quantity: state.items[action.payload].quantity + 1,
      };
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      state.items[action.payload] = {
        ...state.items[action.payload],
        quantity: state.items[action.payload].quantity - 1,
      };
    },

    removeItem: (state, action: PayloadAction<number>) => {
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
