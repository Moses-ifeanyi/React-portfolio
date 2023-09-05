import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:mosesifeanyi19@gmail.com",
    name: "Email",
  },
  {
    icon: faGithub,
    url: "https://github.com/Moses-ifeanyi",
    name: "GitHub",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ifeanyi-moses-228572176/",
    name: "LinkedIn",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    name: "Medium",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    name: "Stack Overflow",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Create a ref for the Header component
  const headerRef = useRef(null);

  // Log a message when the component mounts
  useEffect(() => {
    console.log("Header component mounted");
  }, []);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  isExternal
                  display="inline-block"
                  fontSize="20px"
                  _hover={{
                    textDecoration: "none",
                  }}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </Link>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact Me section */}
              <Link
                onClick={handleClick("projects")}
                href="#projects-section"
                cursor="pointer"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Projects
              </Link>
              <Link
                onClick={handleClick("contactme")}
                href="#contactme-section"
                cursor="pointer"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Contact Me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
