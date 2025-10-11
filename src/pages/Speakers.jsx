import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import OurHeading from "../ui/OurHeading";
import Speaker from "../ui/Speaker";

const speakers = [
  {
    name: "Mark Angel",
    born: "(Born 27 May 1991)",
    img: "/speaker1.png",
    details: [
      {
        title: "Origins & Education",
        text: "Born in Port Harcourt, Rivers State, with family roots in Imo State. He initially studied medicine at Obafemi Awolowo University but left for family reasons. Later, he studied cinematography in India before gaining experience in Nigerian theater and film Wikipedia",
      },
      {
        title: "Comedy Career",
        text: "Started his independent filmmaking in 2013 under Mechanic Pictures and launched Mark Angel Comedy, featuring relatable skits often starring his niece Emmanuella Samuel and Aunty Success Wikipediacomedyhub.net. His YouTube channel was the first African comedy channel to hit 1 million subscribers in 2017 Wikipedia. ",
      },
      {
        title: "Achievements",
        text: "2.46 billion views Wikipedia. He’s received multiple YouTube Creator Awards and inspired many up-and-coming African comedians comedyhub.net",
      },
    ],
  },
  {
    name: "Sydney Talker",
    born: "(Sydney Egere Talker)",
    img: "/speaker2.png",
    details: [
      {
        title: "Early Life & Education",
        text: "Born on 26 January 1996 in Delta State and educated in Benin City (University of Benin – Computer Science) Wikipedia.",
      },
      {
        title: "Comedy & Rise to Fame",
        text: 'Began uploading comedy skits in 2016. His skit "The Poor Power Supply" gained rapid attention, earning him nicknames like "Mr. Bean of Nigeria" and "Towel Guy" WikipediaDNB Stories Africa.',
      },
      {
        title: "Other Ventures Founded",
        text: "Neville Records in January 2022 and signed artist Khaid Wikipedia. Starred in the Nollywood musical film LOUD (2020) and was nominated for the 25 Under 25 award by SME100 Africa Wikipedia.",
      },
    ],
  },
  {
    name: "Tywse",
    born: "(Ereme Abraham)",
    img: "/speaker3.png",
    details: [
      {
        title: "Background & Education",
        text: "Born on 28 July 1992, originally from Edo State, raised in Ibadan. He briefly studied law in Nigeria before focusing entirely on comedy WikipediaTheCityCeleb. ",
      },
      {
        title: "Comedy Career",
        text: "Active since around 2015–2016, Twyse is known for playing multiple characters like Daddy Tobi, Mummy Tobi, Grandma, Tobi, and Sade—often in the same sketch—delivering family-style comedy that resonates deeply with audiences.",
      },
      {
        title: "Achievements",
        text: "Created Twyse and Family and produced over 100 skits newsreportage.com.ng. He’s also a singer, with several music releases, including an EP titled The Trash EP (2018) and music videos like “Give Me a Sign” (2019) Buzz Nigeria.",
      },
    ],
  },
  {
    name: "Craze Clown",
    born: "(Emmanuel Ogonna Iwueke) aka “Papa Ade",
    img: "/speaker4.png",
    details: [
      {
        title: "Early Life & Education",
        text: "Born on 24 December 1991, Emmanuel hails from Imo State (father’s side) and Edo State (mother’s side). He studied medicine, earning his degree from Kharkiv National Medical University in Ukraine in 2017 manly.ngNewsWire NGRchichinwaafricablog.blogspot.com",
      },
      {
        title: "Comedy Beginnings & Persona",
        text: 'Began creating short skits around 2009/2010, especially famous for his character "Papa Ade"—the strict Nigerian father with explosive reactions and the memorable line “Ade! Ade!” manly.ngNewsWire NGR.',
      },
      {
        title: "Career Development & Business Moves",
        text: "Has hosted comedy and music events, created the production company Craze Clown Production and runs House of Craze (YouTube series). He's collaborated with big names like Taaooma, OG Tega, Falz, and Mr Eazi.",
      },
    ],
  },
];

function Speakers() {
  return (
    <Box my={10} mx={{ base: 4, md: 5 }}>
      <OurHeading isAnimate alignCenter>
        <Box textAlign="center" lineHeight="base">
          KEYNOTE <br />
          SPEAKERS
        </Box>
      </OurHeading>

      <Flex mt={10} gap={{ base: 8, md: 0 }} wrap="wrap" justify="center" color="textGreen">
        <Image
          src="/logo.png"
          alt="Naija Cre8 Logo"
          position="absolute"
          left={{ base: "-10%", md: "5%" }}
          top={{ base: "47%", md: "50%" }}
          transform="translateY(-50%)"
          w={{ base: "225px", md: "310px" }}
          zIndex={0}
        />
        <Image
          src="/logo.png"
          alt="Naijacre8 logo"
          position="absolute"
          right={{ base: "-10%", md: "5%" }}
          top={{ base: "47%", md: "50%" }}
          transform="translateY(-50%)"
          w={{ base: "225px", md: "310px" }}
          zIndex={0}
        />

        {speakers.slice(0, 2).map((speaker, index) => (
          <Speaker key={index} speaker={speaker} />
        ))}
      </Flex>
      <Flex
        mt={10}
        mb={20}
        wrap="wrap"
        justify="center"
        color="textGreen"
        gap={{ base: 8, md: 0 }}
      >
        {speakers.slice(2, 4).map((speaker, index) => (
          <Speaker key={index} speaker={speaker} />
        ))}
      </Flex>
      <Box
        maxW="5xl"
        mx={{ base: 0, md: 20 }}
        backgroundColor="boxGreen"
        px={{ base: 3, md: 5 }}
        // py={4}
        py={8}
        rounded="3xl"
      >
        <Heading
          fontFamily="body"
          textAlign="center"
          color="hoverLinkGreen"
          fontWeight="semibold"
        >
          Other Speakers
        </Heading>
        <Box rounded="2xl" fontSize="xl">
          <Flex wrap="wrap" justify="center" mt={2}>
            <Box p={3} color="textWhite" flex="1 1 300px">
              Representative from Youtube Nigeria
            </Box>
            <Box p={3} color="textWhite" flex="1 1 300px">
              Representative from Tiktok Nigeria
            </Box>
          </Flex>
          <Flex wrap="wrap" justify="center">
            <Box p={3} color="textWhite" flex="1 1 300px">
              Representative from Meta Nigeria
            </Box>
            <Box p={3} color="textWhite" flex="1 1 300px">
              The Minister of Youth
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Speakers;
