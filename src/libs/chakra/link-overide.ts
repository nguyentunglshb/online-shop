import { colorOveride } from "./colors-overide";

export const linkOveride = {
  baseStyle: {
    fontWeight: 500,
    fontSize: "14px",
    color: colorOveride.primary.primary,
    _hover: {
      textDecoration: "none",
    },
  },
  variants: {
    underline: {
      textDecoration: "underline",
      _hover: {
        textDecoration: "underline",
      },
    },
    grey: {
      color: colorOveride.neutral[1],
    },
  },
};
