import type { Product } from "./types";
import shirt from "../assets/images/ProductD.png";

export const DUMMY_SIZES: string[] = ["xs", "s", "m", "l"];

export const DUMMY_COLORS: string[] = ["grey", "black", "green"];

export const DUMMY_PRODUCTS: Product[] = [
  {
    quantity: 1,
    id: "some-string",
    name: "apollo running shorts",
    inStock: true,
    gallery: [`${shirt}`],
    description: "description",
    brand: "apollo",
    attributes: [
      {
        id: "attribute- id",
        name: "attribute-name",
        type: "attribute-type",
        items: [
          {
            displayValue: "displayValue",
            value: "value",
            id: "id",
          },
        ],
      },
    ],
    prices: [
      {
        amount: 50.05,
        currency: {
          label: "USD",
          symbol: "$",
        },
      },
    ],
    category: "tech",
  },
];

export const CURRENCIES = [
  {
    currency: {
      symbol: "$",
      label: "USD",
    },
  },
  {
    currency: {
      symbol: "£",
      label: "GBP",
    },
  },
  {
    currency: {
      symbol: "A$",
      label: "AUD",
    },
  },
  {
    currency: {
      symbol: "¥",
      label: "JPY",
    },
  },
  {
    currency: {
      symbol: "₽",
      label: "RUB",
    },
  },
];
//Utility Fns

export const segragateProductsToCategories = (productsArray: Product[]) => {
  let clothesArray: Product[] = [];
  let techArray: Product[] = [];
  productsArray?.forEach((product) => {
    if (product.category === "clothes") {
      clothesArray.push(product);
    } else {
      techArray.push(product);
    }
  });
  return {
    clothes: clothesArray,
    tech: techArray,
  };
};

export const computeTotalQuantity = (productsArray: Product[]) => {
  let quantity: number[] = [];
  productsArray.forEach((item) => quantity.push(item.quantity));

  const totalQuantity = quantity.reduce(
    (accumulator, quantity) => accumulator + quantity,
    0
  );
  return totalQuantity;
};
