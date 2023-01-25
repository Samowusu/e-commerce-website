import { theme } from "../config/theme";

export const currencySwitcherCardStyles = {
  mainContainer: {
    flexDirection: "column",
    width: "100px",
    position: "absolute",
    zIndex: "200",
    top: "18px",
    right: "-75px",
    background: theme.colors.primaryBackground,
    padding: "10px 0",
  },

  currencyContainer: {
    gap: "10px",
    padding: "8px 15px",
    justifyContent: "space-between",
  },
};
