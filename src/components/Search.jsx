import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex flex-col font-custom sm:flex-row sm:justify-between sm:w-[100%]">
      <div className="bg-gray-500 mx-[40px] mt-[20px] h-[80px] sm:mt-[30px] sm:mx-0 sm:w-[35%] sm:ml-[40px] flex rounded-md justify-center items-center sm:overflow-hidden">
        <FaSearch className="text-gray-900 text-xl pl-1"></FaSearch>
        <input
          className=" bg-gray-500 w-[79%] h-[100%] text-base border-none outline-none pl-3"
          type="search"
          name="search"
          id=""
          placeholder="Search for a country..."
        />
      </div>
      <div className="mx-[40px] mt-[50px] h-[80px] sm:mx-0 sm:mt-[30px] sm:w-[21%] sm:mr-[40px]">
        <select
          name=""
          id="region"
          className="w-[60%] h-[100%] text-base text-center rounded-md sm:w-[100%]"
        >
          <option value="fbr">Filter by Region</option>
          <option value="af">Africa</option>
          <option value="am">America</option>
          <option value="as">Asia</option>
          <option value="eu">Europe</option>
          <option value="oc">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
