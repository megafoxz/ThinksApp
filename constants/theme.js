import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#007bff", // orange
  secondary: "#CDCDD2", // gray
  red: "#e74f4f",

  // colors
  black: "#1E1F20",
  white: "#FFFFFF",

  green: "#70d03b",

  lightGray: "#F5F5F6",
  lightGray2: "#F6F6F7",
  lightGray3: "#EFEFF1",
  lightGray4: "#F8F8F9",
  lightGray5: "#eaeaea",
  transparent: "transparent",
  darkgray: "#898C95",
  darkGreen: "#229879",
  darkLime: "#1A8871",
  lightLime: "#BBD6C5",
  lime: "#2AD699",
  lightGreen: "#E7F9EF",
  lightGreen1: "#8EbCA0",

  yellow: "#f5d585",

  white2: "#F9F9F9",
  blue: "#4096FE",
  lightBlue: "rgba(176,179,199,1)",
  lightBlue2: "#a8c3ed",
  gray: "#777777",
  gray2: "#F8F8F8",
  orange: "rgba(255,163,123,1)",
  // lightGray: "#F5F6FB",
  // lightGray2: "#757575",

  transparentBlack1: "rgba(2, 2, 2, 0.1)",
  transparentBlack3: "rgba(2, 2, 2, 0.3)",
  transparentBlack5: "rgba(2, 2, 2, 0.5)",
  transparentBlack7: "rgba(2, 2, 2, 0.7)",
  transparentBlack9: "rgba(2, 2, 2, 0.9)",

  transparentGray: "rgba(77,77,77, 0.8)",
  transparentDarkGray: "rgba(20,20,20, 0.9)",

  transparent: "transparent",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 15,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "MavenPro-Regular",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: "MavenPro-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: {
    fontFamily: "MavenPro-Black",
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  // h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  // h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  // h5: { fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 20 },
  h3: { fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontSize: SIZES.h5, lineHeight: 20 },
  body1: {
    fontFamily: "MavenPro-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "MavenPro-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "MavenPro-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "MavenPro-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "MavenPro-Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
  noResult: { fontFamily: "", fontSize: SIZES.body5, lineHeight: 20 },
  thin: { fontWeight: "100" }, // Thin
  ultraLight: { fontWeight: "200" }, // Ultra Light
  light: { fontWeight: "300" }, // Light
  regular: { fontWeight: "400" }, // Regular
  medium: { fontWeight: "500" }, // Medium
  semibold: { fontWeight: "600" }, // Semibold
  bold: { fontWeight: "700" }, // Bold
  heavy: { fontWeight: "800" }, // Heavy
  black: { fontWeight: "900" }, // Black
  //Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
