import React from "react";
import { Flex, MenuItem } from "@chakra-ui/react";

const MenuListItem: React.FC = () => {
  return (
    <MenuItem width="100%" fontSize="10pt" _hover={{ bg: "gray.100" }}>
      <Flex alignItems="center"></Flex>
    </MenuItem>
  );
};
export default MenuListItem;
