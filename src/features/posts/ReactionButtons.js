import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import { HandThumbUpIcon, HeartIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

const reactionEmoji = {
  thumbsUp: <HandThumbUpIcon className="w-4 h-4 text-blue-300"/>,
  // wow: "🔥",
  heart: <HeartIcon className="w-4 h-4 text-red-300"/>,
  rocket: <RocketLaunchIcon className="w-4 h-4 text-indigo-400"/>,
  // coffee: "😍",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="flex items-center mr-2 gap-1 text-base text-[#D3D0CC] font-[300]"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div className="flex items-center">{reactionButtons}</div>;
};

export default ReactionButtons;
