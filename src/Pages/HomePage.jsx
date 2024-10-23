import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import CardSet from "../components/CardSet";
import { useState } from "react";

const HomePage = () => {
  let [searchFieldData, setSearchFieldData] = useState("");
  let [searchCountryData, setSearchCountryData] = useState("");
  return (
    <>
      <Header />
      <Search
        setSearchFieldData={setSearchFieldData}
        setSearchCountryData={setSearchCountryData}
        searchCountryData={searchCountryData}
      />
      <CardSet
        searchFieldData={searchFieldData}
        searchCountryData={searchCountryData}
        setSearchCountryData={setSearchCountryData}
      />
    </>
  );
};

export default HomePage;
