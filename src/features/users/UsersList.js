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
      className="flex items-center justify-between h-auto py-3 text-lg font-[300]"
    >
      <Link>{user.name}</Link>

      <ArrowUpRightIcon className="w-5 h-5" />
    </li>
  ));

  return <ul className="h-[220px] overflow-y-scroll">{renderedUsers}</ul>;
};

export default UsersList;
