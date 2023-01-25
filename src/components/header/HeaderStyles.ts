import { theme } from "../../config/theme";

export const headerStyles = {
  mainContainer: {
    justifyContent: "center",
    position: "fixed",
    zIndex: "100",
    top: "0",
    background: theme.colors.primaryBackground,
  },

  contentContainer: {
    justifyContent: "space-between",
    width: "90%",
    maxWidth: "1050px",
    paddingRight: "60px",
    paddingTop: "24px",
    position: "relative",
  },

  rightSectionContainer: {
    width: "80px",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "fit-content",
    gap: "10px",
  },

  currencyContainer: {
    alignItems: "center",
    width: "auto",
    gap: "10px",
    position: "relative",
  },

  currencyText: {
    fontSize: theme.fontSize.m,
    fontWeight: theme.fontWeight.medium,
    lineHeight: "2px",
  },

  dropDownButton: {
    width: "10px",
    height: "10px",
  },

  totalQuantityContainer: {
    width: "20px",
    height: "20px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    background: theme.colors.black,
    position: "absolute",
    right: "50px",
    top: "15px",
  },

  totalQuantityText: {
    fontSize: theme.fontSize.vs,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.primaryBackground,
  },

  cartButton: {
    marginLeft: "0px",
    width: "auto",
  },
};
