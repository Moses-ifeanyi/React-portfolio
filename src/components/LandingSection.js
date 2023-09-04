import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Moses!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    {/* Avatar */}
    <Avatar size="2xl" name="Moses" src="/path-to-your-avatar-image.jpg" />

    {/* VStack for text content */}
    <VStack spacing={4} mt={4} textAlign="center" color="white">
      {/* Greeting */}
      <Heading as="h1" size="xl">
        {greeting}
      </Heading>

      {/* Bio 1 */}
      <Heading as="h2" size="md">
        {bio1}
      </Heading>

      {/* Bio 2 */}
      <Heading as="h2" size="md">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
