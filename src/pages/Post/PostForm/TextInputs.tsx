import React from "react";
import { Stack, Input, Textarea, Flex, Button } from "@chakra-ui/react";

const TextInputs: React.FC = () => {
  return (
    <Stack spacing={3} width="100%">
      <Input
        name="title"
        _placeholder={{ color: "gray.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "black",
        }}
        fontSize="10pt"
        borderRadius={4}
        placeholder="Title"
      />
      <Textarea
        name="body"
        fontSize="10pt"
        placeholder="Text (optional)"
        _placeholder={{ color: "gray.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "black",
        }}
        height="100px"
      />
      <Flex justify="flex-end">
        <Button height="34px" padding="0px 30px">
          投稿（仮）
        </Button>
      </Flex>
    </Stack>
  );
};
export default TextInputs;
