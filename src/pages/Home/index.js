import React from "react";
import HeroSection from "./HeroSection";
import RecentPosts from "../../features/posts/RecentPosts";
import Featured from "./Featured";
import UsersSection from "./UsersSection";
import Social from "./Social";



const HomePage = () => {
  return (
    <>
      <HeroSection />
      <RecentPosts />
      <UsersSection />
      <Featured />
      <Social />

    </>
  );
};

export default HomePage;
