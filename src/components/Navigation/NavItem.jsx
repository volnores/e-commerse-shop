import React from "react";
import { Button, Flex, Heading, List, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavItem = ({ ...item }) => {
  return (
    <ListItem key={item.id}>
      <Button
        as={Link}
        to={item.path}
        color={"gray"}
        variant={"ghost"}
        _hover={{ textDecoration: "none", bg: "gray.100" }}
        _active={{ textDecoration: "none", bg: "gray" }}
      >
        {item.title}
      </Button>
    </ListItem>
  );
};

export default NavItem;
