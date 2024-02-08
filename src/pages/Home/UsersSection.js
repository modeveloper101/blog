import React from "react";
import UsersList from "../../features/users/UsersList";

const UsersSection = () => {
  return (
    <div className="h-auto px-5 py-[3rem] bg-[#7D8375] text-[#A6CA1E]">
      <h2 className="font-[500] text-2xl mb-3">Find by Author</h2>
      <UsersList />
    </div>
  );
};

export default UsersSection;
