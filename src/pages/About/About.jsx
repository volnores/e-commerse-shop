import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import about from "../../../public/about.jpg";

const About = () => {
  return (
    <div>
      <Box textAlign={"center"}>
        <Heading mt={6}>WELCOME TO CUSTOM STORE!</Heading>
        <Text mt={6}>
          We specialize in a variety of products, from clothing and digital
          products to jewelry.
        </Text>
        <Flex justifyContent={"center"}>
          <Image mt={6} height={500} src={about} alt="shop image" />
        </Flex>
      </Box>
    </div>
  );
};

export default About;
