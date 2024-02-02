import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";
// import { Link } from "react-router-dom";
import SliderCard from "../../components/SliderCard";

const UsersList = () => {
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  }, []);

  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map((user, index) => (
    <SliderCard key={index} name={user.name} />
  ));

  return (
    <div className="w-full overflow-hidden mt-5">
      <motion.div
        ref={dragSlider}
        className="cursor-grab"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex w-fit"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {renderedUsers}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UsersList;
