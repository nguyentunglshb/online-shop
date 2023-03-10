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
    pageTitle: {
      color: "#fff",
      fontSize: "48px",
      fontWeight: 400,
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
    benefitTitle: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "25px",
      textTransform: "uppercase",
    },
    promoTitle: {
      fontWeight: 400,
      fontSize: "32px",
      lineHeight: "48px",
      color: "white",
      textTransform: "uppercase",
    },
    promoSubtitle: {
      fontSize: "18px",
      textAlign: "center",
      color: "white",
      fontWeight: 300,
    },
    trendingTitle: {
      fontSize: "18px",
      lineHeight: "40px",
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: "4px",
    },
    profileLabel: {
      fontSize: "18px",
      fontWeight: 600,
      textTransform: "uppercase",
    },
    profileInfo: {
      fontSize: "36px",
      fontWeight: 600,
      color: "white",
    },
  },
};
