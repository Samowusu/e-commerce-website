import { theme } from "../config/theme";

export const currencySwitcherCardStyles = {
  mainContainer: {
    flexDirection: "column",
    maxWidth: "100px",
    position: "fixed",
    zIndex: "200",
    top: "50px",
    right: "15%",
    background: theme.colors.primaryBackground,
    padding: "10px 0",
  },

  currencyContainer: {
    gap: "10px",
    padding: "8px 15px",
    justifyContent: "space-between",
  },
};
