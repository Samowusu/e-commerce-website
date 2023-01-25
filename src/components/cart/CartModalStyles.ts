import { theme } from "../../config/theme";
import { headerHeight } from "../../config/constants";

export const cartModalStyles = {
  content: {
    maxWidth: "350px",
    minWidth: "300px",
    maxHeight: "530px",
    padding: "0px",
    border: "none",
    borderRadius: "0px",
    top: "0px",
    right: "10%",
    left: "auto",
    zIndex: "500",
  },
  overlay: {
    background: `${theme.colors.modalBackground}`,
    zIndex: "500",

    top: `${headerHeight}`,
  },
};
