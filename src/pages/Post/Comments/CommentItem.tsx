import React from "react";
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FaReddit } from "react-icons/fa";
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";

const CommentItem: React.FC = () => {
  return (
    <Flex>
      <Box mr={2}>
        <Icon as={FaReddit} fontSize={30} color="gray.300" />
      </Box>
      <Stack spacing={1}>
        <Stack direction="row" align="center" spacing={2} fontSize="8pt">
          <Text
            fontWeight={700}
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
          >
            コメントのタイトル（仮）
          </Text>
          <Text color="gray.600"></Text>
        </Stack>
        <Text fontSize="10pt">コメントのテキスト（仮）</Text>
        <Stack
          direction="row"
          align="center"
          cursor="pointer"
          fontWeight={600}
          color="gray.500"
        >
          <Icon as={IoArrowUpCircleOutline} />
          <Icon as={IoArrowDownCircleOutline} />
          <>
            <Text fontSize="9pt" _hover={{ color: "blue.500" }}>
              コメントの編集（仮）
            </Text>
            <Text fontSize="9pt" _hover={{ color: "blue.500" }}>
              コメントの削除（仮）
            </Text>
          </>
        </Stack>
      </Stack>
    </Flex>
  );
};
export default CommentItem;
