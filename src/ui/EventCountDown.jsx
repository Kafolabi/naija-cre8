import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { getTimeLeft } from "../utils/helpers";

function EventCountDown() {
  const targetDate = useMemo(() => new Date("2026-02-14T00:00:00"), []);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 60000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const fs = { base: "4.5rem", md: "8rem", lg: "10rem" };

  return (
    <Box
      py={12}
      ps={{ base: "2rem", md: "6rem", lg: "8rem" }}
      pe={8}
      color="textGreen"
      bg="boxCream"
      borderRadius="2xl"
      position="relative"
      overflow="hidden"
    >
      <Image
        src="/countdown-image.png" // adjust path
        alt="Decoration"
        position="absolute"
        bottom={0}
        right={0}
        boxSize={{ base: "150px", md: "220px", lg: "280px" }}
        opacity={0.5} // faint effect
        pointerEvents="none" // doesn't block clicks
      />

      <Text mb={4}>Event Countdown</Text>

      <Flex>
        {/* Grid: 5 columns (num, colon, num, colon, num) and 2 rows (numbers/colons, labels) */}
        <Box
          display="grid"
          gridTemplateColumns="auto auto auto auto auto"
          gridTemplateRows="auto auto"
          columnGap={{ base: 2, md: 4 }}
          justifyItems="center"
          alignItems="center"
        >
          {/* Row 1: numbers + colons */}
          <Text gridColumn="1" gridRow="1" fontSize={fs} lineHeight={1}>
            {String(timeLeft.days).padStart(2, "0")}
          </Text>

          <Text
            gridColumn="2"
            gridRow="1"
            fontSize={fs}
            lineHeight={1}
            alignSelf="center"
          >
            :
          </Text>

          <Text gridColumn="3" gridRow="1" fontSize={fs} lineHeight={1}>
            {String(timeLeft.hours).padStart(2, "0")}
          </Text>

          <Text
            gridColumn="4"
            gridRow="1"
            fontSize={fs}
            lineHeight={1}
            alignSelf="center"
          >
            :
          </Text>

          <Text gridColumn="5" gridRow="1" fontSize={fs} lineHeight={1}>
            {String(timeLeft.minutes).padStart(2, "0")}
          </Text>

          {/* Row 2: labels under each number (colons have blank cells) */}
          <Text gridColumn="1" gridRow="2" fontSize="sm" mt={2}>
            DAYS
          </Text>
          <Text gridColumn="3" gridRow="2" fontSize="sm" mt={2}>
            HOURS
          </Text>
          <Text gridColumn="5" gridRow="2" fontSize="sm" mt={2}>
            MINUTES
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default EventCountDown;
