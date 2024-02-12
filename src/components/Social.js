import React from "react";

const Social = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center px-5">
      <h3 className="text-4xl mb-2 capitalize">Follow us</h3>
      <div className="flex w-full items-center justify-center gap-x-5">
        <img
          className="w-[24px] h-[24px]"
          src={`${process.env.PUBLIC_URL}/social1.png`}
          alt="x"
        />
        <img
          className="w-[24px] h-[24px]"
          src={`${process.env.PUBLIC_URL}/social3.png`}
          alt="threads"
        />
        <img
          className="w-[24px] h-[24px]"
          src={`${process.env.PUBLIC_URL}/social2.png`}
          alt="spotify"
        />
      </div>
    </div>
  );
};

export default Social;
