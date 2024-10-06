import React from "react";
import { Link } from "react-router-dom";
import { ListItem } from "@chakra-ui/react";

const MobileItem = ({ ...item }) => {
  return (
    <ListItem
      display={"block"}
      rounded={"lg"}
      _hover={{ textDecoration: "none", bg: "gray.100" }}
      _active={{ textDecoration: "none", bg: "gray" }}
      px={4}
      py={4}
      as={Link}
      to={item.path}
      fontWeight={"bold"}
    >
      {item.title}
    </ListItem>
  );
};

export default MobileItem;
