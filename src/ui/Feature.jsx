import { Box, Heading, Text } from "@chakra-ui/react";


function Feature({ title, body }) {
  return (
    <Box bg="boxCream" p={6} rounded="2xl" textAlign="center">
      <Heading fontSize="3xl" fontWeight="thin" letterSpacing="wider" mb={4}>
        {title}
      </Heading>
      <Text fontSize="md" mb={4} lineHeight="1.7rem" letterSpacing="wider">
        {body}
      </Text>
    </Box>
  );
}

export default Feature;
