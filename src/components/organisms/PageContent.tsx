import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import CreatePostLink from "../molecules/CreatePostLink";

const PageContent: React.FC = () => {
  return (
    <Flex justify="center" p="16px 0px">
      <Flex width="95%" justify="center" maxWidth="860px">
        <Flex
          direction="column"
          width={{ base: "100%", md: "65%" }}
          mr={{ base: 0, md: 6 }}
        >
          <CreatePostLink />
        </Flex>
        <Box
          display={{ base: "none", md: "flex" }}
          flexDirection="column"
          flexGrow={1}
        ></Box>
      </Flex>
    </Flex>
  );
};

export default PageContent;
