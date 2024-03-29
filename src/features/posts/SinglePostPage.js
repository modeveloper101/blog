import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionButtons";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const Images = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1551392505-f4056032826e?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 9,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1629198735660-e39ea93f5c18?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 10,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1581182786510-168e6bc0013d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 11,
  },
  {
    imgUrl:
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 12,
  },
];

const SinglePostPage = () => {
  const { postId } = useParams();

  let additionalText1 =
    ". It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";
  let additionalText2 =
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.";
  let additionalText3 = `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.`;

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  const image = Images.find((image) => image.id === Number(postId));
  const imgUrl = image
    ? image.imgUrl
    : "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <article className="px-4 h-auto pt-4 pb-[3rem]">
      <div>
        <ArrowLeftIcon className="w-5 h-5 inline-block mr-1" />
        <Link to={`/`} className="text-lg font-[400]">Back</Link>
      </div>
   
      <div
        className="h-[200px] w-full rounded-xl mt-3"
        style={{
          backgroundImage: `url(${imgUrl})`,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex justify-between items-center mt-6">
        <p className="text-base font-[300] text-[#D3D0CC]">
          <PostAuthor userId={post.userId} />
          <TimeAgo timeStamp={post.date} />
        </p>
        <ReactionsButtons post={post} />
      </div>
      <h2 className="butler-font leading-[1.1] text-4xl my-2">{post.title}</h2>
      <p className="text-base font-[200] mb-1 text-[#D3D0CC]">
        {post.body} {additionalText1}{" "}
        <span className="my-3 block">{additionalText2}</span>
        <span className="block">{additionalText3}</span>
      </p>
      <span className="flex item-center justify-center py-2.5 rounded-sm w-full font-[400] tracking-wide bg-[#1E1E1E] text-base mt-4">
        <Link to={`/post/edit/${post.id}`}>Edit this Post</Link>
      </span>
    </article>
  );
};

export default SinglePostPage;
