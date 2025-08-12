import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";

export const GradientDivider = styled(Divider)(({ theme }) => ({
  width: "100%",
  height: 3,
  borderRadius: 2,
  margin: "1.5rem auto",
  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  border: "none",
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
    animation: "shimmer 3s infinite",
  },
  "@keyframes shimmer": {
    "0%": { left: "-100%" },
    "100%": { left: "100%" },
  },
}));
