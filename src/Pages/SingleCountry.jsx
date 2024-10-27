import React from "react";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import SingleCountryDisplay from "../components/SingleCountryDisplay";
const SingleCountry = ({ data }) => {
  return (
    <div
      className="dark:bg-dm-bg bg-lm-bg font-custom"
      style={{ minHeight: "100vh" }}
    >
      <SingleCountryDisplay data={data} />
    </div>
  );
};

export default SingleCountry;
