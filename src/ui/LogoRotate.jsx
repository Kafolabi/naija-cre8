import { Box, Image, keyframes } from "@chakra-ui/react";
import logoSrc from "/logo-rotate2.png"; // replace with your logo path

// Define rotation animation
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

function LogoRotate() {
  return (
    <Box
      mt={7}
      mx="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden" // prevents extra space from rotation
    >
      <Image
        src={logoSrc}
        alt="Logo"
        boxSize="100%" // fills parent box
        objectFit="contain"
        className="mt"
        animation={`${spin} 10s linear infinite`} // smooth rotation
      />
    </Box>
  );
}

export default LogoRotate;
