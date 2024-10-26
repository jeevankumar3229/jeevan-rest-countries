import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Header = ({ darkMode, setDarkMode }) => {
  function buttonClick(e) {
    setDarkMode(!darkMode);
  }
  return (
    <div className=" py-[70px] h-[75px] drop-shadow-md bg-lm-elements-dm-text flex justify-between items-center sm:py-[40px] dark:bg-dm-elements dark:text-white">
      <p className="font-custom font-extrabold text-2xl ml-[40px] sm:ml-[80px]">
        Where in the world?
      </p>
      <button
        className="flex justify-center items-center text-xl mr-[40px] sm:mr-[80px]"
        onClick={buttonClick}
      >
        <MdDarkMode className="text-black mr-2 dark:text-white hidden dark:block" />
        <MdOutlineDarkMode className="text-black mr-2 dark:text-white dark:hidden"></MdOutlineDarkMode>
        <p>Dark Mode</p>
      </button>
    </div>
  );
};

export default Header;
