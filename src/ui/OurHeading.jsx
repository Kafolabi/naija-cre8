import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

function OurHeading({ isAnimate = false, children, alignCenter = false }) {
  const [heading, subText] = Array.isArray(children) ? children : [children];

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify={alignCenter ? "center" : { base: "flex-start", md: "space-between" }}
      align={alignCenter ? "center" : "stretch"}
      gap={4}
      color="white"
      mb={6}
      textAlign={alignCenter ? "center" : { base: "center", md: "left" }}
    >
      {isAnimate ? (
        <MotionHeading
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          fontFamily="body"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {heading}
        </MotionHeading>
      ) : (
        <Heading
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          fontFamily="body"
        >
          {heading}
        </Heading>
      )}

      {subText &&
        (isAnimate ? (
          <MotionText
            textAlign={alignCenter ? "center" : { base: "center", md: "right" }}
            flex={1}
            fontSize={{ base: "md", md: "lg" }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {subText}
          </MotionText>
        ) : (
          <Text
            textAlign={alignCenter ? "center" : { base: "left", md: "right" }}
            flex={1}
            fontSize={{ base: "md", md: "lg" }}
          >
            {subText}
          </Text>
        ))}
    </Flex>
  );
}


export default OurHeading;
