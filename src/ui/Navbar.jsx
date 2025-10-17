// import EachNavLink from "./EachNavLink";

// import {
//   Box,
//   Flex,
//   HStack,
//   IconButton,
//   useDisclosure,
//   Stack,
//   CloseButton,
//   Container,
// } from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";

// const Links = ["Home", "Speakers", "Tickets", "Venue", "Sponsors"];

// function Navbar() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Container maxW="1200px">
//       <Box color="textWhite" px={7}>
//         <Flex h={16} alignItems="center" justifyContent="space-between">
//           <Box fontWeight="bold" pt={8}>
//             NAIJA CRE8
//           </Box>

//           <HStack
//             spacing={2}
//             alignItems="center"
//             display={{ base: "none", md: "flex" }}
//           >
//             {Links.map((link) => (
//               <EachNavLink key={link} to={`/${link.toLowerCase()}`}>
//                 {link}
//               </EachNavLink>
//             ))}
//           </HStack>

//           {/* Mobile Menu Button */}
//           <IconButton
//             size="md"
//             icon={isOpen ? <CloseButton /> : <HamburgerIcon />}
//             aria-label="Open Menu"
//             display={{ md: "none" }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//         </Flex>

//         {/* Mobile Nav */}
//         {isOpen ? (
//           <Box pb={4} display={{ md: "none" }}>
//             <Stack as="nav" spacing={4}>
//               {Links.map((link) => (
//                 <EachNavLink
//                   key={link}
//                   to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
//                   end={link === "Home"} // ensures Home only matches "/"
//                 >
//                   {link}
//                 </EachNavLink>
//               ))}
//             </Stack>
//           </Box>
//         ) : null}
//       </Box>
//     </Container>
//   );
// }

// export default Navbar;

import EachNavLink from "./EachNavLink";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Collapse,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "Speakers", "Tickets", "Venue", "Sponsors"];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="relative" zIndex="overlay" mt={3}>
      <Container maxW="1200px">
        <Box color="textWhite" px={7}>
          <Flex h={16} alignItems="center" justifyContent="space-between">
            {/* Logo / Brand */}
            <Box fontWeight="bold" fontSize="xl" pt={{ base: 0, md: "2.2rem" }}>
              NAIJA CRE8
            </Box>

            {/* Desktop Links */}
            <HStack
              spacing={6}
              alignItems="center"
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <EachNavLink key={link} to={`/${link.toLowerCase()}`}>
                  {link}
                </EachNavLink>
              ))}
            </HStack>

            {/* Mobile Hamburger / Close */}
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Box>
      </Container>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          display={{ md: "none" }}
          position="absolute"
          top="64px" // adjust based on navbar height
          left="0"
          w="100%"
          bg="boxGreen"
          zIndex="overlay"
          px={7}
          py={4}
          color="textWhite"
        >
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <EachNavLink
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                end={link === "Home"}
                onClick={onClose} // close menu on click
              >
                {link}
              </EachNavLink>
            ))}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}
