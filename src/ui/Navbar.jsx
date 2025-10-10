import EachNavLink from "./EachNavLink";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  CloseButton,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Links = ["Home", "Speakers", "Venue", "Sponsors"];

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="1200px">
      <Box color="textWhite" px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box fontWeight="bold" pt={8}>
            NAIJA CRE8
          </Box>

          <HStack
            spacing={8}
            alignItems="center"
            display={{ base: "none", md: "flex" }}
          >
            {Links.map((link) => (
              <EachNavLink key={link} to={`/${link.toLowerCase()}`}>
                {link}
              </EachNavLink>
            ))}
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseButton /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {/* Mobile Nav */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <EachNavLink
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  end={link === "Home"} // ensures Home only matches "/"
                >
                  {link}
                </EachNavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Container>
  );
}

export default Navbar;
