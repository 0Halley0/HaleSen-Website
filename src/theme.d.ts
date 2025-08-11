import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    title?: string;
    gradientStart?: string;
    gradientMiddle?: string;
    gradientEnd?: string;
  }
  interface SimplePaletteColorOptions {
    title?: string;
    gradientStart?: string;
    gradientMiddle?: string;
    gradientEnd?: string;
  }
}
