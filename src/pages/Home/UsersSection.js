import React from "react";
import UsersList from "../../features/users/UsersList";

const UsersSection = () => {
  return (
    <section className="flex flex-col overflow-hidden w-full bg-[#E6E4E0] text-[#010101] pt-[3rem]">
      <h2 className="font-[300] text-6xl p-5 border-b border-black">
        Top <br />
        auth
        <span>
          <div
            className="w-[72px] h-[30px] border-4 border-black rounded-full inline-block"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1658232190602-be6cd5b976f1?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              filter: "grayscale(20%)",
            }}
          ></div>
        </span>
        rs
      </h2>
      <UsersList />
    </section>
  );
};

export default UsersSection;
