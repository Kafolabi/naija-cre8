
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
  keyframes,
} from "@chakra-ui/react";
import LogoRotate from "../../ui/LogoRotate";

// Text fade-in and slide-up
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Image fade-in and slide-right
const fadeInRight = keyframes`
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
`;

function MainHome() {
  return (
    <>
      <Flex
        bg="boxGreen"
        mt={10}
        p={12}
        rounded="3xl"
        direction={{ base: "column", md: "row" }}
        height="90vh"
      >
        <Box flex="1" mx={{ base: 0, lg: 10 }}>
          <Text color="textWhite" animation={`${fadeInUp} 1s ease`}>
            December 12, 2025
          </Text>
          <Heading
            as="h1"
            size="3xl"
            color="activeLinkGreen"
            letterSpacing="wide"
            lineHeight="short"
            mt={{ md: 7, lg: 12 }}
            animation={`${fadeInUp} 1.2s ease`}
          >
            NAIJA <br /> CRE8
          </Heading>
          <Text
            color="boxCream"
            fontSize="2xl"
            pt={3}
            animation={`${fadeInUp} 1.4s ease`}
          >
            Biggest gathering of Nigerian <br /> creatives
          </Text>
          <ButtonGroup>
            <Button bg="boxCream" my={9} animation={`${fadeInUp} 1.6s ease`}>
              Register now
            </Button>
          </ButtonGroup>
        </Box>

        {/* Image Column */}
        <Box
          flex="1"
          animation={`${fadeInRight} 2s ease`}
          
          mt={{ base: 8, md: 0 }} // spacing on mobile
        >
          <Text color="textWhite" mb={4}>
            Unilag Indoor Sport Complex, Lagos, Nigeria
          </Text>
          <Box display="flex" justifyContent="center" alignItems="center">
            <LogoRotate />
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default MainHome;
