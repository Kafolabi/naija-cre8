import { Box } from "@chakra-ui/react";
import OurHeading from "../../ui/OurHeading";
import EventCountDown from "../../ui/EventCountDown";

function Register() {
  return (
    <Box mb={12}>
      <OurHeading isAnimate="true">
        <>
          REGISTER <br /> NOW
        </>
        <>
          Secure your spot at Naija Cre8 <br /> 2025 and join the future of{" "}
          <br /> creatives
        </>
      </OurHeading>
      <EventCountDown />
    </Box>
  );
}

export default Register;
