import { Box, Heading, Image, Text } from "@chakra-ui/react";

function Speaker({ speaker, index }) {
  return (
    <Box
      key={index}
      bg="boxCream"
      p={7}
      rounded="2xl"
      maxW="md"
      shadow="md"
      flex="1 1 300px"
    >
      <Image
        src={speaker.img}
        alt={speaker.name}
        roundedTop="2xl"
        w="100%"
        h="auto"
        mb={4}
      />
      <Heading
        color="textSpeakerGreen"
        as="h5"
        size="xl"
        fontWeight="semibold"
        fontFamily="body"
      >
        {speaker.name}
      </Heading>
      <Text color="black" fontWeight="bold" mb={5} mt={2}>
        {speaker.born}
      </Text>

      {speaker.details.map((section, i) => (
        <Text key={i} lineHeight="tall" mb={5}>
          <Text as="b" display="block" letterSpacing="wide">● {section.title}</Text> {section.text}
        </Text>
      ))}
    </Box>
  );
}

export default Speaker;
