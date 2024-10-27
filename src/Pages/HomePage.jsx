import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import CardSet from "../components/CardSet";
import { useState } from "react";

const HomePage = ({
  data,
  countryData,
  setCountryData,
  selectRegionData,
  setSelectRegionData,
  searchCountryData,
  setSearchCountryData,
  subRegionData,
  setSubRegionData,
  selectSubRegionData,
  setSelectSubRegionData,
  sortCountry,
  setSortCountry,
}) => {
  return (
    <div
      className="dark:bg-dm-bg dark:text-white bg-lm-bg text-lm-text dark:text-lm-elements-dm-text"
      style={{ minHeight: "100vh" }}
    >
      {/* <Header darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      <Search
        setSelectRegionData={setSelectRegionData}
        setSearchCountryData={setSearchCountryData}
        searchCountryData={searchCountryData}
        selectRegionData={selectRegionData}
        subRegionData={subRegionData}
        setSelectSubRegionData={setSelectSubRegionData}
        setSortCountry={setSortCountry}
      />
      <CardSet
        selectRegionData={selectRegionData}
        searchCountryData={searchCountryData}
        setSearchCountryData={setSearchCountryData}
        data={data}
        countryData={countryData}
        setCountryData={setCountryData}
        setSubRegionData={setSubRegionData}
        selectSubRegionData={selectSubRegionData}
        sortCountry={sortCountry}
      />
    </div>
  );
};

export default HomePage;
