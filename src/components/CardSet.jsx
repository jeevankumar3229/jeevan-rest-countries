import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import {
  fetchRegionData,
  fetchCountryData,
  fetchSubRegionData,
  sortData,
} from "./util/UtilityFunctions.js";

const CardSet = ({
  selectRegionData,
  searchCountryData,
  setSearchCountryData,
  data,
  countryData,
  setCountryData,
  setSubRegionData,
  selectSubRegionData,
  sortCountry,
}) => {
  let [regionData, setRegionData] = useState([]);
  useEffect(() => {
    fetchRegionData(
      data,
      selectRegionData,
      setSearchCountryData,
      setSubRegionData,
      setCountryData,
      setRegionData
    );
  }, [selectRegionData]);
  
  useEffect(() => {
    fetchCountryData(data, searchCountryData, setCountryData);
  }, [searchCountryData]);

  useEffect(() => {
    fetchSubRegionData(data, regionData, selectSubRegionData, setCountryData);
  }, [selectSubRegionData]);

  useEffect(() => {
    sortData(countryData, sortCountry, setCountryData);
  }, [sortCountry, countryData]);

  return (
    <div className=" grid gap-4 place-items-center my-[50px] font-custom sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 sm:mx-[80px] dark:bg-dm">
      {countryData.map((item, index) => (
        <Card
          key={index}
          imageURL={item.flags.png}
          cName={item.name.common}
          population={item.population}
          region={item.region}
          capital={item.capital}
        />
      ))}
    </div>
  );
};

export default CardSet;
