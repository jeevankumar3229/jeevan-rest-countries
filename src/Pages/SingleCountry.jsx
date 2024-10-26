import React from "react";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import SingleCountryDisplay from "../components/SingleCountryDisplay";
const SingleCountry = ({ darkMode, setDarkMode, data, data2 }) => {
  return (
    <div
      className="dark:bg-dm-bg bg-lm-bg font-custom"
      style={{ minHeight: "100vh" }}
    >
      <SingleCountryDisplay data={data} data2={data2} />
    </div>
  );
};

export default SingleCountry;
