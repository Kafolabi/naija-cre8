import { Box, Heading, Text, VStack, Input } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionVStack = motion(VStack);
const MotionInput = motion(Input);

const fadeUpVariant = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.9, 0.2, 1], delay },
  }),
};

function TicketsBooking() {
  return (
    <>
      <MotionText
        color="boxCream"
        textAlign="center"
        fontWeight="semibold"
        fontSize="3xl"
        mt={20}
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        custom={0.08}
      >
        BOOK YOUR TICKETS
      </MotionText>

      <MotionBox
        bg="boxCream"
        borderRadius="3xl"
        py={8}
        w="full"
        textAlign="center"
        mt={5}
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        custom={0.16}
      >
        {/* Heading */}
        <MotionHeading
          as="h3"
          fontFamily="body"
          color="textGreen"
          fontWeight="semibold"
          px={{ base: 5, md: "13rem" }}
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          custom={0.26}
        >
          Fill out your details to get your tickets
        </MotionHeading>

        {/* Form Fields */}
        <MotionVStack
          spacing={7}
          align="center"
          fontSize={20}
          mt={10}
          px={{ base: 14, md: "13rem" }}
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          custom={0.36}
        >
          <MotionInput
            placeholder="Name"
            variant="flushed"
            borderColor="boxGreen"
            focusBorderColor="boxGreen"
            _placeholder={{ fontSize: "1.25rem" }}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.42}
          />
          <MotionInput
            placeholder="Email"
            type="email"
            variant="flushed"
            borderColor="boxGreen"
            focusBorderColor="boxGreen"
            _placeholder={{ fontSize: "1.25rem" }}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.48}
          />
        </MotionVStack>
      </MotionBox>
    </>
  );
}

export default TicketsBooking;