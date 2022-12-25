import React from "react";
import { Flex, Textarea, Button, Text } from "@chakra-ui/react";
import AuthButtons from "../../Navbar/RightContent/AuthButtons";

const CommentInput: React.FC = () => {
  return (
    <Flex direction="column" position="relative">
      <>
        <Textarea
          fontSize="10pt"
          borderRadius={4}
          minHeight="160px"
          pb={10}
          _placeholder={{ color: "gray.500" }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid black",
          }}
        />
        <Flex
          position="absolute"
          left="1px"
          right={0.1}
          bottom="1px"
          justify="flex-end"
          bg="gray.100"
          p="6px 8px"
          borderRadius="0px 0px 4px 4px"
        >
          <Button height="26px">コメント（仮）</Button>
        </Flex>
      </>
      <Flex
        align="center"
        justify="space-between"
        borderRadius={2}
        border="1px solid"
        borderColor="gray.100"
        p={4}
      >
        <Text fontWeight={600}>
          コメントを残すにはログインまたはサインアップ（仮）
        </Text>
        <AuthButtons />
      </Flex>
    </Flex>
  );
};
export default CommentInput;
