import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Agenda as EachAgenda } from "../../ui/Agenda";
import logoSrc from "/logo-rotate2.png";

import OurHeading from "../../ui/OurHeading";

const MotionBox = motion(Box);

function Agenda() {
  return (
    <Box fontFamily="body" my="6rem">
      <OurHeading isAnimate={true}>
        <>AGENDA</>
        <>
          Februrary 14, 2026 | Unilag Indoor <br /> Sport Complex, Lagos, Nigeria.
        </>
      </OurHeading>

      <MotionBox
        bg="boxCream"
        rounded="2xl"
        p={10}
        mt={10}
        position="relative"
        overflow="hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={logoSrc}
          alt="watermark"
          position="absolute"
          right={{ md: "10", base: "2" }}
          top={{ md: "50%", base: "70%" }}
          width={{ md: "50%", base: "100%" }}
          height={{ base: "270px" }}
          pointerEvents="none"
        />

        {/* Agenda items */}
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          {[
            {
              title: "The Charity Game",
              content: (
                <>
                  A fun competitive football charity match.
                  <br /> Popular creators will represent the platforms that made
                  them famous. <br /> All match proceeds go to a youth-focused
                  charity course.
                </>
              ),
            },
            {
              title: "Conference",
              content: (
                <>
                  Panel with Nigeria’s most respected creators and content OGs:{" "}
                  <br />A deep-dive into content growth, monetization, brand
                  storytelling, and industry longevity.
                </>
              ),
            },
            {
              title:
                "The Comment Session (Gen Z Village) Experience + Market + Activations",
              content:
                "A bustling youth village where brands activate, sell, and connect",
            },
            {
              content: (
                <>
                  Open booths for:
                  <List as="ul" styleType="disc" pl={5}>
                    <ListItem>
                      Beauty, tech, fashion, gadgets, lifestyle, banking,
                      fintech
                    </ListItem>
                    <ListItem>
                      Brands like: DJI, Hallyland, Oraimo, Boomplay, etc.
                    </ListItem>
                    <ListItem>
                      Live product demos, games, raffles, and community
                      sessions.
                    </ListItem>
                  </List>
                </>
              ),
            },
            {
              title: "The Algorithm",
              content: "The biggest Gen Z music party in Nigeria",
            },
            {
              content: (
                <>
                  Open booths for:
                  <List as="ul" styleType="disc" pl={5}>
                    <ListItem>
                      Featuring Nigeria’s most viral sounds and top youth
                      artists
                    </ListItem>
                    <ListItem>
                      “Hear the song, meet the artist” — showcasing creators
                      behind viral TikTok hits
                    </ListItem>
                    <ListItem>
                      DJ battles, performance mashups, and immersive stage
                      design
                    </ListItem>
                  </List>
                </>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <EachAgenda title={item.title} isThereList={!!item.content.props}>
                {item.content}
              </EachAgenda>
            </motion.div>
          ))}
        </MotionBox>
      </MotionBox>
    </Box>
  );
}

export default Agenda;
