import React from "react";
import Subscribe from "../../components/Subscribe";

const HeroSection = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <section className="h-auto w-full md:w-full lg:w-[1350px] flex flex-col items-center justify-center py-[3rem]">
        <h2 className="font-[400] text-7xl md:text-8xl mb-2 text-center leading-[0.8]">
          Inside
          <br className="lg:hidden" /> <span className="butler-font">noev</span>
          {/* <span>
            <div
              className="px-12 py-6 md:px-[112px] md:py-10 rounded-full bg-red-100 inline-block"
              style={{
                backgroundImage: `url("https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </span> */}
          .
        </h2>
        <p className="font-[300] text-lg px-5 md:text-2xl text-center mb-8">
          Subscribe to learn more about new trends, events, articles, and
          updates.
        </p>
        <Subscribe>Subscribe</Subscribe>
      </section>
    </div>
  );
};

export default HeroSection;
