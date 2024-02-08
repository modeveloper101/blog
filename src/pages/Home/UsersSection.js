import React from "react";
import UsersList from "../../features/users/UsersList";

const UsersSection = () => {
  return (
    <div className="h-auto px-5">
      <h2 className="font-[500] text-2xl mb-3">Featured authors</h2>
      <UsersList />
    </div>
  );
};

export default UsersSection;
