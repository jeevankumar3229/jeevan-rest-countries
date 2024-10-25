import React from "react";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import SingleCountryDisplay from "../components/SingleCountryDisplay";
const SingleCountry = ({ darkMode, setDarkMode, data }) => {
  return (
    <div>
      <Header />
      <BackButton />
      <SingleCountryDisplay data={data} />
    </div>
  );
};

export default SingleCountry;
