import React from "react";

const SliderCard = ({ name }) => {
  return (
    <div className="flex flex-col items-start justify-center w-[240px] h-[184px] py-0">
      {/* <div
        className="w-[248px] h-[280px] rounded-xl"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div> */}
      <p className="butler-font text-2xl px-1 pt-1">{name}</p>
    </div>
  );
};

export default SliderCard;
