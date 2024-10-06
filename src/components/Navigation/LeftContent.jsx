import { Flex, Heading, IconButton, List } from "@chakra-ui/react";
import React from "react";

import NavItem from "./NavItem";

import { FaApple, FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftContent = ({ menu, onToggle }) => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} gap={4}>
      <IconButton
        aria-label="menu"
        color={"gray"}
        variant={"ghost"}
        icon={<FaHamburger />}
        rounded={"full"}
        display={{ base: "flex", md: "none" }}
        onClick={onToggle}
      />

      <Heading color={"gray"} fontWeight={"bold"} as={Link} to={"/"}>
        <FaApple />
      </Heading>

      <List gap={2} display={{ base: "none", md: "flex" }}>
        {menu.map((item) => {
          return <NavItem {...item} key={item.id} />;
        })}
      </List>
    </Flex>
  );
};

export default LeftContent;
