import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "../molecules/AuthButtons";
import SearchInput from "../molecules/SearchInput";
import Usermenu from "../molecules/UserMenu";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" p="6px 12px">
      <Flex align="center">
        <Image src="/images/logo.png" height="80px" />
      </Flex>
      <SearchInput />
      <AuthButtons />
      <Usermenu />
    </Flex>
  );
};
export default Navbar;
