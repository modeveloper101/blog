import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
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

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      {/* {imageOption} */}
      <img
        src="https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="blog-post"
        className="h-[230px] w-full object-cover bg-center rounded-xl"
      />
      <p className="text-base font-[300] mt-4 text-gray-700">
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <h2 className="font-[400] leading-[1.3] text-2xl my-1">{post.title}</h2>
      <p className="text-base font-[300] mb-1 text-gray-700">
        {post.body.substring(0, 75)}...{" "}
        <span className="text-base font-[400]">
          <Link to={`post/${post.id}`}>Read more</Link>
        </span>
      </p>

      <ReactionButtons post={post} />
    </article>
  );
};

// PostsExcerpt = React.memo(PostsExcerpt);

export default PostsExcerpt;
