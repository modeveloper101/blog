import React from "react";
import UsersList from "../../features/users/UsersList";

const UsersSection = () => {
  return (
    <div className="h-auto px-4 bg-[#8E8E8E] ">
      {/* <h2 className="font-[500] text-4xl mb-3">Featured authors</h2> */}
      <UsersList />
    </div>
  );
};

export default UsersSection;
