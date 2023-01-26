import { ComponentStyleConfig } from "@chakra-ui/react";

import { colorOveride } from "./colors-overide";

export const textOveride: ComponentStyleConfig = {
  baseStyle: {
    color: colorOveride.grey[1000],
  },
  variants: {
    heading: {
      fontSize: "36px",
      fontWeight: 500,
      p: "16px 0",
    },
    headerTitle: {
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "14px",
      textTransform: "uppercase",
    },
    hero: {
      fontWeight: 800,
      fontSize: "48px",
      lineHeight: "48px",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      textTransform: "uppercase",
      color: "white",
    },
    sectionTitle: {
      fontWeight: 700,
      fontSize: "36px",
      textAlign: "center",
    },
    sectionSubTitle: {
      fontWeight: 400,
      fontSize: "20px",
      textAlign: "center",
    },
    productName: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "25px",
    },
    currentPrice: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px",
      color: colorOveride.primary.primary,
    },
    originPrice: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px",
      textDecor: "line-through",
      color: "red.400",
    },
    productDetailName: {
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "48px",
    },
    productDetailCurrentPrice: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "29px",
      color: colorOveride.primary.primary,
    },
    productDetailOriginPrice: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "29px",
      color: colorOveride.neutral[5],
      textDecor: "line-through",
    },
  },
};
