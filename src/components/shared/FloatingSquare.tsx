import React from "react";
import { Box } from "@mui/material";

import SquareAsset1 from "../../assets/square1.png";
import SquareAsset2 from "../../assets/square2.png";
import SquareAsset3 from "../../assets/square3.png";
import SquareAsset4 from "../../assets/square4.png";
import SquareAsset5 from "../../assets/square5.png";

const assets = [
  SquareAsset1,
  SquareAsset2,
  SquareAsset3,
  SquareAsset4,
  SquareAsset5,
];

type FloatingSquareProps = {
  index: number; // 0-4 arası asset seçimi için
  delay?: number;
  sx?: React.CSSProperties | object;
};

const FloatingSquare: React.FC<FloatingSquareProps> = ({
  index,
  delay = 0,
  sx = {},
}) => {
  const asset = assets[index % assets.length];

  return (
    <Box
      sx={{
        position: "absolute",
        width: "60px",
        height: "60px",
        opacity: 0.08,
        animation: `float 8s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        zIndex: 1,
        "@keyframes float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-30px) rotate(120deg)" },
          "66%": { transform: "translateY(-15px) rotate(240deg)" },
        },
        ...sx,
      }}
    >
      <img
        src={asset}
        alt={`floating square ${index + 1}`}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default FloatingSquare;
