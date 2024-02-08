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
      className="flex items-center justify-between py-3 px-2 text-lg font-[300] "
    >
      <ArrowUpRightIcon className="w-5 h-5" />
      <Link to={`/user/${user.id}`}>{user.name}</Link>
      
      
    </li>
  ));

  return <ul className="users h-[220px] overflow-y-auto">{renderedUsers}</ul>;
};

export default UsersList;
