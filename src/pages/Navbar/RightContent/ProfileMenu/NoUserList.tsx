import React from "react";
import { MenuItem, Flex, Icon } from "@chakra-ui/react";
import { MdOutlineLogin } from "react-icons/md";

const NoUserList: React.FC = () => {
  return (
    <>
      <MenuItem
        fontSize="10pt"
        fontWeight={700}
        _hover={{ bg: "blue.500", color: "white" }}
      >
        <Flex alignItems="center">
          <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
          ログイン / サインアップ （仮）
        </Flex>
      </MenuItem>
    </>
  );
};
export default NoUserList;
