import { extendTheme } from "@chakra-ui/theme-utils";

const theme = extendTheme({
  colors: {
    boxCream: "#F9F9C7",
    boxGreen: "#095344",
    textWhite: "#FFFFFF",
    textGreen: "#095344",
    textSpeakerGreen: "#092D26",
    activeLinkGreen: "#0FF900",
    hoverLinkGreen: "#0CC800",
  },
  fonts: {
    body: `'Poppins', sans-serif`,
    heading: `'Syne', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "#112d26",
        // color: "gray.800",
      },
    },
  },
});

export default theme;
