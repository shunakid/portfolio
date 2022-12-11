import { Button } from "@chakra-ui/react";
import React from "react";

const SignupButton: React.FC = () => {
  return (
    <>
      <Button
        variant="solid"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
      >
        Sign Up
      </Button>
    </>
  );
};
export default SignupButton;
