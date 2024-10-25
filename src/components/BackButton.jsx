import React from "react";
import { FaArrowLeft } from "react-icons/fa";
const BackButton = () => {
  return (
    <div>
      <a href="/">
        <button className="flex justify-center items-center text-xl ml-[40px] font-light bg-pink-300 px-9 py-3 mt-11 mb-[70px] sm:mt-[80px] rounded-md">
          <FaArrowLeft className="text-black mr-2 dark:text-white font-light"></FaArrowLeft>
          <p>Back</p>
        </button>
      </a>
    </div>
  );
};

export default BackButton;
