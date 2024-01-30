import { useSelector } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError
} from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const Images = [
  "https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1561971760-24538f9c5de4?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError); 
  
  //Old code to display posts
  // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
  // const renderedPosts = orderedPosts.map((post) => (
  // ));

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post, index) => (
      <PostsExcerpt key={post.id} post={post} imageUrl={Images[index]}/>
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section className="flex flex-col w-full h-auto px-5 gap-y-6">
      <h2 className="font-[500] text-xl">Recent blog posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
