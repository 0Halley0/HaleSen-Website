import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    title?: string;
    gradientStart?: string;
  }
  interface SimplePaletteColorOptions {
    title?: string;
    gradientStart?: string;
  }
}
export const getDesignTokens = (mode: "light" | "dark") => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? "#edede9b0" : "#1f4e5f",
      title: mode === "light" ? "#2d6a4f" : "#74c69d",
      gradientStart: mode === "light" ? "#1a365d" : "#26597f",
      gradientMiddle: mode === "light" ? "#2d6a4f" : "#1a4c47",
      gradientEnd: mode === "light" ? "#38a169" : "#237c52",
    },
    secondary: {
      main: mode === "light" ? "#5292a9ff" : "#74c6bfff",
      gradientStart: mode === "light" ? "#0a5332" : "#07401f",
      gradientEnd: mode === "light" ? "#74c69d" : "#52a96e",
    },
    background: {
      default: mode === "light" ? "#edede9" : "#121212",
      paper: mode === "light" ? "#fff" : "#1d1d1d",
    },
    text: {
      primary: mode === "light" ? "#2d6a4f" : "#74c69d",
      secondary: mode === "light" ? "#2d3748" : "#dadfe7ff",
      highlight: mode === "light" ? "#2d6a4f" : "#74c69d",
    },
  },
});

export const getTheme = (mode: "light" | "dark") =>
  createTheme(getDesignTokens(mode));
