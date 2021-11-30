import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "rgb(151, 210, 199)",
  primaryBright: "rgb(151, 210, 199)",
  primaryDark: "rgb(151, 210, 199)",
  secondary: "#1a6d60",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "linear-gradient(140deg, #568D88 50%, #A2A4A1)",
  backgroundDisabled: "#568d88",
  contrast: "#191326",
  invertedContrast: "#aed2ce",
  input: "#aed2ce",
  tertiary: "#568d88",
  text: "black",
  textDisabled: "#BDC2C4",
  textSubtle: "white",
  borderColor: "#E9EAEB",
  card: "white",
  gradients: {
    bubblegum: "#568d88",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "linear-gradient(140deg, #568D88 50%, #A2A4A1)",
  backgroundDisabled: "#568d88",
  contrast: "#FFFFFF",
  invertedContrast: "#aed2ce",
  input: "#aed2ce",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "black",
  textDisabled: "#666171",
  textSubtle: "white",
  borderColor: "#524B63",
  card: "white",
  gradients: {
    bubblegum: "#568d88",
  },
};
