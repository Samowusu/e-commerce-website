import { theme } from "../../config/theme";

export const cartItemCardStyles = {
  mainContainer: {
    width: "60%",
  },

  textsContainer: {
    flexDirection: "column",
    gap: "10px",
  },

  brandName: (cartPage: boolean) => {
    return {
      fontWeight: cartPage ? theme.fontWeight.semiBold : theme.fontWeight.light,
      fontSize: cartPage ? theme.fontSize.l : theme.fontSize.s,
    };
  },
  productName: (cartPage: boolean) => {
    return {
      fontWeight: cartPage ? theme.fontWeight.regular : theme.fontWeight.light,
      fontSize: cartPage ? theme.fontSize.l : theme.fontSize.s,
    };
  },
  productPrice: (cartPage: boolean) => {
    return {
      fontWeight: cartPage ? theme.fontWeight.bold : theme.fontWeight.medium,
      fontSize: cartPage ? theme.fontSize.m : theme.fontSize.s,
    };
  },

  buttonsAndImageContainer: {
    gap: "5px",
    width: "40%",
  },

  buttonsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "20%",
  },

  icons: (cartPage: boolean) => {
    return {
      width: cartPage ? "100%" : "24",
      heigth: cartPage ? "45" : "24",
    };
  },

  imageContainer: {
    width: "80%",
  },
};
