import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({
  setSelectRegionData,
  setSearchCountryData,
  searchCountryData,
  subRegionData,
  setSelectSubRegionData,
  setSortCountry,
}) => {
  function selectRegion(e) {
    let value = e.target.value;
    setSelectRegionData(value);
  }
  function selectCountry(e) {
    let value = e.target.value;
    setSearchCountryData(value);
  }

  function selectSubRegion(e) {
    let value = e.target.value;
    setSelectSubRegionData(value);
  }

  function sortBy(e) {
    let value = e.target.value;
    setSortCountry(value);
  }

  return (
    <div className="bg-lm-bg flex flex-col font-custom sm:flex-row sm:justify-between sm:mx-[80px] dark:bg-dm-bg dark:text-white">
      <div className="bg-lm-elements-dm-text shadow-md mx-[40px] mt-[20px] h-[80px] sm:mt-[30px] sm:mx-0 sm:w-[30%] sm:ml-[0px] flex rounded-md justify-center items-center sm:overflow-hidden  dark:bg-dm-elements dark:text-white">
        <FaSearch className="text-gray-900 text-xl pl-1 dark:text-white"></FaSearch>
        <input
          className="w-[79%] h-[100%] text-lm-input text-sm border-none outline-none pl-3 dark:bg-dm-elements dark:text-lm-elements-dm-text"
          type="text"
          name="search"
          id=""
          value={searchCountryData}
          placeholder="Search for a country..."
          onChange={selectCountry}
        />
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:w-[69%]">
        <div className=" mx-[40px] mt-[50px] h-[80px] sm:mx-0 sm:mt-[30px] sm:w-[37%] sm:mr-[0px]  dark:bg-dm-elements dark:text-white">
          <select
            name=""
            id="region"
            className="bg-lm-elements-dm-text text-lm-text shadow-md border-none outline-none w-[100%] h-[100%] text-sm text-center rounded-md sm:w-[100%] dark:bg-dm-elements dark:text-white"
            onChange={sortBy}
          >
            <option value="Sort By">Sort By</option>
            <option value="area-up">Area (Low to High)</option>
            <option value="area-down">Area (High to Low)</option>
            <option value="population-up">Population (Low to High)</option>
            <option value="population-down">Population (High to Low)</option>
          </select>
        </div>
        <div className=" mx-[40px] mt-[50px] h-[80px] sm:mx-0 sm:mt-[30px] sm:w-[33%] sm:mr-[0px] dark:bg-dm-elements dark:text-white">
          <select
            name=""
            id="region"
            className="bg-lm-elements-dm-text text-lm-text shadow-md border-none outline-none w-[100%] h-[100%] text-sm text-center rounded-md sm:w-[100%] dark:bg-dm-elements dark:text-white"
            onChange={selectSubRegion}
          >
            <option value="Filter by SubRegion">Filter by SubRegion</option>
            {subRegionData.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className=" mx-[40px] mt-[50px] h-[80px] sm:mx-0 sm:mt-[30px] sm:w-[27.5%] sm:mr-[0px] dark:bg-dm-elements dark:text-white">
          <select
            name=""
            id="region"
            className="bg-lm-elements-dm-text text-lm-text shadow-md border-none outline-none w-[100%] h-[100%] text-sm text-center rounded-md sm:w-[100%] dark:bg-dm-elements dark:text-white"
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
    </div>
  );
};

export default Search;
