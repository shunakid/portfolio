import React from "react";
import { Flex, Stack, Button, Image } from "@chakra-ui/react";

const ImageUpload: React.FC = () => {
  return (
    <Flex direction="column" justify="center" align="center" width="100%">
      <>
        <Image maxWidth="400px" maxHeight="400px" />
        <Stack direction="row" mt={4}>
          <Button height="28px">Back to Post</Button>
          <Button variant="outline" height="28px">
            戻る（仮）
          </Button>
        </Stack>
      </>
      <Flex
        justify="center"
        align="center"
        p={20}
        border="1px dashed"
        borderColor="gray.200"
        borderRadius={4}
        width="100%"
      >
        <Button variant="outline" height="28px">
          画像のアップロード（仮）
        </Button>
        <input
          id="file-upload"
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          hidden
        />
      </Flex>
    </Flex>
  );
};
export default ImageUpload;
