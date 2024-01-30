import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from "./postsSlice";

import PostsExcerpt from "./PostsExcerpt";

const Images = [
  "https://images.pexels.com/photos/8072528/pexels-photo-8072528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.unsplash.com/photo-1618352319006-c22d55758c54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528120369764-0423708119ae?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1536096928601-99bac26a838b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <section className="flex flex-col w-full h-auto px-5 gap-y-4">
      <h2 className="font-[500] text-xl mb-1">Recent blog posts</h2>
      {content}
    </section>
  );
};

export default RecentPosts;
