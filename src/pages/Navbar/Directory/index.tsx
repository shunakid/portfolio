import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Image,
} from "@chakra-ui/react";

const Directory: React.FC = () => {
  return (
    <Menu>
      <>
        <MenuButton
          cursor="pointer"
          padding="0px 6px"
          borderRadius="4px"
          _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
          mr={2}
          ml={{ base: 0, md: 2 }}
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            width={{ base: "auto", lg: "200px" }}
          >
            <Flex alignItems="center">
              <>
                <Image borderRadius="full" boxSize="24px" mr={2} />
                <Icon fontSize={24} mr={{ base: 1, md: 2 }} />
                <Box
                  display={{ base: "none", lg: "flex" }}
                  flexDirection="column"
                  fontSize="10pt"
                >
                  <Text fontWeight={600}></Text>
                </Box>
              </>
            </Flex>
            <ChevronDownIcon color="gray.500" />
          </Flex>
        </MenuButton>
        <MenuList
          maxHeight="300px"
          overflow="scroll"
          overflowX="hidden"
        ></MenuList>
      </>
    </Menu>
  );
};
export default Directory;
