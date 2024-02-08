import React from "react";
import UsersList from "../../features/users/UsersList";

const UsersSection = () => {
  return (
    <div className="h-auto px-5 pb-[3rem] text-center">
      <h2 className="font-[500] text-2xl mb-3 text-[#A6CA1E]">Find by Author</h2>
      <UsersList />
    </div>
  );
};

export default UsersSection;
