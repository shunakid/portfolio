import React from "react";
import { MenuItem, Flex, Icon, Text, Box } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";

const MyCommunities: React.FC = () => {
  return (
    <Box mt={3} mb={3}>
      <Text
        pl={3}
        mb={1}
        fontSize="7pt"
        fontWeight={500}
        color="gray.500"
      ></Text>
      <MenuItem width="100%" fontSize="10pt" _hover={{ bg: "gray.100" }}>
        <Flex alignItems="center">
          <Icon fontSize={20} mr={2} as={GrAdd} />
        </Flex>
      </MenuItem>
    </Box>
  );
};
export default MyCommunities;
