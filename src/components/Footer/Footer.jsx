import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <VStack height={"full"} mb={32}>
      <Flex
        w={"full"}
        bg={"blue.500"}
        position="fixed"
        bottom="0"
        zIndex={1}
        h={"80px"}
        mt={16}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text color={"white"}>Copyright © {year} - Shop Commerce INC.</Text>
      </Flex>
    </VStack>
  );
};

export default Footer;
