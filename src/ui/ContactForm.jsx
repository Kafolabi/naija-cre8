import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Box bg="boxCream" borderRadius="2xl" p={8} w="full">
      {/* Heading */}
      <Heading
        as="h3"
        size="sm"
        mb={2}
        color="boxGreen"
        textTransform="uppercase"
      >
        Get in touch
      </Heading>

      {/* Subtext */}
      <Text fontSize="sm" color="boxGreen" mb={6}>
        Reach out with inquiries about tickets, partnerships, or event details.
      </Text>

      {/* Form Fields */}
      <VStack spacing={4} align="stretch">
        <Input
          placeholder="Name"
          variant="flushed"
          borderColor="boxGreen"
          focusBorderColor="boxGreen"
        />
        <Input
          placeholder="Email"
          type="email"
          variant="flushed"
          borderColor="boxGreen"
          focusBorderColor="boxGreen"
        />
        <Input
          placeholder="Subject"
          variant="flushed"
          borderColor="boxGreen"
          focusBorderColor="boxGreen"
        />
        <Textarea
          placeholder="Message"
          variant="flushed"
          borderColor="boxGreen"
          focusBorderColor="boxGreen"
        />
      </VStack>

      {/* Button */}
      <Button
        mt={6}
        bg="boxGreen"
        color="textWhite"
        borderRadius="full"
        _hover={{ bg: "hoverLinkGreen" }}
      >
        Send message
      </Button>
    </Box>
  );
};

export default ContactForm;
