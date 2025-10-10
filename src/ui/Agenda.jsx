import { Box, Heading, Text } from "@chakra-ui/react";

export function Agenda({ title, isThereList = true, children }) {
  return (
    <Box maxW={{ base: "100%", md: "70%" }} ms={6}>
      {title ? (
        <>
          <Heading
            fontSize="3xl"
            color="textGreen"
            fontFamily="body"
            mb={5}
            lineHeight="tall"
          >
            {title}
          </Heading>
          <Text
            lineHeight={isThereList ? "short" : "2rem"}
            color="textGreen"
            mb={9}
          >
            {children}
          </Text>
        </>
      ) : (
        <Text
          lineHeight={isThereList ? "1.625rem" : "2rem"}
          color="textGreen"
          mb={9}
        >
          {children}
        </Text>
      )}
    </Box>
  );
}
