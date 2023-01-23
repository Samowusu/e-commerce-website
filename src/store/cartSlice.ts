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
      //use selectedItem of each attribute to find existing product with same set of variation and increment quantity if they exist. Add as new item if they dont exist
      const perfectMatch = cart.findIndex((item, id) => {
        const foundPerfectMatch =
          item.id === action.payload.product.id &&
          item.attributes.every((i, _id) => {
            console.log("filteredItems attribute", {
              i,
              item,
              id,
              _id,
              pAtt: action.payload.product.attributes[_id],
              matches:
                i.selectedItem ===
                action.payload.product.attributes[_id].selectedItem,
            });
            return (
              i?.selectedItem?.id ===
              action?.payload?.product?.attributes[_id]?.selectedItem?.id
            );
          });
        console.log({ foundPerfectMatch });
        return foundPerfectMatch;
      });
      console.log({ perfectMatch });

      if (perfectMatch !== -1) {
        console.log("found perfect match. incrementing quantity");

        state.items[perfectMatch] = {
          ...state.items[perfectMatch],
          quantity: state.items[perfectMatch].quantity + 1,
        };
      } else {
        console.log("no perfect match exists. adding to cart");
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
