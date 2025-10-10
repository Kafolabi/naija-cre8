// import { Flex, Heading, Text } from "@chakra-ui/react";

// function Characteristic({ id, title, desc }) {
//   return (
//     <Flex
//       bg="boxCream"
//       borderRadius="2xl"
//       p={10}
//       direction="row"
//       position="relative"
//       overflow="hidden"
//       flex="1"
//       minH="200px"
//     >
//       {/* Title */}
//       <Heading
//         as="h3"
//         fontSize="sm"
//         fontWeight="bold"
//         textTransform="uppercase"
//         mb={3}
//         color="textGreen"
//         zIndex="1"
//       >
//         {title}
//       </Heading>

//       {/* Description */}
//       <Text fontSize="sm" color="textGreen" zIndex="1">
//         {desc}
//       </Text>

//       {/* Gradient Watermark Number */}
//       <Text
//         fontSize="9xl"
//         fontWeight="extrabold"
//         lineHeight="1"
//         position="absolute"
//         bottom="-4"
//         right="4"
//         zIndex="0"
//         bgGradient="linear(to-r, #32cd32, #008000)" // lime green to dark green
//         bgClip="text"
//         opacity={0.7}
//       >
//         {id}
//       </Text>
//     </Flex>
//   );
// }

// export default Characteristic;


///////////////////////////////////////////////////////////////////
import { Flex, Heading, Text } from "@chakra-ui/react";

function Characteristic({ id, title, desc }) {
  return (
    <Flex
      bg="boxCream"
      borderRadius="2xl"
      p={10}
      gap={10}
      direction="row"
      position="relative"
      overflow="hidden"
    >
      {/* Title (50%) */}
      <Heading
        as="h3"
        fontSize="lg"
        fontWeight="bold"
        textTransform="uppercase"
        color="textGreen"
        zIndex="1"
        flex="1"              
        maxW="50%"            
      >
        {title}
      </Heading>

      {/* Description (50%) */}
      <Text
        fontSize="sm"
        color="textGreen"
        zIndex="1"
        flex="1"              // take 50%
        maxW="50%"
        pt={12}
        lineHeight="2rem"
      >
        {desc}
      </Text>

      {/* Gradient Watermark Number */}
      <Text
        fontSize="15rem"
        lineHeight="1"
        position="absolute"
        bottom="-71"
        fontFamily="heading"
        // right="4"
        zIndex="0"
        bgGradient="linear(to-b, activeLinkGreen, #a7dfa7)" // lime green to dark green
        bgClip="text"
        // opacity={0.7}
      >
        {id}
      </Text>
    </Flex>
  );
}

export default Characteristic;
