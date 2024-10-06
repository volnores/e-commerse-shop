import { HStack, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

import { menu } from "./NavArrayMenu/NavArrayMenu.js";
import MobileNav from "./MobileNavigation/MobileNav.jsx";

const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack
      w={"full"}
      spacing={0}
      position="sticky"
      top="0"
      zIndex={1}
      bg={"white"}
    >
      <HStack
        w={"full"}
        height={70}
        alignItems={"center"}
        p={2}
        justifyContent={"space-between"}
        borderBottomWidth={1}
      >
        <LeftContent menu={menu} onToggle={onToggle} />
        <RightContent />
      </HStack>
      <MobileNav menu={menu} isOpen={isOpen} />
    </VStack>
  );
};

export default Navigation;
