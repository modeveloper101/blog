import React from "react";
import HeroSection from "./HeroSection";
import RecentPosts from "../../features/posts/RecentPosts";
import Featured from "./Featured";
import UsersSection from "./UsersSection";



const HomePage = () => {
  return (
    <>
      <HeroSection />
      <RecentPosts />
      <Featured />
      <UsersSection />
    </>
  );
};

export default HomePage;
