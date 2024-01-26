import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center">
    <section className="min-h-[100vh] w-[1350px] flex flex-col items-center justify-start px-12">
      <h2 className="font-[700] text-7xl mb-12">Latest</h2>
      <div className="w-full h-[50vh] bg-red-100 relative">
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1583778477928-531a25a0baf2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero image" />
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
