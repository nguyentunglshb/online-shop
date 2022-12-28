import { colorOveride } from "./colors-overide";

export const linkOveride = {
  baseStyle: {
    fontWeight: 500,
    fontSize: "14px",
    color: colorOveride.primary.dark,
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
  },
};
