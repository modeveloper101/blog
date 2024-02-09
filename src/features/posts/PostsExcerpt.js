import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
// import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(9);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && window.scrollY <= 480) {
        setCurrentIndex(9);
      } else if (window.scrollY > 480 && window.scrollY <= 850) {
        setCurrentIndex(10);
      } else if (window.scrollY > 850 && window.scrollY <= 1220) {
        setCurrentIndex(11);
      } else if (window.scrollY > 1220) {
        setCurrentIndex(12);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <article
      onMouseOver={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      {/* {imageOption} */}
      <div
        className={`h-[380px] w-full flex flex-col justify-end p-5 ${
          post.id === currentIndex ? "" : "grayscale"
        } transition-all duration-300`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          mixBlendMode: "difference"
        }}
      >
        <p className={`text-base font-[300] mt-4 text-gray-200 `}>
          <PostAuthor userId={post.userId} />
          <TimeAgo timeStamp={post.date} />
        </p>
        <h2 className="flex justify-between items-end butler-font leading-[1.2] text-2xl my-1 text-white">
          {post.title}
          <span>
            <Link to={`post/${post.id}`}>
              {!isHovered ? (
                <ArrowUpRightIcon className="w-5 h-5 transition-all duration-300" />
              ) : (
                <ArrowUpRightIcon className="w-5 h-5 rotate-45 transition-all duration-300" />
              )}
            </Link>
          </span>
        </h2>
        <p
          className={`flex justify-between items-end text-base font-[300] mb-1 text-gray-100 leading-[1.3] hidden `}
        >
          {post.body.substring(0, 75)}...{" "}
          <span>
            <Link to={`post/${post.id}`}>
              <ArrowUpRightIcon className="w-5 h-5 transition-all duration-300" />
            </Link>
          </span>
        </p>
      </div>
      {/* <img
        src={imageUrl}
        alt="blog-post"
        className="h-[400px] w-full object-cover bg-center"
      />
      <div className="p-5">
        <p className="text-base text-[#C2C2C2] font-[300]">
          <PostAuthor userId={post.userId} />
          <TimeAgo timeStamp={post.date} />
        </p>
        <h2 className="butler-font leading-[1.2] text-3xl my-1">{post.title}</h2>
        <p className="flex justify-between items-end text-base font-[300] mb-1 text-[#C2C2C2]">
          {post.body.substring(0, 75)}...{" "}
          <span className="text-base font-[300]">
            <Link to={`post/${post.id}`}>
              <ArrowUpRightIcon className="w-5 h-5" />
            </Link>
          </span>
        </p>
      </div> */}
      {/* <ReactionButtons post={post} /> */}
    </article>
  );
};

// PostsExcerpt = React.memo(PostsExcerpt);

export default PostsExcerpt;
