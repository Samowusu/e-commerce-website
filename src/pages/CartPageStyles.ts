import { theme } from "../config/theme";

export const cartPageStyles = {
  mainContainer: {
    justifyContent: "center",
  },

  contentContainer: {
    width: "90%",
    flexDirection: "column",
    paddingBottom: "50px",
    maxWidth: "1050px",
  },
  cartText: {
    textTransform: "uppercase",
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.fontSize.xxl,
  },

  productContainer: {
    marginTop: "30px",
    flexDirection: "column",
    borderColor: theme.colors.ash,
    borderLeft: "none",
    borderRight: "none",
  },

  cardContainer: {
    borderColor: theme.colors.ash,
    padding: "20px 0px",
    height: "350px",
  },

  footerContainer: {
    flexDirection: "column",
    gap: "10px",
    marginTop: "30px",
  },

  taxContainer: {
    gap: "10px",
  },

  taxText: {
    fontSize: theme.fontSize.l,
  },

  taxAmountText: {
    fontSize: theme.fontSize.l,
    fontWeight: theme.fontWeight.bold,
  },

  totalText: {
    fontSize: theme.fontSize.l,
    fontWeight: theme.fontWeight.medium,
  },

  orderButton: {
    background: theme.colors.secondaryText,
    padding: "10px 0px",
  },

  orderText: {
    textTransform: "uppercase",
    color: theme.colors.primaryBackground,
    fontWeight: theme.fontWeight.semiBold,
  },
};
