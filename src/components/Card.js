import React from "react";
import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white"
      padding={4}
      borderRadius="md"
      boxShadow="md"
      spacing={4}
    >
      <Image src={imageSrc} alt={title} maxH="200px" objectFit="cover" />

      <Heading as="h2" fontSize="xl">
        {title}
      </Heading>

      <Text fontSize="md">{description}</Text>

      <Link href="#" color="blue.500" _hover={{ color: "blue.700" }}>
        Learn More{" "}
        <FontAwesomeIcon icon={faArrowRight} size="1x" style={{ marginLeft: "4px" }} />
      </Link>
    </VStack>
  );
};

export default Card;
