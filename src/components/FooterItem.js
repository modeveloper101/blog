import React from "react";

const FooterItem = () => {
  return (
    <div className="p-0 max-w-fit h-auto">
      <span className="text-base font-[300]">About us</span>
      {/* <div
        className="w-full h-[3px]"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/strokee.png')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div> */}
      {/* <img className="" src={`${process.env.PUBLIC_URL}/strokee.png`}  alt="footer" /> */}
    </div>
  );
};

export default FooterItem;
