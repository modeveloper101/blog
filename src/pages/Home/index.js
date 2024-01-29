import React from "react";
import HeroSection from "./HeroSection";
import PostsList from "../../features/posts/PostsList";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PostsList />
    </>
  );
};

export default HomePage;
