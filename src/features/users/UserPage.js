import { useSelector } from "react-redux";
// import { selectUserById } from "./usersSlice";
import { selectPostsByUser } from "../posts/postsSlice";
import { Link, useParams } from "react-router-dom";
import PostAuthor from "../posts/PostAuthor";
import TimeAgo from "../posts/TimeAgo";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const UserPage = () => {
  const { userId } = useParams();
  // const user = useSelector((state) => selectUserById(state, Number(userId)));

  //OLD CODE
  // const postForUser = useSelector((state) => {
  //   const allPost = selectAllPosts(state);
  //   return allPost.filter((post) => post.userId === Number(userId));
  // });

  //NEW CODE
  const postForUser = useSelector((state) =>
    selectPostsByUser(state, Number(userId))
  );

  const postTiles = postForUser.map((post, index) => (
    // <li key={post.id}>
    //   <Link to={`/post/${post.id}`}>{post.title}</Link>
    // </li>
    <article key={post.id} className="">
      <img
        src={
          "https://images.unsplash.com/photo-1595236629937-aadaf7c1d99d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="blog-post"
        className="h-[250px] w-full object-cover bg-center rounded-sm" 
      />
      <div className="py-5">
        <p className="text-base text-[#C2C2C2] font-[300]">
          <PostAuthor userId={post.userId} />
          <TimeAgo timeStamp={post.date} />
        </p>
        <h2 className="butler-font leading-[1.2] text-3xl my-1">
          {post.title}
        </h2>
        <p className="flex justify-between items-end text-base font-[300] mb-1 text-[#C2C2C2]">
          {post.body.substring(0, 75)}...{" "}
          <span className="text-base font-[300]">
            <Link to={`/post/${post.id}`}>
              <ArrowUpRightIcon className="w-6 h-6" />
            </Link>
          </span>
        </p>
      </div>
    </article>
  ));
  return (
    <section className="px-5">
      {/* <h2>{`${user?.name}'s Posts`}</h2> */}
      <div className="grid grid-cols-1">{postTiles}</div>
    </section>
  );
};

export default UserPage;
