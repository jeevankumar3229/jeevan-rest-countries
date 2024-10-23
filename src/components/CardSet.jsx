import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const CardSet = () => {
  let [countryData, setCountryData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let data = await fetch("https://restcountries.com/v3.1/all");
        let jsonFormat = await data.json();

        setCountryData(jsonFormat);
      } catch (Error) {
        console.log(Error);
      }
      7;
    }
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center my-[50px] font-custom sm:flex-row sm:flex-wrap sm:justify-between sm:mx-[40px]">
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
