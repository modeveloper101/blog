import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionButtons";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams();

  let additionalText1 =
    ". It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";
  let additionalText2 =
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.";
  let additionalText3 =
    `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.`;

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <article className="px-4 h-auto py-6">
      <div
        className="h-[200px] w-full rounded-xl"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1583407727557-c3cbea1bea54?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm font-[300] text-[#D3D0CC]">
          <PostAuthor userId={post.userId} />
          <TimeAgo timeStamp={post.date} />
        </p>
        <ReactionsButtons post={post} />
      </div>
      <h2 className="butler-font leading-[1.2] text-4xl my-2">{post.title}</h2>
      <p className="text-base font-[300] mb-1 text-[#D3D0CC]">
        {post.body} {additionalText1}{" "}
        <span className="my-3 block">{additionalText2}</span>
        <span className="block">{additionalText3}</span>
      </p>
      <span className="flex item-center justify-center py-2 rounded-xl w-full font-[400] tracking-wide bg-[#1E1E1E] text-base mt-3">
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
      </span>
    </article>
  );
};

export default SinglePostPage;
