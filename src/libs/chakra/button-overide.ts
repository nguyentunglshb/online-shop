import { colorOveride } from "./colors-overide";

export const buttonOveride = {
  baseStyle: {
    fontWeight: 400,
    bg: "none",
    bgColor: colorOveride.primary.primary,
    color: "white",
    outline: "none",
    // outlineColor: colorOveride.primary.primary,
    // outlineOffset: 0,
    _hover: {
      bg: "none",
      bgColor: colorOveride.primary.light,
    },
    _active: {
      bg: "none",
      bgColor: colorOveride.primary.dark,
    },
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
  },
};
