import HomePage from "./Pages/HomePage";
import { useEffect, useState } from "react";
import SingleCountry from "./Pages/SingleCountry";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import NotFoundPage from "./Pages/NotFoundPage";
import { fetchData } from "./components/util/UtilityFunctions";
function App() {
  let [countriesData, setCountriesData] = useState([]);
  let [countryData, setCountryData] = useState([]);
  let [selectRegionData, setSelectRegionData] = useState("");
  let [searchCountryData, setSearchCountryData] = useState("");
  let [subRegionData, setSubRegionData] = useState([]);
  let [selectSubRegionData, setSelectSubRegionData] = useState([]);
  let [sortCountry, setSortCountry] = useState("");
  let [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchData(setCountriesData, setCountryData);
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
                  selectRegionData={selectRegionData}
                  setSelectRegionData={setSelectRegionData}
                  searchCountryData={searchCountryData}
                  setSearchCountryData={setSearchCountryData}
                  subRegionData={subRegionData}
                  setSubRegionData={setSubRegionData}
                  selectSubRegionData={selectSubRegionData}
                  setSelectSubRegionData={setSelectSubRegionData}
                  sortCountry={sortCountry}
                  setSortCountry={setSortCountry}
                />
              </div>
            }
          />
          <Route
            path="/country/:id"
            element={
              <div className={darkMode && "dark"}>
                <SingleCountry data={countriesData} />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className={darkMode && "dark"}>
                <NotFoundPage />
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
