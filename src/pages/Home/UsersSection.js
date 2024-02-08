import React from "react";
import UsersList from "../../features/users/UsersList";

const UsersSection = () => {
  return (
    <div className="h-auto px-5 ">
      <h2 className="font-[400] text-2xl mb-3">Find Author</h2>
      <UsersList />
    </div>
  );
};

export default UsersSection;
