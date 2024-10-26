import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const BackButton = () => {
  return (
    <div className="dark:bg-dm-bg sm:pt-[70px] pt-11 bg-lm-bg">
      <Link to="/">
        <button className="flex justify-center items-center text-xl ml-[40px] sm:ml-[80px] drop-shadow-md dark:bg-dm-elements dark:text-white font-light bg-lm-elements-dm-text px-9 py-3 mb-[70px] rounded-md">
          <FaArrowLeft className="text-black mr-2 dark:text-white font-light"></FaArrowLeft>
          <p>Back</p>
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
