import React from "react";
import UsersList from "../../features/users/UsersList";


const UsersSection = () => {
  return (
    <section className="flex flex-col overflow-hidden w-full bg-[#010101] text-[#010101] pt-[3rem]">

        <h2 className="font-[400] text-6xl p-5 border-b border-black text-[#1E1E1E]">
          Top <br />
          auth
          <span>
            <div className="w-[72px] h-[30px] border-4 border-[#1E1E1E] rounded-full inline-block"></div>
          </span>
          rs
        </h2>
        {/* <button className="font-[300]  text-black border-b border-b-black text-base md:text-lg py-1.5 px-3" >All authors</button> */}

      <UsersList />
    </section>
  );
};

export default UsersSection;
