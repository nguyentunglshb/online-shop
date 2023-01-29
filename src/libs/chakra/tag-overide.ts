import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { colorOveride } from "./colors-overide";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const trend = definePartsStyle({
  container: {
    bgColor: colorOveride.white[1],
    p: "8px 10px",
    borderRadius: "30px",
    w: "fit-content",
  },
});

export const tagOveride = defineMultiStyleConfig({
  variants: {
    trend,
  },
});
