import React from "react";
import { Box, Flex, Icon, MenuItem, Text } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";

const Communities: React.FC = () => {
  return (
    <>
      <Box mt={3} mb={4}>
        <Text
          pl={3}
          mb={1}
          fontSize="7pt"
          fontWeight={500}
          color="gray.500"
        ></Text>
      </Box>
      <Box mt={3} mb={4}>
        <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
          マイスレッド（仮）
        </Text>
        <MenuItem width="100%" fontSize="10pt" _hover={{ bg: "gray.100" }}>
          <Flex alignItems="center">
            <Icon fontSize={20} mr={2} as={GrAdd} />
            スレッドを作る（仮）
          </Flex>
        </MenuItem>
      </Box>
    </>
  );
};

export default Communities;
