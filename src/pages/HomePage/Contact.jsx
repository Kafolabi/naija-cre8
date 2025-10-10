import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ContactForm from "../../ui/ContactForm";
import SocialLinks from "../../ui/SocialLinks";

function Contact() {
  return (
    <Box bg="boxGreen" py={12} px={9} rounded="3xl" mb={12}>
      <Flex
        justify="center"
        mb={6}
        gap="7rem"
        direction={{ base: "column", md: "row" }}
      >
        <Flex direction="column" color="textWhite" gap={12}>
          {/* <Box color="textWhite"> */}
          <Heading as="h2" lineHeight="base">
            We're Here To Connect And <br /> Assist You
          </Heading>
          <Text>
            Have questions about the event? Need help with registration? Our
            team is ready to assist you.
          </Text>
          <Flex direction={{ base: "column", md: "row" }} gap={8}>
            <Box>
              <Heading
                as="h3"
                fontSize="1.3rem"
                fontWeight="600"
                pb={5}
                whiteSpace="nowrap"
              >
                CONTACT US
              </Heading>
              <Text fontSize="smaller">+234 916 552 3357</Text>
            </Box>
            <Box>
              <Heading as="h3" fontSize="1.3rem" fontWeight="600" pb={5}>
                EVENT LOCATION
              </Heading>
              <Text fontSize="smaller">
                December 12, 2052 | Unilag Indoor Sport Complex, Lagos, Nigeria.{" "}
              </Text>
            </Box>
          </Flex>

          <Flex direction={{ base: "column", md: "row" }} gap={8}>
            <Box>
              <Heading
                as="h3"
                fontSize="1.3rem"
                fontWeight="600"
                pb={5}
                whiteSpace="nowrap"
              >
                EMAIL
              </Heading>
              <Text fontSize="smaller">naijacre8@gmail.com</Text>
            </Box>
            <Box>
              <Heading as="h3" fontSize="1.3rem" fontWeight="600" pb={3}>
                FOLLOW US
              </Heading>

              <SocialLinks />

            </Box>
          </Flex>
        </Flex>
        <Box>
          <ContactForm />
        </Box>
      </Flex>
    </Box>
  );
}

export default Contact;
