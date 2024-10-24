import Header from "./components/Header";
import Search from "./components/Search";
import CardSet from "./components/CardSet";
import HomePage from "./Pages/HomePage";
import { useEffect, useState } from "react";
function App() {
  let [countriesData, setCountriesData] = useState([]);
  let [countryData, setCountryData] = useState([]);
  let [searchFieldData, setSearchFieldData] = useState("");
  let [searchCountryData, setSearchCountryData] = useState("");
  let [subRegionData, setSubRegionData] = useState([]);
  let [selectSubRegionData, setSelectSubRegionData] = useState([]);
  let [sortState, setSortState] = useState("");
  let [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        let data = await fetch("https://restcountries.com/v3.1/all");
        let jsonFormat = await data.json();
        setCountriesData(jsonFormat);
        setCountryData(jsonFormat);
      } catch (Error) {
        console.log(Error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className={darkMode && "dark"}>
      <HomePage
        data={countriesData}
        countryData={countryData}
        setCountryData={setCountryData}
        searchFieldData={searchFieldData}
        setSearchFieldData={setSearchFieldData}
        searchCountryData={searchCountryData}
        setSearchCountryData={setSearchCountryData}
        subRegionData={subRegionData}
        setSubRegionData={setSubRegionData}
        selectSubRegionData={selectSubRegionData}
        setSelectSubRegionData={setSelectSubRegionData}
        sortState={sortState}
        setSortState={setSortState}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
}

export default App;
