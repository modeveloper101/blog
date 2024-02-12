import React from "react";
import FooterItem from "./FooterItem";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="flex flex-col items-center text-center h-auto bg-[#010101] text-[#E6E4E0] px-5 pb-[1rem] pt-[3rem]">
      <Social />
      <div className="flex items-center p-1 gap-x-2 bg-[#E6E4E0] text-[#010101] w-full h-[60px] my-[2rem]">
        <h3 className="text-xl font-[500]">
          #Inside
          <span className="butler-font">Cielo</span>
        </h3>
        <div
          className="flex-1 h-full"
          style={{
            backgroundImage: `url("${process.env.PUBLIC_URL}/footer3.png")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "grayscale(0%)",
          }}
        ></div>
      </div>
      <ul className="mb-5">
        <div className="text-base font-[300]">
          <li className="pb-1">My Account</li>
          <li className="py-1">Subscribe</li>
          {/* <li className="py-1">Shop at Cielo</li>
          <li className="pt-1">Customer Care</li> */}
        </div>
      </ul>

      <span className="text-sm font-[300] text-[#5D5D5D]">
        © 2024 Cielo blog. All rights reserved
      </span>
    </div>
  );
};

export default Footer;
