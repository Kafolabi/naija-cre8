import { Box, Flex } from "@chakra-ui/react";
import OurHeading from "../ui/OurHeading";

function Speakers() {
  return (
    <Box my={12}>
      <OurHeading isAnimate alignCenter>
        <Box textAlign="center" lineHeight="base">
          KEYNOTE <br />
          SPEAKERS
        </Box>
      </OurHeading>
      <Flex
        color="boxGreen"
        // my="6rem"
        gap="1rem"
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
      >
        <Box flex="1" bg="boxCream" p={10} rounded="2xl">Hello</Box>
        <Box flex="1" bg="boxCream" p={10} rounded="2xl">Hello</Box>

      </Flex>
    </Box>
  );
}

export default Speakers;
