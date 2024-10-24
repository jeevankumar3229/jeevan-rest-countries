import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import CardSet from "../components/CardSet";
import { useState } from "react";

const HomePage = ({
  data,
  countryData,
  setCountryData,
  searchFieldData,
  setSearchFieldData,
  searchCountryData,
  setSearchCountryData,
  subRegionData,
  setSubRegionData,
  selectSubRegionData,
  setSelectSubRegionData,
  sortState,
  setSortState,
  darkMode,
  setDarkMode,
}) => {
  return (
    <div className="dark:bg-black dark:text-white h-[100vh]">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Search
        setSearchFieldData={setSearchFieldData}
        setSearchCountryData={setSearchCountryData}
        searchCountryData={searchCountryData}
        data={data}
        countryData={countryData}
        setCountryData={setCountryData}
        searchFieldData={searchFieldData}
        subRegionData={subRegionData}
        setSubRegionData={setSubRegionData}
        selectSubRegionData={selectSubRegionData}
        setSelectSubRegionData={setSelectSubRegionData}
        sortState={sortState}
        setSortState={setSortState}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <CardSet
        searchFieldData={searchFieldData}
        searchCountryData={searchCountryData}
        setSearchCountryData={setSearchCountryData}
        data={data}
        countryData={countryData}
        setCountryData={setCountryData}
        subRegionData={subRegionData}
        setSubRegionData={setSubRegionData}
        selectSubRegionData={selectSubRegionData}
        setSelectSubRegionData={setSelectSubRegionData}
        sortState={sortState}
        setSortState={setSortState}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
};

export default HomePage;
