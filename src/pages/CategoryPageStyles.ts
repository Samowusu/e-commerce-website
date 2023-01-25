import { theme } from "../config/theme";

export const categoryPageStyles = {
  mainContainer: {
    justifyContent: "center",
  },

  contentContainer: {
    width: "90%",
    flexDirection: "column",
    maxWidth: "1050px",
  },

  categoryNameText: {
    fontSize: theme.fontSize.xxxl,
    marginLeft: "16px",
  },

  cardContainer: {
    flexWrap: "wrap",
    gap: "30px",
    marginTop: "50px",
  },
};
