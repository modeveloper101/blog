import React from "react";
import HeroSection from "./HeroSection";
import RecentPosts from "../../features/posts/RecentPosts";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <RecentPosts />
    </>
  );
};

export default HomePage;
