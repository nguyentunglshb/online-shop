import { textOveride } from "./text-overide";
import { buttonOveride } from "./button-overide";
import { extendTheme } from "@chakra-ui/theme-utils";

import { colorOveride } from "./colors-overide";
import { linkOveride } from "./link-overide";
import { tagOveride } from "./tag-overide";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "'Jost', sans-serif",
      },
    },
  },
  components: {
    Button: buttonOveride,
    Link: linkOveride,
    Text: textOveride,
    Tag: tagOveride,
  },
  colors: colorOveride,
});
