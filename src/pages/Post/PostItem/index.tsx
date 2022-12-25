import React from "react";
import { Flex, Icon, Image, Skeleton, Stack, Text } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import { IoArrowRedoOutline, IoBookmarkOutline } from "react-icons/io5";

const PostItem: React.FC = () => {
  return (
    <Flex border="1px solid" bg="white">
      <Flex direction="column" align="center" p={2} width="40px">
        <Icon fontSize={22} cursor="pointer" />
        <Text fontSize="9pt" fontWeight={600}></Text>
        <Icon fontSize={22} cursor="pointer" />
      </Flex>
      <Flex direction="column" width="100%">
        <Stack spacing={1} p="10px 10px">
          <Stack direction="row" spacing={0.6} align="center" fontSize="9pt">
            <>
              <Image borderRadius="full" boxSize="18px" mr={2} />
              <Icon as={FaReddit} fontSize={18} mr={1} color="blue.500" />
              <Text
                fontWeight={700}
                _hover={{ textDecoration: "underline" }}
              ></Text>
              <Icon as={BsDot} color="gray.500" fontSize={8} />
            </>
            <Text color="gray.500"></Text>
          </Stack>
          <Text fontSize="12pt" fontWeight={600}>
            投稿のタイトル（仮）
          </Text>
          <Text fontSize="10pt">投稿の内容（仮）</Text>
          <Flex justify="center" align="center" p={2}>
            <Skeleton height="200px" width="100%" borderRadius={4} />
            <Image maxHeight="460px" />
          </Flex>
        </Stack>
        <Flex ml={1} mb={0.5} color="gray.500" fontWeight={600}>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={BsChat} mr={2} />
            <Text fontSize="9pt">投稿に対するコメント（仮）</Text>
          </Flex>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={IoArrowRedoOutline} mr={2} />
            <Text fontSize="9pt">シェア（仮）</Text>
          </Flex>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={IoBookmarkOutline} mr={2} />
            <Text fontSize="9pt">保存（仮）</Text>
          </Flex>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <>
              <Icon as={AiOutlineDelete} mr={2} />
              <Text fontSize="9pt">削除（仮）</Text>
            </>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PostItem;
