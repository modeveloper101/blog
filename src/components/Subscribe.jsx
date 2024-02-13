import React from "react";

const Subscribe = ({ children }) => {
  return (
    <>
      <div className="relative w-[90%] md:w-[60%] lg:w-[20%] text-center">
        <input
          className="font-[300] text-base md:text-lg py-2 px-3 w-full border border-[#292929] rounded-[12px] bg-[#292929] placeholder:text-[#6A6A6A]"
          placeholder="Enter your email address"
        />
        <button
          className="font-[500] absolute bg-white text-black rounded-[10px] text-base md:text-base py-1.5 px-3"
          style={{
            top: "50%",
            right: "2px",
            transform: "translate(-2%, -50%)",
          }}
        >
          {children}
        </button>
      </div>
    </>
  );
};

export default Subscribe;
