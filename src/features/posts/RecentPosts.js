import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from "./postsSlice";

import PostsExcerpt from "./PostsExcerpt";

const Images = [
  "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1629198735660-e39ea93f5c18?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1581182786510-168e6bc0013d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1552972183-8d74b83ea8cf?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const RecentPosts = () => {
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice(8, 12)
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post, index) => (
      <PostsExcerpt key={post.id} post={post} imageUrl={Images[index]} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }
  return (
    <section className="flex flex-col w-full h-auto px-4">
      <h2 className="font-[500] text-2xl">Recent blog posts</h2>
      {content}
    </section>
  );
};

export default RecentPosts;
