import { Box, Spinner } from "@chakra-ui/react";

const FullPageLoader = () => {
  return (
    <Box
      w="100vw"
      h="70vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    //   bg="boxCream"
    >
      <Spinner
        thickness="5px"
        speed="0.7s"
        emptyColor="gray.200"
        color="boxGreen.500"
        size="xl"
      />
    </Box>
  );
};

export default FullPageLoader;


// components/FullPageLoader.jsx
// import { Box, Spinner } from "@chakra-ui/react";

// const FullPageLoader = () => {
//   return (
//     <Box
//       position="fixed"
//       top={0}
//       left={0}
//       w="100vw"
//       h="100vh"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       bg="rgba(255, 248, 225, 0.85)" // semi-transparent boxCream
//       zIndex={9999} // ensure it's above everything
//     >
//       <Spinner
//         thickness="5px"
//         speed="0.7s"
//         emptyColor="gray.200"
//         color="boxGreen.500"
//         size="xl"
//       />
//     </Box>
//   );
// };

// export default FullPageLoader;
