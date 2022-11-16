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
      veryBold: string;
      bold: string;
      normal: string;
      light: string;
      veryLight: string;
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
    veryBold: "700",
    bold: "600",
    normal: "500",
    light: "400",
    veryLight: "300",
  },
};
