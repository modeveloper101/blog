import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { selectPostsByUser } from "../posts/postsSlice";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  //OLD CODE 
  // const postForUser = useSelector((state) => {
  //   const allPost = selectAllPosts(state);
  //   return allPost.filter((post) => post.userId === Number(userId));
  // });

  //NEW CODE
  const postForUser = useSelector((state) =>
    selectPostsByUser(state, Number(userId))
  );

  const postTiles = postForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));
  return (
    <section>
      <h2>{`${user?.name}'s Posts`}</h2>
      <ol>{postTiles}</ol>
    </section>
  );
};

export default UserPage;
