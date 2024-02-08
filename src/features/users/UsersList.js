import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const UsersList = () => {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map((user, index) => (
    // <SliderCard key={index} name={user.name} website={user.website}/>
    <li
      key={index}
      className="flex items-center justify-center text-center h-auto py-4 pr-2 text-lg font-[300] border-b border-b-[#2C2C2C]"
    >
      <Link to={`/user/${user.id}`}>{user.name}</Link>
      {/* <ArrowUpRightIcon className="w-5 h-5" /> */}
      
    </li>
  ));

  return <ul className="h-[220px] overflow-y-scroll list-disc">{renderedUsers}</ul>;
};

export default UsersList;
