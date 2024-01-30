import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
// import React from "react";

// const Images = [
//   "https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1561971760-24538f9c5de4?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// function testing() {
//   let blogImages = [];

//   for(let i = 0; i < 10; i++) {
//     const imagesForIteration = Images.map((image, index) => (
//       <img
//         src={image}
//         alt={index}
//         className="h-[230px] w-full object-cover bg-center rounded-xl"
//       />
//     ))

//     blogImages.push(imagesForIteration)
//   }
// }

// testing();
// const imageOption = Images.map((image) => (
//   <img
//     src={image}
//     alt="blog-post"
//     className="h-[230px] w-full object-cover bg-center"
//   />
// ));

const PostsExcerpt = ({ post, imageUrl }) => {
  const [isHovered, setIsHoverd] = useState(false);
  return (
    <article
      onMouseOver={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      {/* {imageOption} */}
      <div
        className={`h-[350px] w-full flex flex-col justify-end p-3 rounded-lg ${
          !isHovered ? "grayscale" : ""
        } transition-all duration-300`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <p className="text-sm font-[400] mt-4 text-gray-100">
          <PostAuthor userId={post.userId} />
          <TimeAgo timeStamp={post.date} />
        </p>
        <h2 className="font-[400] leading-[1.3] text-2xl my-1 text-white">
          {post.title}
        </h2>
        <p className="flex justify-between items-end text-base font-[300] mb-1 text-gray-100">
          {post.body.substring(0, 75)}...{" "}
          <span className="text-base font-[400]">
            <Link to={`post/${post.id}`}>
              {!isHovered ? (
                <ArrowUpRightIcon className="w-5 h-5 transition-all duration-300" />
              ) : (
                <ArrowUpRightIcon className="w-5 h-5 rotate-45 transition-all duration-300" />
              )}
            </Link>
          </span>
        </p>
      </div>
      {/* <img
        src={imageUrl}
        alt="blog-post"
        className="h-[400px] w-full object-cover bg-center rounded-xl"
      /> */}
      {/* <p className="text-sm font-[400] mt-4 text-gray-700">
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <h2 className="font-[400] leading-[1.3] text-2xl my-1">{post.title}</h2>
      <p className="flex justify-between items-end text-base font-[300] mb-1 text-gray-700">
        {post.body.substring(0, 75)}...{" "}
        <span className="text-base font-[400]">
          <Link to={`post/${post.id}`}>
            <ArrowUpRightIcon className="w-5 h-5" />
          </Link>
        </span>
      </p> */}

      {/* <ReactionButtons post={post} /> */}
    </article>
  );
};

// PostsExcerpt = React.memo(PostsExcerpt);

export default PostsExcerpt;
