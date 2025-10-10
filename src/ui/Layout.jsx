import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Container } from "@chakra-ui/react";

function Layout() {
  return (
    <>
      <Navbar />
      <Container maxW="1150px" overflow="hidden">
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
