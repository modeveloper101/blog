import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";

const UsersList = () => {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map((user, index) => (
    <li
      key={index}
      className="leading-[1.3] pr-5 py-3 min-w-fit text-lg font-[400]"
    >
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </li>
  ));

  return (
    <ul className="flex items-center w-full overflow-auto">
      <li className="leading-[1.3] pr-5 min-w-fit text-xl font-[400] text-[#C2C2C2]">
        Find by author
      </li>
      {renderedUsers}
    </ul>
  );
};

export default UsersList;
