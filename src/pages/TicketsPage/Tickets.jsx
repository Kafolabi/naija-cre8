import Register from "../HomePage/Register";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import TicketsBooking from "./TicketsBooking";
import TicketsPaystack from "./TicketsPaystack";

const MotionBox = motion(Box);

function Tickets() {
  return (
    <MotionBox mt={14} mb={20}>
      <Register />
      <TicketsBooking />
      <TicketsPaystack />
    </MotionBox>
  );
}

export default Tickets;
