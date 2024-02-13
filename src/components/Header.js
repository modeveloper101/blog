// import { Link } from "react-router-dom";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full p-[1rem] flex items-center justify-between text-[#E6E4E0] bg-[#010101]">
      <Link to={"/"}>
        <h1 className="font-[500] ">Blog</h1>
        {/* <div>
          <h1 className="text-[1.5rem] md:text-[8rem] lg:text-[12rem] font-[700] leading-[0.6] text-[#1A9CF0]">
            Cielo
          </h1>
          <h1 className="text-[1.5rem] md:text-[8rem] lg:text-[12rem] font-[700] GFG leading-[1] ">
            Cielo
          </h1>
        </div> */}
      </Link>

      <nav className="flex items-center">
        <button>
          <Bars2Icon className="h-8 w-8" />
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
