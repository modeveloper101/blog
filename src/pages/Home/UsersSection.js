import React from "react";
import UsersList from "../../features/users/UsersList";
import { Link } from "react-router-dom";

const UsersSection = () => {
  return (
    <section className="flex flex-col overflow-hidden w-full h-[100vh] bg-[#E6E4E0]  text-[#010101] py-[3rem] px-5">
      <div className="py-8 flex items-end justify-between">
        <div className="flex">
          <h2 className="font-[500] uppercase text-5xl">
            Stay <br />
            Tuned{" "}
          </h2>
          {/* <span className="text-[9px] bg-[#CC4A30] text-[#010101] p-1 rounded-full capitalize w-fit h-fit">
            Stay tuned
          </span> */}
        </div>
        <Link to="/" className="underline text-base">
          By Ervin Howell
        </Link>
      </div>
      <div
        className="w-full h-full flex flex-col justify-between relative "
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/blog5.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "grayscale(20%)",
        }}
      ></div>
      {/* <h2 className="font-[300] text-6xl p-5 border-b border-black text-[#E6E4E0]">
          Top <br />
          auth
          <span>
            <div className="w-[72px] h-[30px] border-4 border-[#E6E4E0] rounded-full inline-block"></div>
          </span>
          rs
        </h2> */}

      {/* <button className="font-[300]  text-black border-b border-b-black text-base md:text-lg py-1.5 px-3" >All authors</button> */}

      {/* <UsersList /> */}
    </section>
  );
};

export default UsersSection;
