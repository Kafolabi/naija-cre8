import { Box, Text, HStack, Image, Icon, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiLock } from "react-icons/fi";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function TicketsPaystack() {
  return (
    <VStack spacing={0} mt={20} align="left" justify="center" w="100%">
      {/* Pay with Paystack Card */}
      <MotionBox
        bg="boxCream"
        borderRadius="3xl"
        boxShadow="xl"
        pt={10}
        pb={20}
        px={{ base: 6, md: 16 }}
        textAlign="center"
        maxW="container.2xl"
        w="100%"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        cursor="pointer"
        role="button"
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.995 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <HStack justify="center" spacing={3}>
          <Image
            src="/tickets-paystack.png"
            alt="Paystack logo"
            boxSize={{ base: "35px", md: "55px" }}
          />
          <MotionText
            fontWeight="bold"
            fontSize={{ base: "3xl", md: "7xl" }}
            color="textGreen"
            variants={fadeUp}
          >
            Pay with Paystack
          </MotionText>
        </HStack>

        <Text
          mt={2}
          color="textGreen"
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="medium"
          letterSpacing="wide"
        >
          CARDS, BANK TRANSFER, USSD, MOBILE MONEY
        </Text>
      </MotionBox>

      {/* Secured by Paystack Bar */}
      <MotionBox
        bg="boxCream"
        borderRadius="3xl"
        py={5}
        px={{ base: 6, md: 16 }}
        mt={10}
        maxW="container.2xl"
        w="100%"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
        <HStack justify="space-between" flexWrap="wrap" gap={4}>
          <HStack>
            <Icon as={FiLock} color="textGreen" boxSize={6} />
            <Text
              color="textGreen"
              fontWeight="semibold"
              fontFamily="heading"
              fontSize={{ base: "xl", md: "2xl" }}
              ps={5}
            >
              Secured by Paystack
            </Text>
          </HStack>

          <Image src="tickets-visa-mc-verve2.png" />
          {/* <HStack spacing={3}>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                            alt="Visa"
                            boxSize={{ base: "25px", md: "30px" }}
                        />
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.png"
                            alt="Mastercard"
                            boxSize={{ base: "25px", md: "30px" }}
                        />
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Verve_logo.png"
                            alt="Verve"
                            boxSize={{ base: "25px", md: "30px" }}
                        />
                    </HStack> */}
        </HStack>
      </MotionBox>
    </VStack>
  );
}

export default TicketsPaystack;
