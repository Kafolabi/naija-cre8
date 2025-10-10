import { Box, Flex } from "@chakra-ui/react";
import OurHeading from "../../ui/OurHeading";
import Characteristic from "../../ui/Characteristic";

function Characteristics() {
  const features = [
    {
      id: "01",
      title: "CUTTING-EDGE INSIGHTS",
      desc: "Gain firsthand knowledge from top creators and pioneers shaping the industry.",
    },
    {
      id: "02",
      title: "HANDS-ON LEARNING",
      desc: "Participate in interactive workshops, live demos, and deep-dive sessions to sharpen your skills.",
    },
    {
      id: "03",
      title: "EXCLUSIVE NETWORKING",
      desc: "Connect with industry leaders, top creators and fellow professionals at curated networking events.",
    },
    {
      id: "04",
      title: "INNOVATION SHOWCASE",
      desc: "Explore groundbreaking creative solutions, from industry giants to help redefining the future.",
    },
  ];

  return (
    <Box mb={12}>
      <OurHeading isAnimate="true">
        <>
          WHY ATTEND?
        </>
        <>
          Discover why Naija Cre8 2025 is <br /> the must-attend event for creatives
        </>
      </OurHeading>

      <Flex
        color="boxGreen"
        my={{ base: "0rem", md: "6rem" }}
        wrap="wrap"
        gap={12}
        justify="center"
        align="stretch" // ensures equal height per row
      >
        {features.map((f) => (
          <Box
            key={f.id}
            flex={{ base: "1 1 100%", md: "1 1 calc(50% - 24px)" }}
            display="flex"   // ✅ make the box itself a flex container
          >
            <Characteristic {...f} flex="1" /> {/* ✅ let card fill height */}
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default Characteristics;

