import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const CardSet = ({
  searchFieldData,
  searchCountryData,
  setSearchCountryData,
  data,
  countryData,
  setCountryData,
  subRegionData,
  setSubRegionData,
  selectSubRegionData,
  setSelectSubRegionData,
  sortState,
  setSortState,
}) => {
  let [regionData, setRegionData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let updatedData = data;
      let regionDataSet = new Set();
      let regionData = [];
      try {
        if (searchFieldData !== "" && searchFieldData !== "Filter by Region") {
          updatedData = data.filter((item) => {
            if (item.region === searchFieldData) {
              regionDataSet.add(item.subregion);
              return item;
            }
          });
          regionData = Array.from(regionDataSet);
        }
        console.log(regionData);
        setSubRegionData(regionData);
        setCountryData(updatedData);
        setRegionData(updatedData);
      } catch (Error) {
        console.log(Error);
      }
    }
    fetchData();
  }, [searchFieldData]);
  useEffect(() => {
    async function fetchData() {
      let updatedData = data;
      try {
        if (searchCountryData !== "") {
          updatedData = data.filter((item) => {
            if (
              item.name.common.toLowerCase() == searchCountryData.toLowerCase()
            ) {
              return item;
            }
          });
        }

        setCountryData(updatedData);
      } catch (Error) {
        console.log(Error);
      }
    }
    fetchData();
  }, [searchCountryData]);

  useEffect(() => {
    async function fetchData() {
      try {
        let updatedData = regionData;
        if (
          selectSubRegionData !== "" &&
          selectSubRegionData !== "Filter by SubRegion"
        ) {
          updatedData = data.filter((item) => {
            if (item.subregion === selectSubRegionData) {
              return item;
            }
          });
        }
        setCountryData(updatedData);
      } catch (Error) {
        console.log(Error);
      }
    }
    fetchData();
  }, [selectSubRegionData]);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(sortState);
        let updatedData = countryData;
        console.log(updatedData);
        if (sortState === "area-up") {
          updatedData = updatedData.toSorted((a, b) => a.area - b.area);
        } else if (sortState === "area-down") {
          updatedData = updatedData.toSorted((a, b) => b.area - a.area);
        } else if (sortState === "population-up") {
          updatedData = updatedData.toSorted(
            (a, b) => a.population - b.population
          );
        } else if (sortState === "population-down") {
          updatedData = updatedData.toSorted(
            (a, b) => b.population - a.population
          );
        }
        setCountryData(updatedData);
      } catch (Error) {
        console.log(Error);
      }
    }
    fetchData();
  }, [sortState, countryData]);

  return (
    <div className="bg-white-500 flex flex-col items-center my-[50px] font-custom sm:flex-row sm:flex-wrap sm:justify-between sm:mx-[40px]">
      {console.log(subRegionData)}
      {countryData.map((item, index) => (
        <Card
          key={index}
          imageURL={item.flags.png}
          cName={item.name.common}
          population={item.population}
          region={item.region}
          capital={item.capital} // handling cases where capital is undefined
        />
      ))}
    </div>
  );
};

export default CardSet;
