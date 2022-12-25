import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <Flex direction="column" width="100%" height="146px">
      <Box height="50%" bg="blue.400" />
      <Flex justifyContent="center" bg="white" height="50%">
        <Flex width="95%" maxWidth="860px">
          <Flex padding="10px 16px">
            <Flex direction="column" mr={6}>
              <Text fontWeight={800} fontSize="16pt"></Text>
              <Text fontWeight={600} fontSize="10pt" color="gray.400"></Text>
            </Flex>
            <Flex>
              <Button height="30px" pr={6} pl={6}></Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
