import React from "react";
import UsersList from "../../features/users/UsersList";

const UsersSection = () => {
  return (
    <section className="flex flex-col overflow-hidden w-full bg-[#E6E4E0] text-[#010101] pt-[3rem]">
      <h2 className="font-[300] text-6xl p-5 border-b border-black">
        Top <br />
        auth
        <span>
          <div className="w-[72px] h-[30px] border-4 border-black rounded-full inline-block"></div>
        </span>
        rs
      </h2>
      <UsersList />
    </section>
  );
};

export default UsersSection;
