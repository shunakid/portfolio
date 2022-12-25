import { Flex } from "@chakra-ui/react";
import React from "react";

const ActionIcon: React.FC = () => {
  return (
    <Flex
      mr={1.5}
      ml={1.5}
      padding={1}
      cursor="pointer"
      _hover={{ bg: "gray.200" }}
    ></Flex>
  );
};
export default ActionIcon;
