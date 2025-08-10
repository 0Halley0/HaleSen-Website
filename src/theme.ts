import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode: "light" | "dark") => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? "#95d5b2" : "#3c6e71",
    },
    secondary: {
      main: mode === "light" ? "#2d6a4f" : "#74c69d",
    },
    background: {
      default: mode === "light" ? "#edede9" : "#121212",
      paper: mode === "light" ? "#fff" : "#1d1d1d",
    },
  },
});

export const getTheme = (mode: "light" | "dark") =>
  createTheme(getDesignTokens(mode));
