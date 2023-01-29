import { colorOveride } from "./colors-overide";

export const buttonOveride = {
  baseStyle: {
    fontWeight: 400,
    bg: "none",
    color: "black",
    outline: "none",
    p: "14px 36px",
    borderRadius: 0,
  },
  variants: {
    greyed: {
      bgColor: colorOveride.neutral[3],
      _hover: {
        bg: "none",
        bgColor: colorOveride.neutral[7],
      },
      _active: {
        bg: "none",
        bgColor: colorOveride.neutral[7],
      },
    },
    disabled: {
      bgColor: colorOveride.neutral[7],
    },
    hero: {
      p: "18px 36px",
      borderRadius: "none",
      border: "5px solid #FFFFFF",
      bg: "transparent",
      color: "white",
      fontWeight: 700,
      fontSize: "21px",
      textTransform: "uppercase",
    },
    addToCart: {
      bgColor: colorOveride.primary.primary,
      color: "white",
      p: "14px 36px",
      borderRadius: 0,
      textTransform: "uppercase",
    },
    promo: {
      color: colorOveride.primary.primary,
      textTransform: "uppercase",
      p: "14px 36px",
      bgColor: "white",
      borderRadius: 0,
      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.04)",
    },
  },
};
