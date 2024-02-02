import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";
// import { Link } from "react-router-dom";
import SliderCard from "../../components/SliderCard";

const UsersList = () => {


  const users = useSelector(selectAllUsers);

  const renderedUsers = users.slice(0,3).map((user, index) => (
    <SliderCard key={index} name={user.name} website={user.website}/>
  ));

  return (
    <div className="w-full">
      {renderedUsers}
    </div>
  );
};

export default UsersList;
