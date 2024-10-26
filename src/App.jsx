import HomePage from "./Pages/HomePage";
import { useEffect, useState } from "react";
import SingleCountry from "./Pages/SingleCountry";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainLayout from "./Layout/MainLayout";
import NotFoundPage from "./Pages/NotFoundPage";
function App() {
  let [countriesData, setCountriesData] = useState([]);
  let [countryData, setCountryData] = useState([]);
  let [searchFieldData, setSearchFieldData] = useState("");
  let [searchCountryData, setSearchCountryData] = useState("");
  let [subRegionData, setSubRegionData] = useState([]);
  let [selectSubRegionData, setSelectSubRegionData] = useState([]);
  let [sortState, setSortState] = useState("");
  let [darkMode, setDarkMode] = useState(false);
  let [data2, setData2] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let data = await fetch("https://restcountries.com/v3.1/all");
        let jsonFormat = await data.json();
        setCountriesData(jsonFormat);
        setCountryData(jsonFormat);
        setData2(jsonFormat);
      } catch (Error) {
        console.log(Error);
      }
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className={darkMode && "dark"}>
              <MainLayout darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          }
        >
          <Route
            path="/"
            element={
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
            }
          />
          <Route
            path="/country/:id"
            element={
              <div className={darkMode && "dark"}>
                <SingleCountry
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                  data={countriesData}
                  data2={data2}
                />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className={darkMode && "dark"}>
                <NotFoundPage darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
