import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HStack, IconButton, Link } from "@chakra-ui/react";

function SocialLinks() {
  const socials = [
    { icon: FaFacebook, label: "Facebook", href: "https://facebook.com" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
    { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
    { icon: FaTiktok, label: "TikTok", href: "https://tiktok.com" },
  ];

  return (
    <HStack spacing={2}>
      {socials.map(({ icon: Icon, label, href }) => (
        <Link key={label} href={href} isExternal>
          <IconButton
            icon={<Icon />}
            aria-label={label}
            variant="ghost"
            color="white"
            fontSize="20px"
            _hover={{ bg: "green.400" }}
          />
        </Link>
      ))}
    </HStack>
  );
}

export default SocialLinks;
