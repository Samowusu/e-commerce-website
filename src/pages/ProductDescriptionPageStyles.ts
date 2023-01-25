import { theme } from "../config/theme";

export const productDescriptionPageStyles = {
  mainContainer: {
    justifyContent: "center",
    paddingTop: "50px",
  },

  contentContainer: {
    width: "90%",
    maxWidth: "1050px",
  },

  imagesContainer: {
    justifyContent: "space-between",
    width: "50%",
  },

  bigImageContainer: {
    width: "75%",
    height: "465px",
    paddingBottom: "50px",
  },

  rightSectionContainer: {
    width: "50%",
    paddingLeft: "70px",
  },

  rightSectionContentContainer: {
    flexDirection: "column",
    maxWidth: "250px",
  },

  productNameContainer: {
    flexDirection: "column",
    gap: "10px",
  },
  productBrandText: {
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.semiBold,
  },

  productNameText: {
    fontSize: theme.fontSize.xl,
  },

  bottomSectionContainer: {
    flexDirection: "column",
    marginTop: "30px",
    gap: "15px",
  },

  priceContainer: {
    flexDirection: "column",
    gap: "15px",
  },

  priceText: {
    textTransform: "uppercase",
    fontSize: theme.fontSize.m,
    fontWeight: theme.fontWeight.bold,
  },

  priceAmount: {
    fontSize: theme.fontSize.l,
    fontWeight: theme.fontWeight.bold,
  },

  addToCartButton: {
    background: theme.colors.secondaryText,
    padding: "10px 0px",
    margin: "15px 0px",
    maxWidth: "240px",
  },

  addToCartText: {
    textTransform: "uppercase",
    color: theme.colors.primaryBackground,
    fontWeight: theme.fontWeight.semiBold,
  },

  productDescriptionText: {
    lineHeight: "24px",
    textTransform: "none",
  },
};
