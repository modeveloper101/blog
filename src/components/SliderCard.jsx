import React from "react";

const SliderCard = ({ name, website }) => {
  return (
    <div className="relative w-full h-[350px] border-b border-[#2C2C2C]">
      <div
        className="w-full h-full flex flex-col justify-between relative p-5"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1658232190602-be6cd5b976f1?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "grayscale(20%)"
        }}
      >
        <p className="butler-font text-4xl z-10">{name}</p>
        <div className="flex justify-between items-center z-10">
          <div className="flex items-center gap-x-1">
            <p className="butler-font text-base bg-[#010101] text-[#E6E4E0] w-fit py-1 px-3 rounded-full">
              {website}
            </p>
            <p className="butler-font text-base bg-[#E6E4E0] text-[#010101] w-fit py-1 px-3 rounded-full">
              Featured author
            </p>
          </div>
          <span className="text-base">See blogs</span>
        </div>
        <div className="absolute inset-0 bg-[#E6E4E0] opacity-1 hover:opacity-0 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default SliderCard;
