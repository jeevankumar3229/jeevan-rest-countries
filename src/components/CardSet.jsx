import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const CardSet = ({
  searchFieldData,
  searchCountryData,
  setSearchCountryData,
}) => {
  let [countryData, setCountryData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let data = await fetch("https://restcountries.com/v3.1/all");
        let jsonFormat = await data.json();
        if (searchFieldData !== "" && searchFieldData !== "Filter by Region") {
          jsonFormat = jsonFormat.filter((item) => {
            if (item.region === searchFieldData) {
              return item;
            }
          });
        }
        setCountryData(jsonFormat);
      } catch (Error) {
        console.log(Error);
      }
    }
    fetchData();
  }, [searchFieldData]);
  useEffect(() => {
    async function fetchData() {
      try {
        let data = await fetch("https://restcountries.com/v3.1/all");
        let jsonFormat = await data.json();
        if (searchCountryData !== "") {
          jsonFormat = jsonFormat.filter((item) => {
            if (
              item.name.common.toLowerCase() == searchCountryData.toLowerCase()
            ) {
              return item;
            }
          });
        }

        setCountryData(jsonFormat);
      } catch (Error) {
        console.log(Error);
      }
    }
    fetchData();
  }, [searchCountryData]);
  return (
    <div className="bg-white-500 flex flex-col items-center my-[50px] font-custom sm:flex-row sm:flex-wrap sm:justify-between sm:mx-[40px]">
      {console.log(searchCountryData)}
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
