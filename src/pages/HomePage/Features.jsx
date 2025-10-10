import { Box, Flex, Text, Avatar, HStack, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import Feature from "../../ui/Feature";

// Motion wrappers
const MotionBox = motion(Box);
const MotionText = motion(Text);

function Features() {
  return (
    <Flex
      color="boxGreen"
      my="6rem"
      gap="5rem"
      direction={{ base: "column", md: "row" }}
      wrap="wrap"
    >
      {/* Animated Speakers Box */}
      <MotionBox
        flex="1"
        bg="boxCream"
        p={10}
        rounded="2xl"
        animate={{ y: [0, -10, 0] }} // floating up and down
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Flex height="100%" gap={10}>
          {/* Icon with rotation */}
          <Heading fontWeight="thin">↗</Heading>

          <Flex direction="column" justifyContent="space-between" height="100%">
            <Box>
              <Heading fontWeight="thin" letterSpacing="wider" mb={10}>
                Speakers
              </Heading>
              <Text fontSize="md" lineHeight="1.7rem" letterSpacing="wider">
                Hear from Nigeria’s biggest digital content creators <br /> and{" "}
                <br /> youth influencers
              </Text>
            </Box>

            <HStack spacing={2}>
              <Avatar size="sm" name="Person 1" src="/path-to-image1.jpg" />
              <Avatar size="sm" name="Person 2" src="/path-to-image2.jpg" />
              <Avatar size="sm" name="Person 3" src="/path-to-image3.jpg" />
              {/* "More" text animation */}
              <Link to="/speakers">
                <MotionText
                  fontSize="sm"
                  cursor="pointer"
                  whileHover={{ scale: 1.2, color: "#38A169" }}
                  transition={{ duration: 0.3 }}
                >
                  More
                </MotionText>
              </Link>
            </HStack>
          </Flex>
        </Flex>
      </MotionBox>

      <Flex flex="1" direction="column" gap={4}>
        <Feature
          title="Networking Opportunities"
          body="Promote collaboration among content creators from all platforms"
        />
        <Feature
          title="Learn Monetization"
          body="Create a youth-led digital economy conversation between government, platforms, and creators"
        />
      </Flex>
    </Flex>
  );
}

export default Features;
