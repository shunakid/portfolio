import React from "react";
import { Stack } from "@chakra-ui/react";
import PostLoader from "./Loader";
import PostItem from "./PostItem";

const Posts: React.FC = () => {
  return (
    <>
      <PostLoader />
      <Stack>
        <PostItem />
      </Stack>
    </>
  );
};
export default Posts;
