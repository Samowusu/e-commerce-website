import { theme } from "../../config/theme";

export const cartOverlayStyles = {
  mainContainer: {
    padding: "10px",
    maxWidth: "350px",
    minWidth: "300px",
  },

  contentContainer: {
    flexDirection: "column",
  },

  headerContainer: {
    gap: "5px",
    paddingBottom: "10px",
  },

  headerText: {
    fontWeight: theme.fontWeight.bold,
  },

  cartItemsContainer: {
    flexDirection: "column",
    gap: "30px",
    maxHeight: "350px",
    pV: "5px",
    overflow: "auto",
  },

  footerContainer: {
    flexDirection: "column",
    paddingTop: "10px",
  },

  totalPriceContainer: {
    justifyContent: "space-between",
  },

  totalText: {
    fontWeight: theme.fontWeight.medium,
  },

  priceText: {
    fontWeight: theme.fontWeight.bold,
  },

  buttonsContainer: {
    marginTop: "40px",
    justifyContent: "space-between",
  },

  link: {
    width: "48%",
    height: "auto",
  },

  viewBagButton: {
    padding: "15px 0",
    borderColor: theme.colors.primaryText,
  },

  viewBagText: {
    textTransform: "uppercase",
    fontSize: theme.fontSize.vs,
    fontWeight: theme.fontWeight.semiBold,
  },

  checkoutButton: {
    width: "48%",
    padding: "15px 0",
    background: theme.colors.secondaryText,
  },

  checkoutText: {
    textTransform: "uppercase",
    fontSize: theme.fontSize.vs,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.primaryBackground,
  },
};
