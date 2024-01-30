import React from "react";
import HeroSection from "./HeroSection";
import RecentPosts from "../../features/posts/RecentPosts";
import UsersSection from "./UsersSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <RecentPosts />
      <UsersSection />
    </>
  );
};

export default HomePage;
