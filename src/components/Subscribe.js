import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="relative w-[90%] md:w-[30%] text-center">
        <input
          className="font-[300] text-base md:text-lg py-2 px-3 w-full border rounded-[12px]"
          placeholder="Enter your email"
        />
        <button className="font-[300] absolute bg-black text-white border rounded-[10px] text-base md:text-lg py-1 px-3" style={{top: '50%', right: '2px', transform: 'translate(-2%, -50%)'}}>Subscribe</button>
      </div>

     
    </>
  );
};

export default Subscribe;
