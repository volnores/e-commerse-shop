import { Collapse, Link, List, ListItem } from "@chakra-ui/react";
import React from "react";
import MobileItem from "./MobileItem";

const MobileNav = ({ menu, isOpen }) => {
  return (
    <Collapse in={isOpen} animateOpacity style={{ width: "100%" }}>
      <List
        gap={2}
        spacing={2}
        width={"100%"}
        borderWidth={1}
        padding={2}
        bg={"blue.50"}
      >
        {menu.map((item) => {
          return (
            <ListItem w={"full"} key={item.id}>
              <MobileItem {...item} key={item.id} />
            </ListItem>
          );
        })}
      </List>
    </Collapse>
  );
};

export default MobileNav;
