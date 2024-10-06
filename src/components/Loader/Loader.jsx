import { Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack mt={6}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text fontSize={28} fontWeight={800}>
        Loading...
      </Text>
    </VStack>
  );
};

export default Loader;
