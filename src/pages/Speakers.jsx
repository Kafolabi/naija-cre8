import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import OurHeading from "../ui/OurHeading";
import Speaker from "../ui/Speaker";
import { speakers } from "../data/speakers";

function Speakers() {
  return (
    <Box my={10} mx={{ base: 4, md: 5 }}>
      <OurHeading isAnimate alignCenter>
        <Box textAlign="center" lineHeight="base">
          KEYNOTE <br />
          SPEAKERS
        </Box>
      </OurHeading>

      <Flex
        mt={10}
        gap={{ base: 8, md: 0 }}
        wrap="wrap"
        justify="center"
        color="textGreen"
      >
        <Image
          src="/logo.png"
          alt="Naija Cre8 Logo"
          position="absolute"
          left={{ base: "-10%", md: "2%" }}
          top={{ base: "47%", md: "50%" }}
          transform="translateY(-50%)"
          w={{ base: "225px", md: "310px" }}
          zIndex={0}
        />
        <Image
          src="/logo.png"
          alt="Naijacre8 logo"
          position="absolute"
          right={{ base: "-10%", md: "2%" }}
          top={{ base: "47%", md: "50%" }}
          transform="translateY(-50%)"
          w={{ base: "225px", md: "310px" }}
          zIndex={0}
        />

        {speakers.slice(0, 2).map((speaker, index) => (
          <Speaker key={index} speaker={speaker} />
        ))}
      </Flex>

      <Flex
        mt={10}
        mb={20}
        wrap="wrap"
        justify="center"
        color="textGreen"
        gap={{ base: 8, md: 0 }}
      >
        {speakers.slice(2, 4).map((speaker, index) => (
          <Speaker key={index} speaker={speaker} />
        ))}
      </Flex>

      <Flex
        mt={10}
        mb={20}
        wrap="wrap"
        justify="center"
        color="textGreen"
        gap={{ base: 8, md: 0 }}
      >
        {speakers.slice(4, 6).map((speaker, index) => (
          <Speaker key={index} speaker={speaker} />
        ))}
      </Flex>
      <Flex
        mt={10}
        mb={20}
        wrap="wrap"
        justify="center"
        color="textGreen"
        gap={{ base: 8, md: 0 }}
      >
        {speakers.slice(6, 8).map((speaker, index) => (
          <Speaker key={index} speaker={speaker} />
        ))}
      </Flex>

      <Box
        maxW="5xl"
        mx={{ base: 0, md: 20 }}
        backgroundColor="boxGreen"
        px={{ base: 3, md: 5 }}
        // py={4}
        py={8}
        rounded="3xl"
      >
        <Heading
          fontFamily="body"
          textAlign="center"
          color="hoverLinkGreen"
          fontWeight="semibold"
        >
          Other Speakers
        </Heading>
        <Box rounded="2xl" fontSize="xl">
          <Flex wrap="wrap" justify="center" mt={2}>
            <Box p={3} color="textWhite" flex="1 1 300px">
              Representative from Youtube Nigeria
            </Box>
            <Box p={3} color="textWhite" flex="1 1 300px">
              Representative from Tiktok Nigeria
            </Box>
          </Flex>
          <Flex wrap="wrap" justify="center">
            <Box p={3} color="textWhite" flex="1 1 300px">
              Representative from Meta Nigeria
            </Box>
            <Box p={3} color="textWhite" flex="1 1 300px">
              The Minister of Youth
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Speakers;
