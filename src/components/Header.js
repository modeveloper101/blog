// import { Link } from "react-router-dom";
import { Bars2Icon } from "@heroicons/react/24/outline";

const Header = () => {

  return (
    <header className="w-full p-[1rem] flex items-center justify-between text-[#E6E4E0] bg-[#010101]">
      <h1 className="font-[500] ">Blog</h1>
      <nav className="flex items-center">
        <button>
          <Bars2Icon className="h-8 w-8"/>
        </button>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">post</Link>
          </li>
          <li>
            <Link to="user">Users</Link>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
