import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { Input } from "./input";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#F8B51C",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "gray.200",
      },
    }),
  },
  components: {
    Button,
    // Input, // not working for some reason - come back to this
  },
});
