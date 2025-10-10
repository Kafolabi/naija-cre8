import { NavLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

function EachNavLink({ to, children }) {
  return (
    <Link
      as={NavLink}
      to={to}
      px={3}
      pt={8}
      rounded="md"
      _hover={{ textDecoration: "none", color: "hoverLinkGreen" }}
      _activeLink={{ color: "activeLinkGreen" }} // <- this works with NavLink
      end // ensures only exact route matches (important for "Home")
    >
      {children}
    </Link>
  );
}

export default EachNavLink