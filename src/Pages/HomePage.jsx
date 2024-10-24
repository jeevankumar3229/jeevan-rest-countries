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
}) => {
  return (
    <>
      <Header />
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
      />
    </>
  );
};

export default HomePage;
