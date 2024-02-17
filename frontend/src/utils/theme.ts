import { extendTheme } from "@chakra-ui/react";

const sizes = {
  sizes: {
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
};

export const theme = extendTheme({sizes});
