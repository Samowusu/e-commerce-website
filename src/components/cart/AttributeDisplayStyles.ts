import { theme } from "../../config/theme";

export const attributeDisplayStyles = {
  mainContainer: {
    flexDirection: "column",
    gap: "5px",
  },

  attributeTitle: (productDescription: boolean) => {
    return {
      textTransform: productDescription ? "uppercase" : "capitalize",
      fontSize: productDescription ? theme.fontSize.m : theme.fontSize.s,
      fontWeight: productDescription
        ? theme.fontWeight.bold
        : theme.fontWeight.regular,
    };
  },

  rectanglesContainer: {
    gap: "8px",
  },
};
