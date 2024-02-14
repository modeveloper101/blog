import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPostById, updatePost, deletePost } from "./postsSlice";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { selectAllUsers } from "../users/usersSlice";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const Images = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1606518559059-5fecead22c43?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 9,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1618352319006-c22d55758c54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 10,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1544276695-78ee85a81e64?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 11,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1625518962804-2f9bcd1c9c4c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 12,
  },
];

const EditPostForm = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
  const [requestStatus, setRequestStatus] = useState("idle");

  const image = Images.find((image) => image.id === Number(postId));
  const imgUrl = image
    ? image.imgUrl
    : "https://images.unsplash.com/photo-1595236629937-aadaf7c1d99d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const dispatch = useDispatch();

  if (!post) {
    return (
      <section>
        <h2>Post Not Found!</h2>
      </section>
    );
  }

  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setRequestStatus("Pending");
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/post/${postId}`);
      } catch (error) {
        console.error("Failed to update the post", error);
      } finally {
        setRequestStatus("idle");
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option className="bg-[#1E1E1E]" key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const onDeletePostClicked = () => {
    try {
      setRequestStatus("Pending");
      dispatch(
        deletePost({
          id: post.id,
        })
      ).unwrap();

      setTitle("");
      setContent("");
      setUserId("");
      navigate("/");
    } catch (error) {
      console.error("Failed to delete the post", error);
    } finally {
      setRequestStatus("idle");
    }
  };

  return (
    <section className="h-auto px-4 pt-4 pb-[3rem]">
      <div>
        <ArrowLeftIcon className="w-5 h-5 inline-block mr-1" />
        <Link to={`/`} className="text-lg font-[400]">
          Back
        </Link>
      </div>
      <div
        className="h-[200px] w-full rounded-xl mt-3 mb-4"
        style={{
          backgroundImage: `url(${imgUrl})`,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <form>
        <label className="text-lg font-[400] px-1" htmlFor="postTitle">
          Post Title{" "}
        </label>
        <input
          className="text-base text-[#C2C2C2] font-[200] bg-transparent border-b border-[#2C2C2C] rounded-none outline-none py-2.5 px-1 min-w-full  mb-4 focus:ring-blue-500 focus:border-b-blue-500"
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label className="text-lg font-[400] px-1" htmlFor="postAuthor">
          Author
        </label>
        <select
          className="text-base text-[#C2C2C2] font-[200] bg-transparent border-b border-[#2C2C2C] rounded-none outline-none py-2.5 min-w-full mb-4"
          id="postAuthor"
          defaultValue={userId}
          onChange={(e) => {
            setUserId(Number(e.target.value));
          }}
        >
          <option className="bg-[#1E1E1E]" value=""></option>
          {usersOptions}
        </select>
        <label className="text-lg font-[400] px-1" htmlFor="postContent">
          Content{" "}
        </label>
        <textarea
          className="text-base font-[200] text-[#C2C2C2] bg-transparent border-b border-[#2C2C2C] rounded-none outline-none py-2.5 px-1 min-w-full h-auto min-h-[120px]"
          style={{ resize: "vertical" }}
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <div className="mt-auto">
          <button
            className="flex item-center justify-center py-2.5 rounded-sm w-full font-[400] bg-[#1E1E1E] text-base"
            type="button"
            onClick={onSavePostClicked}
            disabled={!canSave}
          >
            Save Changes
          </button>
          <button
            className="flex item-center justify-center py-2.5 rounded-sm w-full font-[500] bg-transparent text-[#8C1818] text-base mt-2"
            type="button"
            onClick={onDeletePostClicked}
          >
            Delete Post
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditPostForm;
