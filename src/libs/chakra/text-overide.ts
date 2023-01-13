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
      fontSize: "16px",
      fontWeight: 700,
    },
  },
};
