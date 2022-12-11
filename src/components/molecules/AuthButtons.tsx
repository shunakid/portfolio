import { ButtonGroup, Flex } from "@chakra-ui/react";
import React from "react";
import LoginButton from "../atoms/LogInButton";
import SignupButton from "../atoms/SignUpButton";

const AuthButtons: React.FC = () => {
  return (
    <>
      <Flex justify="center" align="center">
        <ButtonGroup gap="2">
          <LoginButton />
          <SignupButton />
        </ButtonGroup>
      </Flex>
    </>
  );
};
export default AuthButtons;
