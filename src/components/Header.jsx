import React from "react";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" py-[70px] h-[75px] bg-white flex justify-between items-center shadow-md sm:py-[40px]">
      <p className="font-custom font-extrabold text-2xl ml-[40px]">
        Where in the world?
      </p>
      <button className="flex justify-center items-center text-xl mr-[40px]">
        <FaMoon className="text-black mr-2"></FaMoon>
        <p>Dark Mode</p>
      </button>
    </div>
  );
};

export default Header;
