import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCount, increaseCount } from "../features/posts/postsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);

  return (
    <header className="Header">
      <h1 className="text-red-400">Redux Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">post</Link>
          </li>
          <li>
            <Link to="user">Users</Link>
          </li>
        </ul>
      </nav>
      <button onClick={() => dispatch(increaseCount())}>{count}</button>
    </header>
  );
};

export default Header;
