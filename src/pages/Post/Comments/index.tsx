import React from "react";
import {
  Box,
  Flex,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";

const Comments: React.FC = () => {
  return (
    <Box bg="white" p={2} borderRadius="0px 0px 4px 4px">
      <Flex
        direction="column"
        pl={10}
        pr={4}
        mb={6}
        fontSize="10pt"
        width="100%"
      ></Flex>
      <Stack spacing={6} p={2}>
        <>
          <Box padding="6" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={2} spacing="4" />
          </Box>
        </>
        <>
          <></>
          <Flex
            direction="column"
            justify="center"
            align="center"
            borderTop="1px solid"
            borderColor="gray.100"
            p={20}
          >
            <Text fontWeight={700} opacity={0.3}></Text>
          </Flex>
        </>
      </Stack>
    </Box>
  );
};
export default Comments;
