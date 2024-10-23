import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({
  setSearchFieldData,
  setSearchCountryData,
  searchCountryData,
}) => {
  function selectRegion(e) {
    let value = e.target.value;
    setSearchFieldData(value);
  }
  function selectCountry(e) {
    let value = e.target.value;
    setSearchCountryData(value);
  }
  return (
    <div className="bg-white-500 flex flex-col font-custom sm:flex-row sm:justify-between sm:w-[100%]">
      <div className="bg-white shadow-md mx-[40px] mt-[20px] h-[80px] sm:mt-[30px] sm:mx-0 sm:w-[35%] sm:ml-[40px] flex rounded-md justify-center items-center sm:overflow-hidden">
        <FaSearch className="text-gray-900 text-xl pl-1"></FaSearch>
        <input
          className="w-[79%] h-[100%] text-base border-none outline-none pl-3"
          type="text"
          name="search"
          id=""
          value={searchCountryData}
          placeholder="Search for a country..."
          onChange={selectCountry}
        />
      </div>
      <div className=" mx-[40px] mt-[50px] h-[80px] sm:mx-0 sm:mt-[30px] sm:w-[21%] sm:mr-[40px]">
        <select
          name=""
          id="region"
          className="bg-white shadow-md border-none outline-none w-[60%] h-[100%] text-base text-center rounded-md sm:w-[100%]"
          onChange={selectRegion}
        >
          <option value="Filter by Region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
