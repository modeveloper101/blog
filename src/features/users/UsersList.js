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
      className="leading-[1.3] pr-5 py-2.5 min-w-fit text-lg font-[400]"
    >
      <Link to={`/user/${user.id}`}>{user.name}</Link>
      {/* <ArrowUpRightIcon className="w-5 h-5" /> */}
    </li>
  ));

  return <ul className="flex items-center w-full overflow-auto">
    <li className="leading-[1.3] pr-5 min-w-fit text-xl font-[400] text-[#C2C2C2]">Find by author</li>{renderedUsers}</ul>;
};

export default UsersList;
