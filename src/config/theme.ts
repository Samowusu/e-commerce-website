import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      primaryText: string;
      secondaryText: string;
      faintText: string;
      primaryBackground: string;
      grey: string;
      black: string;
      green: string;
      blue: string;
      orange: string;
      lightGrey: string;
      ash: string;
      modalBackground: string;
    };

    fontSize: {
      xxxl: string;
      xxl: string;
      xl: string;
      l: string;
      m: string;
      s: string;
      vs: string;
    };

    fontWeight: {
      light: string;
      regular: string;
      medium: string;
      semiBold: string;
      bold: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    primaryText: "#1D1F22",
    secondaryText: "#5ECE7B",
    faintText: "#8D8F9A",
    primaryBackground: "#FFFFFF",
    grey: "#D3D2D5",
    black: "#2B2B2B",
    green: "#0F6450",
    blue: "#15A4C3",
    orange: "#EA8120",
    lightGrey: "#EEEEEE",
    ash: "#E5E5E5",
    modalBackground: "rgba(57, 55, 72, 0.22)",
  },

  fontSize: {
    xxxl: "42px",
    xxl: "32px",
    xl: "30px",
    l: "24px",
    m: "18px",
    s: "16px",
    vs: "14px",
  },

  fontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
  },
};
