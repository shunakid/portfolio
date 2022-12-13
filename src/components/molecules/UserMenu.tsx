import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Icon,
  MenuDivider,
} from "@chakra-ui/react";
import React from "react";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineLogin } from "react-icons/md";

const Usermenu: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius="4px"
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex alignItems="center">
          <Flex alignItems="center">
            <Icon fontSize={24} mr={1} color="gray.400" as={VscAccount} />
          </Flex>
          <ChevronDownIcon color="gray.500" />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem
          fontSize="10pt"
          fontWeight={700}
          _hover={{ bg: "blue.500", color: "white" }}
        >
          <Flex alignItems="center">
            <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
            Log In / Sign Up
          </Flex>
        </MenuItem>
        <MenuDivider />
      </MenuList>
    </Menu>
  );
};
export default Usermenu;
