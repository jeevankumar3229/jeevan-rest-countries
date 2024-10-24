import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = ({ darkMode, setDarkMode }) => {
  function buttonClick(e) {
    setDarkMode(!darkMode);
  }
  return (
    <div className=" py-[70px] h-[75px] bg-white flex justify-between items-center shadow-md sm:py-[40px] dark:bg-gray-500 dark:text-white dark:shadow-sm">
      <p className="font-custom font-extrabold text-2xl ml-[40px]">
        Where in the world?
      </p>
      <button
        className="flex justify-center items-center text-xl mr-[40px]"
        onClick={buttonClick}
      >
        <MdOutlineDarkMode className="text-black mr-2 dark:text-white"></MdOutlineDarkMode>
        <p>Dark Mode</p>
      </button>
    </div>
  );
};

export default Header;
