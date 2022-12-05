import { Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="60px" p="6px 12px">
      <Flex align="center">
        <Image src="/images/logo.png" height="80px" />
      </Flex>
    </Flex>
  );
};
export default Navbar;
