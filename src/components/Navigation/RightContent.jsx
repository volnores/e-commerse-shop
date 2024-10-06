import { FaBell, FaShoppingBag } from "react-icons/fa";
import { IconButton, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const RightContent = () => {
  return (
    <Flex alignItems={"center"} gap={2}>
      <IconButton
        aria-label="notification"
        icon={<FaBell />}
        variant={"ghost"}
        colorScheme="gray"
        rounded={"full"}
        size={"md"}
      />

      <IconButton
        aria-label="cart"
        icon={<FaShoppingBag />}
        variant={"ghost"}
        colorScheme="gray"
        rounded={"full"}
        as={Link}
        to={"/cart"}
        size={"md"}
      />
    </Flex>
  );
};

export default RightContent;
