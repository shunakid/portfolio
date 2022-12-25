import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const TabItem: React.FC = () => {
  return (
    <Flex
      justify="center"
      align="center"
      flexGrow={1}
      p="14px 0px"
      cursor="pointer"
      fontWeight={700}
      borderRightColor="gray.200"
      _hover={{ bg: "gray.50" }}
    >
      <Flex align="center" height="20px" mr={2}></Flex>
      <Text fontSize="10pt"></Text>
    </Flex>
  );
};
export default TabItem;
