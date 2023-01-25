import { theme } from "../../config/theme";

export const productCardStyles = {
  mainContainer: {
    width: "300px",
    justifyContent: "center",
    position: "relative",
  },

  link: { width: "90%" },

  contentContainer: (inStock: boolean) => {
    return {
      width: "100%",
      height: "100%",
      flexDirection: "column",
      padding: "10px",
      position: "relative",
      opacity: inStock ? "" : "0.4",
    };
  },

  outOfStockContainer: {
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    zIndex: "1",
  },

  outOfStockText: {
    textTransform: "uppercase",
    color: theme.colors.faintText,
    fontSize: theme.fontSize.l,
  },

  imageContainer: {
    width: "100%",
    height: "200px",
  },

  productNameContainer: {
    flexDirection: "column",
    margin: "10px 0px",
    gap: "10px",
  },

  productNameText: (inStock: boolean, price?: boolean) => {
    return {
      fontSize: theme.fontSize.m,
      fontWeight: price ? theme.fontWeight.bold : theme.fontWeight.light,
      color: inStock ? theme.colors.primaryText : theme.colors.faintText,
    };
  },

  addToCartButton: {
    width: "fit-content",
    height: "fit-content",
    zIndex: "10",
    position: "absolute",
    bottom: "20%",
    right: "30px",
  },
};
