import type { NextPage } from "next";
import CreatePostLink from "../components/molecules/CreatePostLink";
import Header from "../components/organisms/Header";
import PageContent from "../components/organisms/PageContent";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <PageContent />
    </>
  );
};

export default Home;
